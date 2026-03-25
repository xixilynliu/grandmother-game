# 多媒体系统集成示例 🎬

本文档展示如何将新的多媒体系统集成到现有的16章游戏内容中。

---

## 📋 快速开始

### 1. 更新 App.tsx 使用增强版组件

```typescript
// src/App.tsx
import { Provider } from 'react-redux';
import { store } from './store';
import EnhancedGameScreen from './components/EnhancedGameScreen'; // 使用新的增强版
import './styles/globals.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EnhancedGameScreen />
      </div>
    </Provider>
  );
}

export default App;
```

### 2. 为章节数据添加多媒体配置

更新现有的章节数据，添加音视频配置：

```typescript
// src/data/chapters/chapter1.ts (示例)
import { ChapterData } from '../../types/game';

export const chapter1: ChapterData = {
  id: 1,
  title: "重生宴会",
  // 新增：章节背景音乐
  bgm: "banquet_hall",
  
  scenes: [
    {
      id: "1-1",
      background: "banquet_hall",  // 背景图key
      backgroundMusic: "banquet_hall_bgm", // 场景音乐（可选）
      characters: ["rongyu", "rongruoya"],
      
      dialog: [
        {
          character: "narrator",
          text: "容若瑶带着挑衅的笑容走向容遇...",
          expression: "neutral",
          isNarrator: true,  // 新增：标记为旁白
          voiceFile: "narrator_001" // 新增：配音文件
        },
        {
          character: "rongruoya",
          text: "姐姐，原来你在这啊，姐姐你快尝尝啊。",
          expression: "smile",
          voiceFile: "rongruoya_ch1_s1_001", // 新增：配音
          spritePosition: "left" // 新增：立绘位置
        },
        {
          character: "rongruoya", 
          text: "诶，手滑了，不过这么好的红酒，姐姐你在乡下长大反正也喝不惯吧。",
          expression: "mock",
          voiceFile: "rongruoya_ch1_s1_002",
          spritePosition: "left"
        }
      ],
      
      choices: [
        {
          id: "c1-1a",
          text: "[忍耐] '没关系，我确实不太懂红酒'",
          soundEffect: "choice_soft", // 新增：选择音效
          effects: {
            stats: { charisma: -3 },
            relationships: { rongRuoya: -5, jiZhiyuan: -3 },
            nextScene: "1-2"
          }
        },
        {
          id: "c1-1b",
          text: "[反击] 反泼回去：'我也手滑'",
          requirements: { stats: { charisma: 20 } },
          soundEffect: "choice_strong", // 新增：选择音效
          effects: {
            stats: { charisma: 5 },
            relationships: { jiZhiyuan: 5, rongRuoya: 10 },
            nextScene: "1-2"
          }
        },
        {
          id: "c1-1c",
          text: "[智慧] 学术点评：'这酒产自法国波尔多...'",
          requirements: { stats: { wisdom: 40 } },
          soundEffect: "choice_wisdom", // 新增：选择音效
          effects: {
            stats: { wisdom: 3, modernity: 2 },
            relationships: { jiZhiyuan: 8 },
            nextScene: "1-2"
          }
        }
      ]
    },
    // ... 其他场景
  ]
};
```

---

## 🎨 资源文件组织

### 推荐的目录结构

```
public/
├── assets/
│   ├── images/
│   │   ├── backgrounds/         # 场景背景图
│   │   │   ├── banquet_hall.jpg
│   │   │   ├── school_classroom.jpg
│   │   │   ├── hospital_room.jpg
│   │   │   └── ...
│   │   └── characters/          # 角色立绘
│   │       ├── rongyu/
│   │       │   ├── neutral.png
│   │       │   ├── smile.png
│   │       │   ├── angry.png
│   │       │   └── ...
│   │       ├── rongruoya/
│   │       │   ├── smile.png
│   │       │   ├── mock.png
│   │       │   └── ...
│   │       └── jizhiyuan/
│   │           ├── serious.png
│   │           ├── smile.png
│   │           └── ...
│   │
│   ├── audio/
│   │   ├── bgm/                 # 背景音乐
│   │   │   ├── chapter1/
│   │   │   │   ├── banquet_hall.mp3
│   │   │   │   └── tension.mp3
│   │   │   ├── chapter2/
│   │   │   └── ...
│   │   │
│   │   ├── sfx/                 # 音效
│   │   │   ├── ui/
│   │   │   │   ├── button_click.mp3
│   │   │   │   ├── button_hover.mp3
│   │   │   │   └── ...
│   │   │   └── choice/
│   │   │       ├── choice_soft.mp3
│   │   │       ├── choice_strong.mp3
│   │   │       └── choice_wisdom.mp3
│   │   │
│   │   └── voice/               # 配音
│   │       ├── narrator/
│   │       │   ├── narrator_001.mp3
│   │       │   └── ...
│   │       ├── rongyu/
│   │       │   ├── ch1_s1_001.mp3
│   │       │   └── ...
│   │       └── rongruoya/
│   │           ├── ch1_s1_001.mp3
│   │           └── ...
│   │
│   └── fonts/                   # 字体文件（可选）
│       ├── NotoSansSC-Regular.otf
│       └── ...
```

---

## 🔧 类型定义更新

完整的类型定义（已在 `src/types/game.ts` 中实现）：

```typescript
// 对话行类型
export interface DialogLine {
  character: string;
  text: string;
  expression?: string;
  voiceFile?: string;        // 配音文件key
  isNarrator?: boolean;      // 是否为旁白
  spritePosition?: 'left' | 'center' | 'right'; // 立绘位置
}

// 场景数据类型
export interface SceneData {
  id: string;
  background: string;        // 背景图key
  backgroundMusic?: string;  // 场景音乐key（可选）
  characters: string[];
  dialog: DialogLine[];
  choices: ChoiceOption[];
}

// 选择选项类型
export interface ChoiceOption {
  id: string;
  text: string;
  soundEffect?: string;      // 选择音效key
  requirements?: {
    stats?: Partial<PlayerStats>;
    relationships?: Partial<Relationships>;
    previousChoices?: string[];
  };
  effects: {
    stats?: Partial<PlayerStats>;
    relationships?: Partial<Relationships>;
    unlock?: string[];
    nextScene?: string;
  };
}

// 章节数据类型
export interface ChapterData {
  id: number;
  title: string;
  bgm?: string;              // 章节背景音乐key
  scenes: SceneData[];
}
```

---

## 🎮 使用示例

### 示例1：带配音和立绘的对话场景

```typescript
{
  id: "2-3",
  background: "school_corridor",
  backgroundMusic: "school_daily",
  characters: ["rongyu", "jizhouye"],
  
  dialog: [
    {
      character: "narrator",
      text: "纪舟野带着几个跟班堵住了容遇的去路。",
      isNarrator: true,
      voiceFile: "narrator_ch2_s3_001"
    },
    {
      character: "jizhouye",
      text: "乡下来的小丫头，敢不敢和我比比？",
      expression: "arrogant",
      voiceFile: "jizhouye_ch2_s3_001",
      spritePosition: "right"
    },
    {
      character: "rongyu",
      text: "比什么？",
      expression: "calm",
      voiceFile: "rongyu_ch2_s3_001",
      spritePosition: "left"
    }
  ],
  
  choices: [
    {
      id: "c2-3a",
      text: "[回避] 默默捡起书本离开",
      soundEffect: "choice_soft",
      effects: { /* ... */ }
    },
    {
      id: "c2-3b",
      text: "[智慧] 用数学题震慑",
      soundEffect: "choice_wisdom",
      requirements: { stats: { wisdom: 50 } },
      effects: { /* ... */ }
    }
  ]
}
```

### 示例2：紧张气氛场景（音乐切换）

```typescript
{
  id: "15-4",
  background: "family_meeting_room",
  backgroundMusic: "tension_climax", // 紧张的背景音乐
  characters: ["rongyu", "rongruoya", "jizhiyuan", "lanrouxue"],
  
  dialog: [
    {
      character: "narrator",
      text: "会议室的气氛凝固了，所有人的目光都聚焦在容遇身上。",
      isNarrator: true,
      voiceFile: "narrator_ch15_s4_001"
    },
    {
      character: "rongruoya",
      text: "你凭什么！一个乡下来的野丫头！",
      expression: "furious",
      voiceFile: "rongruoya_ch15_s4_001",
      spritePosition: "right"
    }
  ],
  
  choices: [
    {
      id: "c15-4a",
      text: "[气场] '凭我的能力，凭我对家族的贡献'",
      soundEffect: "choice_strong",
      requirements: { stats: { charisma: 85 } },
      effects: { /* ... */ }
    }
  ]
}
```

---

## 🔄 批量更新脚本

如果需要批量为现有章节添加多媒体配置，可以使用以下脚本：

```javascript
// scripts/add-multimedia-config.js
const fs = require('fs');
const path = require('path');

// 为所有章节添加背景音乐
const chapters = [
  { id: 1, bgm: 'banquet_hall' },
  { id: 2, bgm: 'school_daily' },
  { id: 3, bgm: 'family_mansion' },
  // ... 其他章节
];

chapters.forEach(({ id, bgm }) => {
  const filePath = path.join(__dirname, `../src/data/chapters/chapter${id}.ts`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 在ChapterData定义后添加bgm
  content = content.replace(
    /title: "(.*?)"/,
    `title: "$1",\n  bgm: "${bgm}"`
  );
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated chapter${id}.ts`);
});
```

运行：
```bash
node scripts/add-multimedia-config.js
```

---

## 📝 最小化测试配置

如果暂时没有完整的资源，可以使用占位符快速测试：

### 1. 使用渐变色背景代替图片

```typescript
// src/config/assets.ts
export const backgroundImages: AssetMap = {
  banquet_hall: {
    url: '', // 留空
    type: 'image',
    priority: 'high',
    fallback: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' // 渐变色
  },
  // ...
};
```

### 2. 使用在线音频测试

```typescript
export const backgroundMusic: AssetMap = {
  banquet_hall: {
    url: 'https://cdn.example.com/music/classical.mp3', // 使用免费音乐库
    type: 'audio',
    priority: 'high'
  },
  // ...
};
```

### 3. 简化的测试数据

创建一个测试章节：

```typescript
// src/data/chapters/chapter-test.ts
export const chapterTest: ChapterData = {
  id: 0,
  title: "多媒体测试",
  bgm: "banquet_hall",
  
  scenes: [
    {
      id: "test-1",
      background: "banquet_hall",
      characters: ["rongyu", "rongruoya"],
      dialog: [
        {
          character: "narrator",
          text: "这是一段测试旁白，用于验证旁白系统。",
          isNarrator: true
        },
        {
          character: "rongyu",
          text: "测试对话文字，验证打字机效果。",
          expression: "smile"
        }
      ],
      choices: [
        {
          id: "test-a",
          text: "测试选项A（有音效）",
          soundEffect: "button_click",
          effects: { nextScene: "test-2" }
        },
        {
          id: "test-b",
          text: "测试选项B（锁定状态）",
          requirements: { stats: { wisdom: 999 } },
          effects: { nextScene: "test-2" }
        }
      ]
    }
  ]
};
```

---

## 🎯 渐进式集成策略

建议按以下顺序逐步集成：

### 阶段1：UI动效（0资源需求）✅
- ✅ 按钮悬停/点击动效
- ✅ 属性变化动画
- ✅ 场景转场效果
- ✅ 文字打字机效果

### 阶段2：基础音效（小资源需求）
- 🔨 准备3-5个UI音效文件
- 🔨 添加按钮点击音效
- 🔨 添加场景切换音效
- 🔨 测试音量控制

### 阶段3：背景图片（中等资源需求）
- 🔨 为第1章准备2-3张背景图
- 🔨 测试背景切换和预加载
- 🔨 优化图片尺寸和格式
- 🔨 完成后续章节

### 阶段4：角色立绘（大资源需求）
- 🔨 设计主要角色立绘
- 🔨 准备3-5种表情变体
- 🔨 测试立绘显示和切换
- 🔨 完成所有角色

### 阶段5：背景音乐（中等资源需求）
- 🔨 选择/制作章节BGM
- 🔨 测试音乐循环和切换
- 🔨 优化音频压缩

### 阶段6：配音系统（大资源需求）
- 🔨 录制重要对话配音
- 🔨 测试配音同步
- 🔨 完成全部配音（可选）

---

## 📱 移动端优化建议

```typescript
// 移动端检测和优化
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  // 降低音频质量
  // 使用更小的图片
  // 减少动画效果
  // 自动静音（需用户手动开启）
}
```

---

## 🔍 调试工具

在开发工具控制台使用：

```javascript
// 测试音频管理器
window.audioManager.playBGM('banquet_hall');
window.audioManager.playSFX('button_click');
window.audioManager.playVoice('narrator_001');

// 测试资源加载
window.assetLoader.preloadAssets(['banquet_hall'], () => {
  console.log('加载完成');
});

// 查看当前设置
console.log(store.getState().settings);
```

---

## ✅ 验证清单

在集成完成后，检查以下项：

- [ ] EnhancedGameScreen 正常显示
- [ ] 设置面板可以打开和关闭
- [ ] 音量控制生效
- [ ] 场景切换有过渡动画
- [ ] 选择按钮有悬停效果
- [ ] 属性变化有动画
- [ ] 旁白和对话视觉区分明显
- [ ] 移动端显示正常
- [ ] 资源加载失败有降级处理

---

**下一步**: 准备实际资源文件，或使用占位符开始测试！🚀