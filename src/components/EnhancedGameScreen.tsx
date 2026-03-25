import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import { applyChoice, changeScene } from '../store/gameSlice';
import ChoiceButton from './ChoiceButton';
import StatsDisplay from './StatsDisplay';
import { audioManager } from '../utils/audioManager';
import { chapter1 } from '../data/chapters/chapter1';
import { ChoiceOption } from '../types/game';

/**
 * 增强版游戏主屏幕
 * 实现完整的对话推进、音频播放和场景切换
 */
const EnhancedGameScreen: React.FC = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  const settings = useSelector((state: RootState) => state.settings);

  // UI状态
  const [showSettings, setShowSettings] = useState(false);
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // 获取当前场景数据
  const getCurrentScene = useCallback(() => {
    const scene = chapter1.scenes.find(s => s.id === gameState.currentScene);
    return scene;
  }, [gameState.currentScene]);

  const currentScene = getCurrentScene();

  // 播放背景音乐
  useEffect(() => {
    if (currentScene?.backgroundMusic && settings.audio.bgmEnabled) {
      audioManager.playBGM(currentScene.backgroundMusic).catch(() => {
        // 静默处理，无资源时不报错
      });
    }
  }, [currentScene?.backgroundMusic, settings.audio.bgmEnabled]);

  // 对话推进逻辑
  const currentDialog = currentScene?.dialog[currentDialogIndex];

  // 打字机效果
  useEffect(() => {
    if (!currentDialog?.text) return;
    
    const text = currentDialog.text;
    const speed = settings.display.textSpeed || 3;
    const interval = Math.max(20, 100 - speed * 15);
    
    if (settings.display.animatedText) {
      setDisplayedText('');
      setIsTyping(true);
      let index = 0;
      
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, interval);
      
      return () => clearInterval(timer);
    } else {
      setDisplayedText(text);
      setIsTyping(false);
    }
  }, [currentDialog?.text, currentDialogIndex, settings.display.textSpeed, settings.display.animatedText]);

  // 自动播放配音
  useEffect(() => {
    if (currentDialog?.voiceFile && settings.audio.voiceEnabled && !isPlayingVoice) {
      setIsPlayingVoice(true);
      const voicePath = `/grandmother-game/assets/audio/voice/${currentDialog.voiceFile}.mp3`;
      
      audioManager.playVoice(voicePath, () => {
        setIsPlayingVoice(false);
      }).catch(() => {
        setIsPlayingVoice(false);
      });
    }
  }, [currentDialog?.voiceFile, settings.audio.voiceEnabled, currentDialogIndex, isPlayingVoice]);

  // 点击屏幕推进对话
  const handleScreenClick = useCallback(() => {
    // 如果正在打字，跳过打字机效果
    if (isTyping && currentDialog?.text) {
      setDisplayedText(currentDialog.text);
      setIsTyping(false);
      return;
    }

    if (isPlayingVoice) {
      audioManager.stopVoice();
      setIsPlayingVoice(false);
    }

    if (!currentScene) return;

    if (currentDialogIndex < currentScene.dialog.length - 1) {
      if (settings.audio.sfxEnabled) {
        audioManager.playSFX('/grandmother-game/assets/audio/sfx/click.mp3');
      }
      setCurrentDialogIndex(prev => prev + 1);
      setShowChoices(false);
    } else if (!showChoices) {
      setShowChoices(true);
    }
  }, [currentScene, currentDialogIndex, showChoices, isPlayingVoice, settings.audio.sfxEnabled, isTyping, currentDialog?.text]);

  // 处理选择
  const handleChoiceClick = useCallback((choice: ChoiceOption) => {
    if (settings.audio.sfxEnabled) {
      audioManager.playSFX('/grandmother-game/assets/audio/sfx/select.mp3');
    }

    dispatch(applyChoice(choice));

    if (choice.effects.nextScene) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        dispatch(changeScene(choice.effects.nextScene!));
        setCurrentDialogIndex(0);
        setShowChoices(false);
        setIsTransitioning(false);
      }, 600);
    } else {
      setCurrentDialogIndex(0);
      setShowChoices(false);
    }
  }, [dispatch, settings.audio.sfxEnabled]);

  // 场景切换时重置对话索引
  useEffect(() => {
    setCurrentDialogIndex(0);
    setShowChoices(false);
  }, [gameState.currentScene]);

  if (!currentScene) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">场景加载中...</h2>
          <p className="text-gray-400">当前场景ID: {gameState.currentScene}</p>
          <button 
            onClick={() => dispatch(changeScene('1-1'))}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            返回第一章
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
      {/* 转场遮罩 */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-50 bg-black"
          />
        )}
      </AnimatePresence>

      {/* 游戏主界面 */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* 顶部状态栏 */}
        <div className="flex justify-between items-start p-4">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-white text-sm font-medium">
              第{gameState.currentChapter}章 · {chapter1.title}
            </p>
            <p className="text-gray-400 text-xs">
              场景 {gameState.currentScene}
            </p>
          </div>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 text-white hover:bg-black/80 transition-colors"
          >
            ⚙️ 设置
          </button>
        </div>

        {/* 角色立绘区域 */}
        <div className="flex-1 relative flex items-center justify-center px-8">
          <AnimatePresence>
            {currentDialog && !currentDialog.isNarrator && (
              <motion.div
                key={currentDialog.character}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* 角色名称气泡 */}
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
                    {currentDialog.character}
                  </span>
                </div>
                
                {/* 角色图像占位 */}
                <div className="w-48 h-64 bg-gradient-to-b from-white/10 to-transparent rounded-2xl flex items-center justify-center border border-white/20">
                  <span className="text-6xl">
                    {currentDialog.character === '容玉' ? '👵' : 
                     currentDialog.character === '纪止渊' ? '🧑' :
                     currentDialog.character === '纪舟野' ? '👨' :
                     currentDialog.character === '容若瑶' ? '👩' :
                     currentDialog.character === '纪舜英' ? '👴' : '👤'}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 对话框区域 */}
        <div 
          className="relative px-4 pb-6"
          onClick={!showChoices ? handleScreenClick : undefined}
          style={{ cursor: !showChoices ? 'pointer' : 'default' }}
        >
          <AnimatePresence mode="wait">
            {currentDialog && (
              <motion.div
                key={`dialog-${currentDialogIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentDialog.isNarrator ? (
                  /* 旁白样式 */
                  <div className="bg-gradient-to-r from-amber-900/90 to-orange-900/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-amber-500/30 mx-auto max-w-4xl">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-amber-400 text-sm">📖 旁白</span>
                      {isPlayingVoice && (
                        <span className="text-yellow-400 text-sm animate-pulse">
                          🎵 朗读中...
                        </span>
                      )}
                    </div>
                    <p className="text-amber-100 text-lg leading-relaxed italic">
                      {displayedText}
                      {isTyping && <span className="animate-pulse">|</span>}
                    </p>
                  </div>
                ) : (
                  /* 对话样式 */
                  <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10 mx-auto max-w-4xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-blue-400 font-semibold text-lg">
                        {currentDialog.character}
                      </span>
                      {currentDialog.expression && (
                        <span className="text-gray-400 text-sm">
                          ({currentDialog.expression})
                        </span>
                      )}
                      {isPlayingVoice && (
                        <span className="text-yellow-400 text-sm animate-pulse">
                          🎵 配音播放中...
                        </span>
                      )}
                    </div>
                    
                    <p className="text-white text-lg leading-relaxed">
                      {displayedText}
                      {isTyping && <span className="animate-pulse">|</span>}
                    </p>

                    {!showChoices && !isTyping && (
                      <div className="mt-4 text-right">
                        <span className="text-gray-400 text-sm animate-pulse">
                          点击继续 ▶
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* 选择按钮 */}
          <AnimatePresence>
            {showChoices && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-4 grid gap-3 max-w-2xl mx-auto"
              >
                {currentScene.choices.map((choice, index) => {
                  const isLocked = choice.requirements && (
                    (choice.requirements.stats && 
                      Object.entries(choice.requirements.stats).some(
                        ([key, value]) => gameState.playerStats[key as keyof typeof gameState.playerStats] < (value as number)
                      )
                    )
                  );

                  return (
                    <motion.div
                      key={choice.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ChoiceButton
                        choiceId={choice.id}
                        text={choice.text}
                        onClick={() => handleChoiceClick(choice)}
                        disabled={isLocked}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 右侧属性面板 */}
        <div className="fixed right-4 top-20 w-64 z-20">
          <div className="bg-black/80 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/10">
            <h3 className="text-white font-bold mb-3 text-sm">角色属性</h3>
            <StatsDisplay 
              stats={gameState.playerStats}
              relationships={gameState.relationships}
            />
          </div>
        </div>
      </div>

      {/* 设置面板 */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-6 max-w-md w-full mx-4 border border-white/20"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-white text-2xl font-bold mb-6">游戏设置</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">背景音乐</span>
                  <span className={settings.audio.bgmEnabled ? 'text-green-400' : 'text-gray-500'}>
                    {settings.audio.bgmEnabled ? '开启' : '关闭'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">配音</span>
                  <span className={settings.audio.voiceEnabled ? 'text-green-400' : 'text-gray-500'}>
                    {settings.audio.voiceEnabled ? '开启' : '关闭'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">音效</span>
                  <span className={settings.audio.sfxEnabled ? 'text-green-400' : 'text-gray-500'}>
                    {settings.audio.sfxEnabled ? '开启' : '关闭'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">文字动画</span>
                  <span className={settings.display.animatedText ? 'text-green-400' : 'text-gray-500'}>
                    {settings.display.animatedText ? '开启' : '关闭'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">文字速度</span>
                  <span className="text-blue-400">{settings.display.textSpeed}</span>
                </div>
              </div>

              <button
                onClick={() => setShowSettings(false)}
                className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                关闭设置
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedGameScreen;