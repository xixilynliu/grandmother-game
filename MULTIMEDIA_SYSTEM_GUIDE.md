# 多媒体系统使用指南

本文档介绍《十八岁太奶奶》互动游戏的完整多媒体系统实现，包括音频、视觉和动效系统。

## 📁 文件结构

```
interactive-grandmother-game/
├── src/
│   ├── components/
│   │   ├── SceneBackground.tsx          # 场景背景组件
│   │   ├── CharacterSprite.tsx          # 角色立绘组件
│   │   ├── TextAnimator.tsx             # 文字动画组件
│   │   ├── Narrator.tsx                 # 旁白组件
│   │   ├── TransitionEffect.tsx         # 转场效果组件
│   │   ├── SettingsPanel.tsx            # 设置面板组件
│   │   ├── LoadingScreen.tsx            # 加载屏幕组件
│   │   ├── ChoiceButton.tsx             # 增强版选择按钮
│   │   ├── StatsDisplay.tsx             # 增强版属性显示
│   │   └── EnhancedGameScreen.tsx       # 完整游戏主屏幕
│   ├── utils/
│   │   ├── audioManager.ts              # 音频管理器
│   │   └── assetLoader.ts               # 资源加载器
│   ├── config/
│   │   └── assets.ts                    # 资源配置清单
│   ├── store/
│   │   └── settingsSlice.ts             # 用户设置状态管理
│   └── types/
│       └── game.ts                      # 类型定义（已更新）
└── public/
    └── assets/
        ├── images/
        │   ├── backgrounds/             # 背景图片
        │   └── characters/              # 角色立绘
        └── audio/
            ├── bgm/                     # 背景音乐
            ├── sfx/                     # 音效
            └── voices/                  # 配音
```

## 🎵 音频系统

### 音频管理器 (`audioManager.ts`)

**主要功能：**
- ✅ 背景音乐播放与切换（带淡入淡出）
- ✅ 音效池管理（支持同时播放多个音效）
- ✅ 配音播放与同步
- ✅ 独立音量控制（BGM/SFX/Voice）
- ✅ 音频开关控制

**使用示例：**

```typescript
import { audioManager } from '../utils/audioManager';

// 播放背景音乐
audioManager.playBGM('/assets/audio/bgm/chapter1-banquet.mp3');

// 播放音效
audioManager.playSFX('/assets/audio/sfx/click.mp3');

// 播放配音
audioManager.playVoice('/assets/audio/voices/chapter1/line1.mp3', () => {
  console.log('配音播放完成');
});

// 更新设置
audioManager.updateSettings({
  bgmVolume: 0.7,
  sfxEnabled: true,
  voiceEnabled: true,
});
```

### 音频资源配置

在 `src/config/assets.ts` 中定义所有音频资源：

```typescript
export const assetManifest = {
  bgm: {
    'main-theme': '/assets/audio/bgm/main-theme.mp3',
    'chapter1-banquet': '/assets/audio/bgm/chapter1-banquet.mp3',
    // ...更多BGM
  },
  sfx: {
    'click': '/assets/audio/sfx/click.mp3',
    'select': '/assets/audio/sfx/select.mp3',
    // ...更多音效
  },
  voices: {
    '1-1-1': '/assets/audio/voices/chapter1/scene1/line1.mp3',
    // ...更多配音
  },
};
```

## 🎨 视觉系统

### 1. 场景背景 (`SceneBackground.tsx`)

**功能：**
- 背景图片预加载
- 场景切换过渡动画
- 加载失败降级处理
- 可调节遮罩层透明度

**使用示例：**

```tsx
<SceneBackground
  backgroundSrc="/assets/images/backgrounds/chapter1-banquet.jpg"
  transitionDuration={0.8}
  overlay={true}
  overlayOpacity={0.3}
/>
```

### 2. 角色立绘 (`CharacterSprite.tsx`)

**功能：**
- 角色立绘显示
- 表情切换动画
- 位置控制（左/中/右）
- 淡入淡出效果

**使用示例：**

```tsx
<CharacterSprite
  character="苏念卿"
  expression="happy"
  position="center"
  scale={1}
  show={true}
/>
```

### 3. 文字动画 (`TextAnimator.tsx`)

**功能：**
- 打字机效果
- 可调节显示速度
- 点击跳过动画
- 支持即时显示模式

**使用示例：**

```tsx
<TextAnimator
  text="这是一段对话文字"
  speed={3}  // 1-5，数字越大越快
  animated={true}
  onComplete={() => console.log('文字显示完成')}
/>
```

### 4. 旁白组件 (`Narrator.tsx`)

**功能：**
- 与对话有视觉区分
- 独特的样式设计
- 集成文字动画
- 装饰性效果

**使用示例：**

```tsx
<Narrator
  text="旁白内容..."
  textSpeed={3}
  animated={true}
  onComplete={() => {}}
/>
```

## 🎬 动效系统

### 1. 选择按钮动效 (`ChoiceButton.tsx`)

**新增功能：**
- ✅ 悬停放大效果
- ✅ 点击波纹动画
- ✅ 锁定状态摇晃提示
- ✅ 音效反馈

**使用示例：**

```tsx
<ChoiceButton
  choiceId="c1-1a"
  text="[智慧] 选项文字"
  onClick={handleChoice}
  locked={false}
  unlockHint="需要智慧值 ≥ 50"
/>
```

### 2. 属性变化动效 (`StatsDisplay.tsx`)

**新增功能：**
- ✅ 数值变化动画
- ✅ +/- 浮动提示
- ✅ 进度条动画
- ✅ 音效反馈

### 3. 转场效果 (`TransitionEffect.tsx`)

**支持类型：**
- `fade` - 淡入淡出
- `slide` - 滑动
- `zoom` - 缩放
- `curtain` - 帷幕

**使用示例：**

```tsx
// 普通转场
<TransitionEffect
  show={isTransitioning}
  type="fade"
  duration={0.8}
/>

// 章节转场
<ChapterTransition
  show={showChapterTransition}
  chapterNumber={2}
  chapterTitle="初入校园"
  onComplete={() => {}}
/>
```

## ⚙️ 用户设置系统

### 设置面板 (`SettingsPanel.tsx`)

**可配置项：**

**音频设置：**
- BGM 开关/音量
- 音效 开关/音量
- 配音 开关/音量
- 自动播放配音

**显示设置：**
- 文字显示速度（1-5级）
- 显示角色立绘
- 场景转场效果
- 文字动画效果

**使用示例：**

```tsx
<SettingsPanel
  isOpen={showSettings}
  onClose={() => setShowSettings(false)}
/>
```

设置会自动保存到 localStorage，下次启动时恢复。

## 📦 资源加载系统

### 资源加载器 (`assetLoader.ts`)

**功能：**
- 批量预加载资源
- 加载进度反馈
- 并发控制（默认5个）
- 失败降级处理

**使用示例：**

```typescript
import { assetLoader } from '../utils/assetLoader';

// 预加载章节资源
await assetLoader.preloadChapter(
  1, // 章节号
  ['/assets/images/backgrounds/chapter1-banquet.jpg'],
  ['/assets/images/characters/su-nianqing/neutral.png'],
  ['/assets/audio/bgm/chapter1-banquet.mp3'],
  (progress) => {
    console.log(`加载进度: ${progress.percentage}%`);
  }
);
```

### 加载屏幕 (`LoadingScreen.tsx`)

**使用示例：**

```tsx
<LoadingScreen
  progress={{ loaded: 5, total: 10, percentage: 50 }}
  message="加载章节资源..."
/>
```

## ?? 完整游戏屏幕示例

使用 `EnhancedGameScreen.tsx` 作为参考，它整合了所有多媒体系统：

```tsx
import EnhancedGameScreen from './components/EnhancedGameScreen';

function App() {
  return <EnhancedGameScreen />;
}
```

## 📋 资源规格要求

### 背景图片
- **格式**: JPG/PNG
- **分辨率**: 1920x1080 或更高
- **文件大小**: < 500KB（经过优化）
- **命名规则**: `chapter{N}-{scene-name}.jpg`

### 角色立绘
- **格式**: PNG（支持透明）
- **分辨率**: 高度 1500-2000px
- **文件大小**: < 300KB
- **命名规则**: `{character-name}/{expression}.png`

### 背景音乐
- **格式**: MP3
- **比特率**: 128kbps
- **循环**: 支持无缝循环
- **时长**: 2-5分钟

### 音效
- **格式**: MP3
- **比特率**: 96kbps
- **时长**: 0.5-3秒

### 配音
- **格式**: MP3
- **比特率**: 128kbps
- **采样率**: 44.1kHz
- **命名规则**: `chapter{N}/scene{M}/line{K}.mp3`

## 🔧 资源准备清单

### 必需资源（第1章示例）

**背景图片（2张）：**
- ✅ `chapter1-banquet.jpg` - 宴会厅场景
- ✅ `chapter1-hallway.jpg` - 走廊场景

**角色立绘（每个角色5-7个表情）：**
- ✅ 苏念卿：neutral, happy, sad, angry, surprised, thinking, confident
- ✅ 容若瑶：neutral, angry, jealous, scheming
- ✅ 纪止渊：neutral, happy, cold, gentle
- ✅ 纪舟野：neutral, happy, playful, mischievous

**背景音乐（3首）：**
- ✅ `main-theme.mp3` - 主题音乐
- ✅ `chapter1-banquet.mp3` - 第1章音乐
- ✅ `romantic.mp3` - 浪漫场景音乐

**音效（10个）：**
- ✅ click.mp3 - 点击
- ✅ hover.mp3 - 悬停
- ✅ select.mp3 - 选择
- ✅ locked.mp3 - 锁定
- ✅ unlock.mp3 - 解锁
- ✅ page-turn.mp3 - 翻页
- ✅ stat-increase.mp3 - 属性增加
- ✅ stat-decrease.mp3 - 属性减少
- ✅ achievement.mp3 - 成就解锁
- ✅ notification.mp3 - 通知

**配音（可选）：**
- 第1章各对话配音文件

## 🚀 快速开始

1. **安装依赖**（如果还没有）：
```bash
npm install
```

2. **准备资源文件夹**：
```bash
mkdir -p public/assets/images/backgrounds
mkdir -p public/assets/images/characters
mkdir -p public/assets/audio/bgm
mkdir -p public/assets/audio/sfx
mkdir -p public/assets/audio/voices
```

3. **放置资源文件**（按照上述规格）

4. **启动开发服务器**：
```bash
npm run dev
```

5. **测试多媒体功能**：
   - 打开设置面板，调整音量
   - 测试选择按钮的音效反馈
   - 观察属性变化动画
   - 体验场景切换效果

## 📝 代码集成示例

### 在章节数据中使用多媒体

```typescript
// src/data/chapters/chapter1.ts
export const chapter1: ChapterData = {
  id: 1,
  title: "重生宴会",
  themeMusic: "/assets/audio/bgm/chapter1-banquet.mp3",
  scenes: [
    {
      id: "1-1",
      background: "chapter1-banquet",
      backgroundMusic: "/assets/audio/bgm/chapter1-banquet.mp3",
      characters: ["苏念卿", "容若瑶"],
      dialog: [
        {
          character: "旁白",
          text: "2024年，芙蓉庄园的宴会厅...",
          isNarrator: true,
        },
        {
          character: "容若瑶",
          text: "苏念卿，你这手也太滑了吧！",
          expression: "scheming",
          voiceFile: "/assets/audio/voices/1-1-2.mp3",
          emotion: "angry",
        },
      ],
      choices: [
        // ... 选择定义
      ],
    },
  ],
};
```

## 🎯 性能优化建议

1. **图片优化**：
   - 使用 WebP 格式（降级到 JPG）
   - 压缩图片质量到 70-80%
   - 为不同屏幕尺寸提供多个版本

2. **音频优化**：
   - 使用适当的比特率
   - 考虑使用 OGG 格式（更小）
   - 实现音频流式加载

3. **预加载策略**：
   - 关键资源优先加载
   - 下一章节资源后台预加载
   - 使用 Service Worker 缓存

4. **内存管理**：
   - 及时清理未使用的资源
   - 限制同时加载的资源数量
   - 使用对象池复用音效实例

## 🐛 故障排查

### 音频无法播放
- 检查浏览器是否允许自动播放
- 确认音频文件路径正确
- 查看控制台错误信息

### 图片加载失败
- 检查文件路径和命名
- 确认图片格式支持
- 查看网络请求状态

### 动画卡顿
- 减少同时播放的动画数量
- 优化图片大小
- 检查浏览器性能

## 📚 扩展阅读

- [Framer Motion 文档](https://www.framer.com/motion/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)

## ✅ 功能清单

- ✅ 背景音乐系统（淡入淡出）
- ✅ 音效系统（池管理）
- ✅ 配音系统（同步播放）
- ✅ 场景背景系统（预加载+转场）
- ✅ 角色立绘系统（表情+动画）
- ✅ 文字动画（打字机效果）
- ✅ 旁白组件（独立样式）
- ✅ 选择按钮动效（悬停+波纹）
- ✅ 属性变化动效（数值动画+提示）
- ✅ 场景转场效果（多种类型）
- ✅ 用户设置系统（音频+显示）
- ✅ 资源加载系统（预加载+进度）
- ✅ 加载屏幕（进度显示）
- ✅ 完整游戏界面集成

---

**开发团队**: Comate Zulu  
**最后更新**: 2026-02-19  
**版本**: 1.0.0