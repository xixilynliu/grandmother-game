# 《十八岁太奶奶》互动游戏 ??

> 重生数学女院士的现代家族冒险 - 完整16章节互动叙事游戏

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 项目简介

基于90集短剧《十八岁太奶奶》改编的多分支互动游戏。玩家扮演重生为18岁少女的数学女院士容遇，在现代家族纷争中运用前世智慧，做出影响剧情走向的关键选择，最终解锁16种不同结局。

### 🌟 核心特色

- **16个完整章节** - 覆盖原剧90集精华内容
- **67个核心场景** - 丰富的互动体验
- **256+个选择分支** - 每个选择都影响未来
- **16种独特结局** - 权力、情感、学术多条路线
- **5维属性系统** - 智慧、气场、现代化、教导、医疗
- **复杂关系网络** - 纪止渊、纪舟野、纪舜英、容若瑶等多角色互动

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0
- npm >= 8.0

### 安装与运行

```bash
# 1. 进入项目目录
cd interactive-grandmother-game

# 2. 安装依赖（如已安装可跳过）
npm install

# 3. 启动开发服务器
npm run dev

# 4. 浏览器访问
# 打开 http://localhost:3000
```

### 构建生产版本

```bash
# 构建
npm run build

# 预览构建结果
npm run preview
```

## 🎮 游戏玩法

### 属性系统

| 属性 | 说明 | 影响 |
|------|------|------|
| 智慧值 | 数学天才能力、分析判断 | 学术线、解谜选项 |
| 气场值 | 威严、领导力、震慑力 | 权力线、对抗选项 |
| 现代化 | 对现代社会的适应程度 | 科技线、创新选项 |
| 教导值 | 教育他人、传播知识 | 教育线、纪舟野关系 |
| 医疗知识 | 前世医术、治疗能力 | 医疗线、纪舜英救治 |

### 关系网络

| 角色 | 初始值 | 影响路线 |
|------|--------|----------|
| 纪止渊 | 0/100 | 权力线、浪漫结局 |
| 纪舟野 | 0/100 | 教育线、祖孙情 |
| 纪舜英 | 0/100 | 核心亲情、母子团圆 |
| 容若瑶 | 20/100 | 复仇线、家族冲突 |

### 结局一览

#### 权力线结局（4个）
1. 👑 **女帝归来** - 重掌纪氏集团
2. 🤝 **双王共治** - 与纪止渊共同执掌
3. 📚 **学术女王** - 创立智库影响学界
4. 💼 **幕后操盘** - 隐形掌权者

#### 情感线结局（5个）
5. 💕 **忘年之恋** - 突破辈分障碍
6. 👵👦 **祖孙情深** - 培养纪舟野成才
7. 👩👦 **母子团圆** - 与纪舜英温馨相认
8. 🌿 **归隐田园** - 远离纷争过平静生活
9. 🎭 **身份迷局** - 维持神秘双重生活

#### 学术线结局（3个）
10. 🔢 **数学之神** - 解决世界级难题
11. 📖 **教育宗师** - 创办特色教育机构
12. 💻 **科技先驱** - 理论转化科技产品

#### 特殊结局（4个）
13. 😔 **身份暴露** - BE：被迫离开
14. ⚔️ **家族决裂** - BE：与家族对立
15. 🌟 **传奇隐退** - 完成使命后消失
16. 🎯 **平凡圆满** - 普通幸福生活

## 📂 项目结构

```
interactive-grandmother-game/
├── src/
│   ├── components/          # React组件
│   │   ├── GameScreen.tsx   # 主游戏界面
│   │   ├── ChoiceButton.tsx # 选择按钮
│   │   └── StatsDisplay.tsx # 属性显示
│   ├── data/
│   │   └── chapters/        # 章节数据
│   │       ├── chapter1.ts  # 重生宴会
│   │       ├── chapter2.ts  # 校园生活
│   │       ├── ...
│   │       └── chapter16.ts # 圆满结局
│   ├── store/               # Redux状态管理
│   │   ├── gameSlice.ts     # 游戏状态
│   │   └── index.ts
│   ├── types/
│   │   └── game.ts          # TypeScript类型定义
│   ├── utils/
│   │   ├── gameLogic.ts     # 游戏逻辑引擎
│   │   └── endingChecker.ts # 结局判定系统
│   ├── hooks/
│   │   └── useGameState.ts  # 自定义Hook
│   └── styles/              # 样式文件
├── public/                  # 静态资源
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ 技术栈

- **框架**: React 18.2
- **语言**: TypeScript 5.0
- **状态管理**: Redux Toolkit
- **构建工具**: Vite 4.4
- **样式**: Tailwind CSS 3.3
- **动画**: Framer Motion 10.13

## 📊 项目统计

- **总代码行数**: 6,381行
- **章节数据**: 200KB
- **编译状态**: ✅ 0错误
- **开发时间**: 2026年2月

## 🎯 开发路线图

### 已完成 ✅
- [x] 16个完整章节内容
- [x] 完整的选择引擎系统
- [x] 5维属性跟踪系统
- [x] 16种结局判定逻辑
- [x] 基础UI组件
- [x] Redux状态管理

### 待优化 🚧
- [ ] 场景背景图片素材
- [ ] 角色立绘动画
- [ ] 音效和背景音乐
- [ ] 存档/读档功能
- [ ] 成就系统可视化
- [ ] 结局CG展示

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

### 开发流程

```bash
# 1. Fork项目
# 2. 创建特性分支
git checkout -b feature/your-feature

# 3. 提交更改
git commit -m 'Add some feature'

# 4. 推送到分支
git push origin feature/your-feature

# 5. 提交Pull Request
```

## 📝 更新日志

### v1.0.0 (2026-02-19)
- ✨ 完整的16章节游戏内容
- ✨ 16种独特结局
- ✨ 完整的属性和关系系统
- ✨ 结局判定引擎
- 🐛 修复所有TypeScript编译错误

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- 原剧本：《十八岁太奶奶》90集短剧
- 灵感来源：《盛世天下》互动剧
- 开发工具：Comate AI开发助手

---

**游戏地址**: http://localhost:3000  
**问题反馈**: [GitHub Issues](https://github.com/yourusername/interactive-grandmother-game/issues)

享受游戏！🎮✨