# 音频资源目录

## 目录结构

```
audio/
├── bgm/          # 背景音乐
├── sfx/          # 音效
│   ├── click.mp3    # 点击音效
│   └── select.mp3   # 选择音效
└── voice/        # 配音文件
```

## 如何添加音频

### 背景音乐 (BGM)
- 格式: MP3
- 建议时长: 2-5分钟，可循环
- 命名: 与场景对应，如 `banquet.mp3`, `garden.mp3`

### 音效 (SFX)
- 格式: MP3
- 建议时长: 0.5-2秒
- 必需文件:
  - `click.mp3` - 点击/推进对话
  - `select.mp3` - 选择选项

### 配音 (Voice)
- 格式: MP3
- 命名规则: `chapter{章节号}_scene{场景号}_dialog{对话号}.mp3`
- 例如: `chapter1_scene1_dialog1.mp3`

## 推荐音频来源

1. **免费音效库**
   - Freesound.org
   - Mixkit.co
   - Zapsplat.com

2. **AI语音合成**
   - 讯飞开放平台
   - 阿里云TTS
   - Azure Speech Services
   - ElevenLabs

## 注意事项

- 游戏会自动处理缺失的音频文件，不会影响游戏运行
- 添加音频后无需修改代码，游戏会自动加载