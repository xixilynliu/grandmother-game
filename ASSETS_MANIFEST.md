# 游戏资源清单

本文档列出《十八岁太奶奶》互动游戏所需的全部资源文件。

## 📊 资源统计

### 按章节统计（16章完整版）
- 背景图片：约 50-80 张
- 角色立绘：约 30-40 张（每个角色 5-7 个表情）
- 背景音乐：约 20-30 首
- 音效：10-15 个
- 配音：约 500-800 段（可选）

### 预估总大小
- 图片资源：约 50-100 MB
- 音频资源：约 100-200 MB
- 配音资源：约 200-500 MB（可选）
- **总计**：约 150-400 MB（不含配音）或 350-900 MB（含配音）

## 🎨 背景图片清单

### 第1章：重生宴会
```
/assets/images/backgrounds/
  ├── chapter1-banquet.jpg        # 宴会厅（豪华氛围）
  └── chapter1-hallway.jpg        # 走廊
```

### 第2章：初入校园
```
/assets/images/backgrounds/
  ├── chapter2-classroom.jpg      # 教室
  ├── chapter2-corridor.jpg       # 走廊
  └── chapter2-playground.jpg     # 操场
```

### 第3章：医术显露
```
/assets/images/backgrounds/
  ├── chapter3-estate.jpg         # 芙蓉庄园
  ├── chapter3-hospital.jpg       # 医院外景
  └── chapter3-ward.jpg           # 病房
```

### 第4章：中医智慧
```
/assets/images/backgrounds/
  ├── chapter4-pharmacy.jpg       # 中医药房
  └── chapter4-night.jpg          # 夜景（庄园）
```

### 第5章：数学竞赛
```
/assets/images/backgrounds/
  ├── chapter5-competition.jpg    # 竞赛现场
  └── chapter5-podium.jpg         # 颁奖台
```

### 第6-16章（占位符，需根据实际剧情补充）
```
/assets/images/backgrounds/
  ├── chapter6-scene.jpg
  ├── chapter7-scene.jpg
  ├── chapter8-scene.jpg
  ├── chapter9-scene.jpg
  ├── chapter10-scene.jpg
  ├── chapter11-scene.jpg
  ├── chapter12-scene.jpg
  ├── chapter13-scene.jpg
  ├── chapter14-scene.jpg
  ├── chapter15-scene.jpg
  ├── chapter16-ending-perfect.jpg    # 完美结局
  ├── chapter16-ending-good.jpg       # 良好结局
  ├── chapter16-ending-normal.jpg     # 普通结局
  └── chapter16-ending-bad.jpg        # 悲剧结局
```

### 通用背景
```
/assets/images/backgrounds/
  └── default.jpg                 # 降级背景（纯色或通用场景）
```

## 👤 角色立绘清单

### 苏念卿（女主角）
```
/assets/images/characters/su-nianqing/
  ├── neutral.png        # 中性表情
  ├── happy.png          # 开心
  ├── sad.png            # 悲伤
  ├── angry.png          # 生气
  ├── surprised.png      # 惊讶
  ├── thinking.png       # 思考
  └── confident.png      # 自信
```

### 纪止渊（男主角）
```
/assets/images/characters/ji-zhiyuan/
  ├── neutral.png        # 中性表情
  ├── happy.png          # 开心
  ├── sad.png            # 悲伤
  ├── angry.png          # 生气
  ├── surprised.png      # 惊讶
  ├── cold.png           # 冷漠
  └── gentle.png         # 温柔
```

### 纪舟野（少年）
```
/assets/images/characters/ji-zhouye/
  ├── neutral.png        # 中性表情
  ├── happy.png          # 开心
  ├── playful.png        # 顽皮
  └── mischievous.png    # 调皮
```

### 容若瑶（反派）
```
/assets/images/characters/rong-ruoyao/
  ├── neutral.png        # 中性表情
  ├── angry.png          # 生气
  ├── jealous.png        # 嫉妒
  └── scheming.png       # 阴谋
```

### 纪舜英（病弱长辈）
```
/assets/images/characters/ji-shunying/
  ├── neutral.png        # 中性表情
  ├── happy.png          # 开心
  ├── sad.png            # 悲伤
  └── weak.png           # 虚弱
```

## 🎵 背景音乐清单

### 主题音乐
```
/assets/audio/bgm/
  └── main-theme.mp3              # 主菜单音乐
```

### 章节音乐
```
/assets/audio/bgm/
  ├── chapter1-banquet.mp3        # 第1章 宴会氛围
  ├── chapter2-school.mp3         # 第2章 校园青春
  ├── chapter3-medical.mp3        # 第3章 医疗氛围
  ├── chapter4-traditional.mp3    # 第4章 传统中医
  └── chapter5-competition.mp3    # 第5章 紧张竞赛
```

### 情绪音乐
```
/assets/audio/bgm/
  ├── romantic.mp3                # 浪漫场景
  ├── tense.mp3                   # 紧张场景
  ├── sad.mp3                     # 悲伤场景
  ├── triumphant.mp3              # 胜利场景
  └── mysterious.mp3              # 神秘场景
```

### 结局音乐
```
/assets/audio/bgm/
  ├── ending-perfect.mp3          # 完美结局
  ├── ending-good.mp3             # 良好结局
  ├── ending-normal.mp3           # 普通结局
  └── ending-bad.mp3              # 悲剧结局
```

## 🔊 音效清单

### UI音效
```
/assets/audio/sfx/
  ├── click.mp3                   # 普通点击
  ├── hover.mp3                   # 鼠标悬停
  ├── select.mp3                  # 选择确认
  ├── unlock.mp3                  # 解锁提示
  └── locked.mp3                  # 锁定提示
```

### 场景音效
```
/assets/audio/sfx/
  ├── page-turn.mp3               # 翻页
  ├── notification.mp3            # 通知
  ├── achievement.mp3             # 成就解锁
  ├── stat-increase.mp3           # 属性增加
  └── stat-decrease.mp3           # 属性减少
```

### 环境音效
```
/assets/audio/sfx/
  ├── crowd-murmur.mp3            # 人群嘈杂
  ├── school-bell.mp3             # 上课铃
  ├── hospital-ambience.mp3       # 医院环境音
  └── night-crickets.mp3          # 夜晚虫鸣
```

## 🎤 配音清单（可选）

### 命名规则
```
/assets/audio/voices/
  chapter{N}/
    scene{M}/
      line{K}.mp3

示例：
  /assets/audio/voices/chapter1/scene1/line1.mp3
  /assets/audio/voices/chapter1/scene1/line2.mp3
```

### 预估数量（16章）
- 每章约 30-50 段对话
- 总计约 500-800 段配音
- 每段平均 5-10 秒
- 总时长约 40-130 分钟

## 📋 资源制作规范

### 背景图片规范
```yaml
格式: JPG/WebP
分辨率: 1920x1080 (16:9)
色彩模式: RGB
质量: 70-85%
文件大小: < 500KB
特殊要求:
  - 保持统一的艺术风格
  - 预留UI空间（下方1/3）
  - 避免过于明亮的色彩（影响文字可读性）
```

### 角色立绘规范
```yaml
格式: PNG (透明背景)
分辨率: 宽度800-1200px, 高度1500-2000px
色彩模式: RGBA
文件大小: < 300KB
特殊要求:
  - 角色占画面约60-80%
  - 保持角色风格一致
  - 表情变化明显可识别
  - 身体姿态保持一致（方便表情切换）
```

### 背景音乐规范
```yaml
格式: MP3
比特率: 128kbps
采样率: 44.1kHz
声道: 立体声
时长: 2-5分钟
特殊要求:
  - 支持无缝循环
  - 淡入淡出处理
  - 避免突兀的开头结尾
```

### 音效规范
```yaml
格式: MP3
比特率: 96kbps
采样率: 44.1kHz
声道: 单声道或立体声
时长: 0.5-3秒
特殊要求:
  - 干净无杂音
  - 音量统一（避免某些音效过响）
```

### 配音规范
```yaml
格式: MP3
比特率: 128kbps
采样率: 44.1kHz
声道: 单声道
特殊要求:
  - 清晰的吐字
  - 适当的情感表达
  - 与角色性格匹配的音色
  - 统一的录音环境（避免杂音差异）
```

## 🛠️ 资源制作工具推荐

### 图片处理
- **Adobe Photoshop** - 专业图片编辑
- **GIMP** - 免费开源替代方案
- **Figma** - 在线设计工具
- **TinyPNG** - 在线图片压缩

### 音频编辑
- **Audacity** - 免费音频编辑器
- **Adobe Audition** - 专业音频编辑
- **GarageBand** - Mac用户友好工具
- **FL Studio** - 音乐制作

### 配音录制
- **Blue Yeti** / **Audio-Technica ATR2100** - 入门级麦克风
- **隔音环境** - 减少背景噪音
- **音频接口** - 提升录音质量

## 📦 资源打包建议

### 分包策略
```
基础包（必需）:
  - 主界面资源
  - 第1章资源
  - 通用音效
  - 主题音乐
  大小: ~20-30MB

章节包（按需加载）:
  - 每章背景图
  - 每章角色立绘
  - 每章BGM
  大小: ~5-10MB/章

配音包（可选下载）:
  - 按章节分包
  大小: ~10-30MB/章
```

### CDN部署
```
推荐CDN服务:
  - 阿里云OSS
  - 腾讯云COS
  - AWS S3 + CloudFront
  - Cloudflare R2

目录结构:
  https://cdn.example.com/assets/
    ├── images/
    ├── audio/
    └── manifest.json  # 资源清单文件
```

## ✅ 资源准备检查清单

### 第一阶段（MVP - 第1章）
- [ ] 背景图片：2张
- [ ] 角色立绘：2个角色（共14张）
- [ ] 背景音乐：2首
- [ ] 音效：10个
- [ ] 配音：可选

### 第二阶段（5章完整）
- [ ] 背景图片：10-15张
- [ ] 角色立绘：4个角色（共25-30张）
- [ ] 背景音乐：8-10首
- [ ] 音效：15个
- [ ] 配音：约150段

### 第三阶段（16章完整）
- [ ] 背景图片：50-80张
- [ ] 角色立绘：5个角色（共30-40张）
- [ ] 背景音乐：20-30首
- [ ] 音效：15个
- [ ] 配音：约500-800段

## 💰 预算估算

### 自制（业余）
- 背景图片：免费素材网站 / AI生成
- 角色立绘：委托画师（¥500-2000/角色）
- 背景音乐：免费音乐库 / 购买授权
- 音效：免费音效库
- 配音：自己录制或朋友帮忙
- **总预算**：¥2,000-10,000

### 专业制作
- 背景图片：¥500-2000/张
- 角色立绘：¥2000-5000/角色
- 背景音乐：¥1000-3000/首（原创）
- 音效：¥100-500（音效包）
- 配音：¥50-200/段
- **总预算**：¥50,000-200,000

## 🔗 资源获取渠道

### 免费资源
- **图片**: Unsplash, Pexels, Pixabay
- **音乐**: Incompetech, YouTube Audio Library
- **音效**: Freesound, Zapsplat
- **AI工具**: Midjourney, Stable Diffusion

### 付费资源
- **图片**: Shutterstock, Adobe Stock
- **音乐**: AudioJungle, Epidemic Sound
- **音效**: Soundsnap, Pro Sound Effects
- **委托平台**: Fiverr, Upwork, 站酷

---

**注意**: 所有使用的资源都需要确保拥有合法的使用权限和授权。