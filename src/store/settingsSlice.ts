import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSettings, AudioSettings, DisplaySettings } from '../types/game';

// 默认设置
const defaultSettings: UserSettings = {
  audio: {
    bgmVolume: 0.5,
    sfxVolume: 0.7,
    voiceVolume: 0.8,
    bgmEnabled: true,
    sfxEnabled: true,
    voiceEnabled: true,
    autoPlay: true,
  },
  display: {
    textSpeed: 3,
    showCharacterSprites: true,
    transitionEffects: true,
    animatedText: true,
  },
};

// 从localStorage加载设置
const loadSettings = (): UserSettings => {
  try {
    const saved = localStorage.getItem('game-settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultSettings, ...parsed };
    }
  } catch (error) {
    console.warn('加载设置失败，使用默认设置', error);
  }
  return defaultSettings;
};

const initialState: UserSettings = loadSettings();

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    // 更新音频设置
    updateAudioSettings: (state, action: PayloadAction<Partial<AudioSettings>>) => {
      state.audio = { ...state.audio, ...action.payload };
      saveSettings(state);
    },

    // 更新显示设置
    updateDisplaySettings: (state, action: PayloadAction<Partial<DisplaySettings>>) => {
      state.display = { ...state.display, ...action.payload };
      saveSettings(state);
    },

    // 切换BGM开关
    toggleBGM: (state) => {
      state.audio.bgmEnabled = !state.audio.bgmEnabled;
      saveSettings(state);
    },

    // 切换音效开关
    toggleSFX: (state) => {
      state.audio.sfxEnabled = !state.audio.sfxEnabled;
      saveSettings(state);
    },

    // 切换配音开关
    toggleVoice: (state) => {
      state.audio.voiceEnabled = !state.audio.voiceEnabled;
      saveSettings(state);
    },

    // 设置BGM音量
    setBGMVolume: (state, action: PayloadAction<number>) => {
      state.audio.bgmVolume = Math.max(0, Math.min(1, action.payload));
      saveSettings(state);
    },

    // 设置音效音量
    setSFXVolume: (state, action: PayloadAction<number>) => {
      state.audio.sfxVolume = Math.max(0, Math.min(1, action.payload));
      saveSettings(state);
    },

    // 设置配音音量
    setVoiceVolume: (state, action: PayloadAction<number>) => {
      state.audio.voiceVolume = Math.max(0, Math.min(1, action.payload));
      saveSettings(state);
    },

    // 设置文字速度
    setTextSpeed: (state, action: PayloadAction<number>) => {
      state.display.textSpeed = Math.max(1, Math.min(5, action.payload));
      saveSettings(state);
    },

    // 重置所有设置
    resetSettings: (state) => {
      Object.assign(state, defaultSettings);
      saveSettings(state);
    },
  },
});

// 保存设置到localStorage
function saveSettings(settings: UserSettings) {
  try {
    localStorage.setItem('game-settings', JSON.stringify(settings));
  } catch (error) {
    console.warn('保存设置失败', error);
  }
}

export const {
  updateAudioSettings,
  updateDisplaySettings,
  toggleBGM,
  toggleSFX,
  toggleVoice,
  setBGMVolume,
  setSFXVolume,
  setVoiceVolume,
  setTextSpeed,
  resetSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;