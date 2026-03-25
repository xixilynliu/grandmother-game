import { AssetManifest } from '../types/game';

/**
 * 游戏资源配置清单
 * 
 * 资源路径规范：
 * - 背景图：/assets/images/backgrounds/{chapter}-{scene}.jpg
 * - 角色立绘：/assets/images/characters/{character}/{expression}.png
 * - BGM：/assets/audio/bgm/{name}.mp3
 * - 音效：/assets/audio/sfx/{name}.mp3
 * - 配音：/assets/audio/voices/{chapter}-{scene}-{line}.mp3
 */

export const assetManifest: AssetManifest = {
  // 背景图片配置
  backgrounds: {
    // 第1章：重生宴会
    'chapter1-banquet': '/assets/images/backgrounds/chapter1-banquet.jpg',
    'chapter1-hallway': '/assets/images/backgrounds/chapter1-hallway.jpg',
    
    // 第2章：初入校园
    'chapter2-classroom': '/assets/images/backgrounds/chapter2-classroom.jpg',
    'chapter2-corridor': '/assets/images/backgrounds/chapter2-corridor.jpg',
    'chapter2-playground': '/assets/images/backgrounds/chapter2-playground.jpg',
    
    // 第3章：医术显露
    'chapter3-estate': '/assets/images/backgrounds/chapter3-estate.jpg',
    'chapter3-hospital': '/assets/images/backgrounds/chapter3-hospital.jpg',
    'chapter3-ward': '/assets/images/backgrounds/chapter3-ward.jpg',
    
    // 第4章：中医智慧
    'chapter4-pharmacy': '/assets/images/backgrounds/chapter4-pharmacy.jpg',
    'chapter4-night': '/assets/images/backgrounds/chapter4-night.jpg',
    
    // 第5章：数学竞赛
    'chapter5-competition': '/assets/images/backgrounds/chapter5-competition.jpg',
    'chapter5-podium': '/assets/images/backgrounds/chapter5-podium.jpg',
    
    // 第6-16章背景（占位符）
    'chapter6-scene': '/assets/images/backgrounds/chapter6-scene.jpg',
    'chapter7-scene': '/assets/images/backgrounds/chapter7-scene.jpg',
    'chapter8-scene': '/assets/images/backgrounds/chapter8-scene.jpg',
    'chapter9-scene': '/assets/images/backgrounds/chapter9-scene.jpg',
    'chapter10-scene': '/assets/images/backgrounds/chapter10-scene.jpg',
    'chapter11-scene': '/assets/images/backgrounds/chapter11-scene.jpg',
    'chapter12-scene': '/assets/images/backgrounds/chapter12-scene.jpg',
    'chapter13-scene': '/assets/images/backgrounds/chapter13-scene.jpg',
    'chapter14-scene': '/assets/images/backgrounds/chapter14-scene.jpg',
    'chapter15-scene': '/assets/images/backgrounds/chapter15-scene.jpg',
    'chapter16-ending': '/assets/images/backgrounds/chapter16-ending.jpg',
    
    // 通用场景
    'default': '/assets/images/backgrounds/default.jpg',
  },

  // 角色立绘配置
  characters: {
    '苏念卿': {
      'neutral': '/assets/images/characters/su-nianqing/neutral.png',
      'happy': '/assets/images/characters/su-nianqing/happy.png',
      'sad': '/assets/images/characters/su-nianqing/sad.png',
      'angry': '/assets/images/characters/su-nianqing/angry.png',
      'surprised': '/assets/images/characters/su-nianqing/surprised.png',
      'thinking': '/assets/images/characters/su-nianqing/thinking.png',
      'confident': '/assets/images/characters/su-nianqing/confident.png',
    },
    '纪止渊': {
      'neutral': '/assets/images/characters/ji-zhiyuan/neutral.png',
      'happy': '/assets/images/characters/ji-zhiyuan/happy.png',
      'sad': '/assets/images/characters/ji-zhiyuan/sad.png',
      'angry': '/assets/images/characters/ji-zhiyuan/angry.png',
      'surprised': '/assets/images/characters/ji-zhiyuan/surprised.png',
      'cold': '/assets/images/characters/ji-zhiyuan/cold.png',
      'gentle': '/assets/images/characters/ji-zhiyuan/gentle.png',
    },
    '纪舟野': {
      'neutral': '/assets/images/characters/ji-zhouye/neutral.png',
      'happy': '/assets/images/characters/ji-zhouye/happy.png',
      'playful': '/assets/images/characters/ji-zhouye/playful.png',
      'mischievous': '/assets/images/characters/ji-zhouye/mischievous.png',
    },
    '容若瑶': {
      'neutral': '/assets/images/characters/rong-ruoyao/neutral.png',
      'angry': '/assets/images/characters/rong-ruoyao/angry.png',
      'jealous': '/assets/images/characters/rong-ruoyao/jealous.png',
      'scheming': '/assets/images/characters/rong-ruoyao/scheming.png',
    },
    '纪舜英': {
      'neutral': '/assets/images/characters/ji-shunying/neutral.png',
      'happy': '/assets/images/characters/ji-shunying/happy.png',
      'sad': '/assets/images/characters/ji-shunying/sad.png',
      'weak': '/assets/images/characters/ji-shunying/weak.png',
    },
  },

  // 背景音乐配置
  bgm: {
    // 主题音乐
    'main-theme': '/assets/audio/bgm/main-theme.mp3',
    
    // 章节音乐
    'chapter1-banquet': '/assets/audio/bgm/chapter1-banquet.mp3',
    'chapter2-school': '/assets/audio/bgm/chapter2-school.mp3',
    'chapter3-medical': '/assets/audio/bgm/chapter3-medical.mp3',
    'chapter4-traditional': '/assets/audio/bgm/chapter4-traditional.mp3',
    'chapter5-competition': '/assets/audio/bgm/chapter5-competition.mp3',
    
    // 情绪音乐
    'romantic': '/assets/audio/bgm/romantic.mp3',
    'tense': '/assets/audio/bgm/tense.mp3',
    'sad': '/assets/audio/bgm/sad.mp3',
    'triumphant': '/assets/audio/bgm/triumphant.mp3',
    'mysterious': '/assets/audio/bgm/mysterious.mp3',
    
    // 结局音乐
    'ending-perfect': '/assets/audio/bgm/ending-perfect.mp3',
    'ending-good': '/assets/audio/bgm/ending-good.mp3',
    'ending-normal': '/assets/audio/bgm/ending-normal.mp3',
    'ending-bad': '/assets/audio/bgm/ending-bad.mp3',
  },

  // 音效配置
  sfx: {
    // UI音效
    'click': '/assets/audio/sfx/click.mp3',
    'hover': '/assets/audio/sfx/hover.mp3',
    'select': '/assets/audio/sfx/select.mp3',
    'unlock': '/assets/audio/sfx/unlock.mp3',
    'locked': '/assets/audio/sfx/locked.mp3',
    
    // 场景音效
    'page-turn': '/assets/audio/sfx/page-turn.mp3',
    'notification': '/assets/audio/sfx/notification.mp3',
    'achievement': '/assets/audio/sfx/achievement.mp3',
    'stat-increase': '/assets/audio/sfx/stat-increase.mp3',
    'stat-decrease': '/assets/audio/sfx/stat-decrease.mp3',
    
    // 环境音效
    'crowd-murmur': '/assets/audio/sfx/crowd-murmur.mp3',
    'school-bell': '/assets/audio/sfx/school-bell.mp3',
    'hospital-ambience': '/assets/audio/sfx/hospital-ambience.mp3',
    'night-crickets': '/assets/audio/sfx/night-crickets.mp3',
  },

  // 配音配置（示例结构）
  voices: {
    // 配音文件命名规则: {chapter}-{scene}-{line-number}
    '1-1-1': '/assets/audio/voices/chapter1/scene1/line1.mp3',
    '1-1-2': '/assets/audio/voices/chapter1/scene1/line2.mp3',
    // 更多配音文件...
  },
};

/**
 * 资源预加载优先级配置
 */
export const preloadPriority = {
  // 关键资源（启动时立即加载）
  critical: [
    assetManifest.backgrounds.default,
    assetManifest.bgm['main-theme'],
    assetManifest.sfx.click,
    assetManifest.sfx.hover,
  ],
  
  // 高优先级（第一章资源）
  high: [
    assetManifest.backgrounds['chapter1-banquet'],
    assetManifest.bgm['chapter1-banquet'],
    assetManifest.characters['苏念卿'].neutral,
    assetManifest.characters['容若瑶'].neutral,
  ],
  
  // 按需加载（其他章节资源）
  onDemand: [],
};

/**
 * 获取章节背景图
 */
export function getChapterBackground(chapter: number, scene?: string): string {
  const key = scene || `chapter${chapter}-scene`;
  return assetManifest.backgrounds[key] || assetManifest.backgrounds.default;
}

/**
 * 获取角色立绘
 */
export function getCharacterSprite(character: string, expression: string = 'neutral'): string {
  return assetManifest.characters[character]?.[expression] || '';
}

/**
 * 获取背景音乐
 */
export function getBGM(key: string): string {
  return assetManifest.bgm[key] || '';
}

/**
 * 获取音效
 */
export function getSFX(key: string): string {
  return assetManifest.sfx[key] || '';
}