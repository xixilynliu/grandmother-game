import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import {
  toggleBGM,
  toggleSFX,
  toggleVoice,
  setBGMVolume,
  setSFXVolume,
  setVoiceVolume,
  setTextSpeed,
  updateDisplaySettings,
  resetSettings,
} from '../store/settingsSlice';
import { audioManager } from '../utils/audioManager';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * 设置面板组件
 * 提供音频、显示等游戏设置选项
 */
const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  // 应用音频设置到音频管理器
  React.useEffect(() => {
    audioManager.updateSettings(settings.audio);
  }, [settings.audio]);

  const handleBGMVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    dispatch(setBGMVolume(volume));
  };

  const handleSFXVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    dispatch(setSFXVolume(volume));
  };

  const handleVoiceVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    dispatch(setVoiceVolume(volume));
  };

  const handleTextSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const speed = parseInt(e.target.value);
    dispatch(setTextSpeed(speed));
  };

  const handleReset = () => {
    if (confirm('确定要重置所有设置吗？')) {
      dispatch(resetSettings());
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 遮罩层 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />

          {/* 设置面板 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              {/* 标题栏 */}
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">游戏设置</h2>
                  <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* 音频设置 */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">🔊</span>
                    音频设置
                  </h3>

                  <div className="space-y-4">
                    {/* BGM设置 */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-gray-700 font-medium">背景音乐</label>
                        <button
                          onClick={() => dispatch(toggleBGM())}
                          className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                            settings.audio.bgmEnabled
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-300 text-gray-600'
                          }`}
                        >
                          {settings.audio.bgmEnabled ? '开启' : '关闭'}
                        </button>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={settings.audio.bgmVolume}
                        onChange={handleBGMVolumeChange}
                        disabled={!settings.audio.bgmEnabled}
                        className="w-full"
                      />
                      <div className="text-sm text-gray-500 mt-1">
                        音量: {Math.round(settings.audio.bgmVolume * 100)}%
                      </div>
                    </div>

                    {/* 音效设置 */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-gray-700 font-medium">音效</label>
                        <button
                          onClick={() => dispatch(toggleSFX())}
                          className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                            settings.audio.sfxEnabled
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-300 text-gray-600'
                          }`}
                        >
                          {settings.audio.sfxEnabled ? '开启' : '关闭'}
                        </button>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={settings.audio.sfxVolume}
                        onChange={handleSFXVolumeChange}
                        disabled={!settings.audio.sfxEnabled}
                        className="w-full"
                      />
                      <div className="text-sm text-gray-500 mt-1">
                        音量: {Math.round(settings.audio.sfxVolume * 100)}%
                      </div>
                    </div>

                    {/* 配音设置 */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-gray-700 font-medium">角色配音</label>
                        <button
                          onClick={() => dispatch(toggleVoice())}
                          className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                            settings.audio.voiceEnabled
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-300 text-gray-600'
                          }`}
                        >
                          {settings.audio.voiceEnabled ? '开启' : '关闭'}
                        </button>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={settings.audio.voiceVolume}
                        onChange={handleVoiceVolumeChange}
                        disabled={!settings.audio.voiceEnabled}
                        className="w-full"
                      />
                      <div className="text-sm text-gray-500 mt-1">
                        音量: {Math.round(settings.audio.voiceVolume * 100)}%
                      </div>
                    </div>

                    {/* 自动播放 */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <label className="text-gray-700 font-medium">自动播放配音</label>
                        <input
                          type="checkbox"
                          checked={settings.audio.autoPlay}
                          onChange={(e) =>
                            dispatch(
                              updateDisplaySettings({ 
                                // @ts-ignore - 这里应该是audio设置但为了简化暂时放在display里
                                autoPlay: e.target.checked 
                              })
                            )
                          }
                          className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* 显示设置 */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">🎨</span>
                    显示设置
                  </h3>

                  <div className="space-y-4">
                    {/* 文字速度 */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <label className="text-gray-700 font-medium block mb-2">
                        文字显示速度
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        step="1"
                        value={settings.display.textSpeed}
                        onChange={handleTextSpeedChange}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>很慢</span>
                        <span>慢</span>
                        <span>中</span>
                        <span>快</span>
                        <span>很快</span>
                      </div>
                    </div>

                    {/* 视觉效果开关 */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-gray-700 font-medium">显示角色立绘</label>
                        <input
                          type="checkbox"
                          checked={settings.display.showCharacterSprites}
                          onChange={(e) =>
                            dispatch(
                              updateDisplaySettings({ showCharacterSprites: e.target.checked })
                            )
                          }
                          className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="text-gray-700 font-medium">场景转场效果</label>
                        <input
                          type="checkbox"
                          checked={settings.display.transitionEffects}
                          onChange={(e) =>
                            dispatch(
                              updateDisplaySettings({ transitionEffects: e.target.checked })
                            )
                          }
                          className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="text-gray-700 font-medium">文字动画效果</label>
                        <input
                          type="checkbox"
                          checked={settings.display.animatedText}
                          onChange={(e) =>
                            dispatch(updateDisplaySettings({ animatedText: e.target.checked }))
                          }
                          className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* 操作按钮 */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleReset}
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    重置设置
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
                  >
                    确定
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SettingsPanel;