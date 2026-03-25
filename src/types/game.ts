// 游戏核心类型定义

export interface PlayerStats {
  wisdom: number;        // 智慧值 (0-100)
  charisma: number;      // 气场值 (0-100)
  modernity: number;     // 现代化适应度 (0-100)
  teaching: number;      // 教导值 (0-100)
  education: number;     // 教育值 (0-100) - 别名，与teaching等价
  medical: number;       // 医疗知识 (0-100)
}

export interface Relationships {
  jiZhiyuan: number;     // 纪止渊好感度 (0-100)
  jiZhouye: number;      // 纪舟野好感度 (0-100)
  jiShunying: number;    // 纪舜英情感连接 (0-100)
  rongRuoya: number;     // 容若瑶敌意值 (0-100)
}

export interface ChoiceOption {
  id: string;
  text: string;
  requirements?: {
    stats?: Partial<PlayerStats>;
    relationships?: Partial<Relationships>;
    unlocked?: string[];
    previousChoices?: string[];
  };
  effects: {
    stats?: Partial<PlayerStats>;
    relationships?: Partial<Relationships>;
    unlock?: string[];
    nextScene?: string;
  };
}

export interface SceneData {
  id: string;
  background: string;
  backgroundMusic?: string; // 背景音乐文件
  characters: string[];
  dialog: DialogLine[];
  choices: ChoiceOption[];
  ambientSound?: string;    // 环境音效
}
export interface DialogLine {
  character: string;
  text: string;
  expression?: string;
  voiceFile?: string;
  isNarrator?: boolean;
  spritePosition?: 'left' | 'center' | 'right';
}

export interface GameState {
  currentChapter: number;
  currentScene: string;
  playerStats: PlayerStats;
  relationships: Relationships;
  choiceHistory: string[];
  unlockedAchievements: string[];
  unlockedEndings: string[];
  playTime: number;
  stats: PlayerStats; // 别名，方便访问
}

export interface ChapterData {
  id: number;
  title: string;
  scenes: SceneData[];
  thumbnail?: string;       // 章节缩略图
  themeMusic?: string;      // 章节主题音乐
}

// 音频设置接口
export interface AudioSettings {
  bgmVolume: number;        // 背景音乐音量 (0-1)
  sfxVolume: number;        // 音效音量 (0-1)
  voiceVolume: number;      // 配音音量 (0-1)
  bgmEnabled: boolean;      // 背景音乐开关
  sfxEnabled: boolean;      // 音效开关
  voiceEnabled: boolean;    // 配音开关
  autoPlay: boolean;        // 自动播放配音
}

// 显示设置接口
export interface DisplaySettings {
  textSpeed: number;        // 文字显示速度 (1-5)
  showCharacterSprites: boolean; // 显示角色立绘
  transitionEffects: boolean;    // 场景转场效果
  animatedText: boolean;    // 文字动画效果
}

// 用户设置接口
export interface UserSettings {
  audio: AudioSettings;
  display: DisplaySettings;
}

// 资源类型定义
export interface AssetManifest {
  backgrounds: Record<string, string>;  // 背景图片
  characters: Record<string, Record<string, string>>; // 角色立绘 {角色名: {表情: 路径}}
  bgm: Record<string, string>;         // 背景音乐
  sfx: Record<string, string>;         // 音效
  voices: Record<string, string>;      // 配音
}

// 默认初始状态
export const initialGameState: GameState = {
  currentChapter: 1,
  currentScene: "1-1",
  playerStats: {
    wisdom: 50,
    charisma: 30,
    modernity: 20,
    teaching: 40,
    education: 40,
    medical: 60
  },
  stats: {
    wisdom: 50,
    charisma: 30,
    modernity: 20,
    teaching: 40,
    education: 40,
    medical: 60
  },
  unlockedAchievements: [],
  relationships: {
    jiZhiyuan: 0,
    jiZhouye: 0,
    jiShunying: 0,
    rongRuoya: 20
  },
  choiceHistory: [],
  unlockedEndings: [],
  playTime: 0
};