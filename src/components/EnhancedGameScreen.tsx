import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import { applyChoice, changeScene } from '../store/gameSlice';
import SceneBackground from './SceneBackground';
import CharacterSprite from './CharacterSprite';
import TextAnimator from './TextAnimator';
import Narrator from './Narrator';
import ChoiceButton from './ChoiceButton';
import StatsDisplay from './StatsDisplay';
import SettingsPanel from './SettingsPanel';
import TransitionEffect from './TransitionEffect';
import { audioManager } from '../utils/audioManager';
import { chapter1 } from '../data/chapters/chapter1';

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

  // 获取当前场景数据
  const getCurrentScene = useCallback(() => {
    // 暂时只支持第一章
    const scene = chapter1.scenes.find(s => s.id === gameState.currentScene);
    return scene;
  }, [gameState.currentScene]);

  const currentScene = getCurrentScene();

  // 播放背景音乐
  useEffect(() => {
    if (currentScene?.backgroundMusic && settings.bgmEnabled) {
      audioManager.playBGM(currentScene.backgroundMusic).catch(console.warn);
    }
  }, [currentScene?.backgroundMusic, settings.bgmEnabled]);

  // 对话推进逻辑
  const currentDialog = currentScene?.dialog[currentDialogIndex];

  // 自动播放配音
  useEffect(() => {
    if (currentDialog?.voiceFile && settings.voiceEnabled && !isPlayingVoice) {
      setIsPlayingVoice(true);
      const voicePath = `/assets/audio/voice/${currentDialog.voiceFile}.mp3`;
      
      audioManager.playVoice(voicePath, () => {
        setIsPlayingVoice(false);
      }).catch(() => {
        // 配音播放失败，继续游戏
        setIsPlayingVoice(false);
      });
    }
  }, [currentDialog?.voiceFile, settings.voiceEnabled, currentDialogIndex]);

  // 对话完成后的处理
  const handleDialogComplete = useCallback(() => {
    if (!currentScene) return;

    // 如果还有更多对话，等待用户点击
    // 否则显示选择
    if (currentDialogIndex < currentScene.dialog.length - 1) {
      // 还有更多对话，等待点击推进
    } else {
      // 对话结束，显示选择
      setShowChoices(true);
    }
  }, [currentScene, currentDialogIndex]);

  // 点击屏幕推进对话
  const handleScreenClick = useCallback(() => {
    if (isPlayingVoice) {
      // 跳过配音
      audioManager.stopVoice();
      setIsPlayingVoice(false);
    }

    if (!currentScene) return;

    if (currentDialogIndex < currentScene.dialog.length - 1) {
      // 播放点击音效
      if (settings.sfxEnabled) {
        audioManager.playSFX('/assets/audio/sfx/ui/button_click.mp3');
      }
      
      // 推进到下一句对话
      setCurrentDialogIndex(prev => prev + 1);
      setShowChoices(false);
    } else if (!showChoices) {
      // 显示选择按钮
      setShowChoices(true);
    }
  }, [currentScene, currentDialogIndex, showChoices, isPlayingVoice, settings]);

  // 处理选择
  const handleChoiceClick = useCallback((choice: any) => {
    if (settings.sfxEnabled && choice.soundEffect) {
      audioManager.playSFX(`/assets/audio/sfx/${choice.soundEffect}.mp3`);
    }

    // 应用选择效果
    dispatch(applyChoice(choice));

    // 场景转场
    if (choice.effects.nextScene) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        // 切换到新场景
        dispatch(changeScene(choice.effects.nextScene));
        
        // 重置对话索引
        setCurrentDialogIndex(0);
        setShowChoices(false);
        setIsTransitioning(false);
      }, 800); // 转场动画时长
    } else {
      // 如果没有下一个场景，继续当前场景的对话
      setCurrentDialogIndex(0);
      setShowChoices(false);
    }
  }, [dispatch, settings]);

  if (!currentScene) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">场景加载中...</h2>
          <p className="text-gray-400">当前场景ID: {gameState.currentScene}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 场景背景 */}
      <SceneBackground 
        backgroundKey={currentScene.background}
        blur={showSettings}
      />

      {/* 转场效果 */}
      <AnimatePresence>
        {isTransitioning && (
          <TransitionEffect type="fade" duration={800} />
        )}
      </AnimatePresence>

      {/* 游戏主界面 */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* 顶部状态栏 */}
        <div className="flex justify-between items-start p-4">
          {/* 章节信息 */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-white text-sm">
              第{gameState.currentChapter}章 - 场景 {gameState.currentScene}
            </p>
          </div>

          {/* 设置按钮 */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-white hover:bg-black/70 transition-colors"
          >
            ⚙️ 设置
          </button>
        </div>

        {/* 角色立绘区域 */}
        <div className="flex-1 relative flex items-end justify-center px-8 pb-32">
          <AnimatePresence>
            {currentDialog && !currentDialog.isNarrator && (
              <CharacterSprite
                character={currentDialog.character}
                expression={currentDialog.expression || 'neutral'}
                position={currentDialog.spritePosition || 'center'}
              />
            )}
          </AnimatePresence>
        </div>

        {/* 对话框区域 - 可点击推进 */}
        <div 
          className="relative px-4 pb-4"
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
                  <Narrator
                    text={currentDialog.text}
                    textSpeed={settings.textSpeed}
                    animated={settings.textAnimation}
                    onComplete={handleDialogComplete}
                  />
                ) : (
                  <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10">
                    {/* 角色名 */}
                    <div className="mb-3">
                      <span className="text-blue-400 font-semibold text-lg">
                        {currentDialog.character}
                      </span>
                      {isPlayingVoice && (
                        <span className="ml-3 text-yellow-400 text-sm animate-pulse">
                          🎵 配音播放中...
                        </span>
                      )}
                    </div>
                    
                    {/* 对话文字 */}
                    <TextAnimator
                      text={currentDialog.text}
                      speed={settings.textSpeed}
                      animated={settings.textAnimation}
                      onComplete={handleDialogComplete}
                      className="text-white text-lg leading-relaxed"
                    />

                    {/* 点击提示 */}
                    {!showChoices && currentDialogIndex < currentScene.dialog.length - 1 && (
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
                className="mt-4 grid gap-3"
              >
                {currentScene.choices.map((choice, index) => {
                  // 检查是否满足前置条件
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
          <SettingsPanel onClose={() => setShowSettings(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedGameScreen;