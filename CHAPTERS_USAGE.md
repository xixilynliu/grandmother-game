# 章节使用指南

## 📖 如何使用新章节（第2-5章）

### 1. 在游戏中切换章节

目前游戏数据已包含第1-5章，要在游戏中启用这些章节，需要更新游戏逻辑：

```typescript
// 在 src/store/gameSlice.ts 中
import { chapters } from '../data/chapters';

// 添加切换章节的action
setChapter: (state, action: PayloadAction<number>) => {
  state.currentChapter = action.payload;
  const chapter = chapters[action.payload];
  if (chapter && chapter.scenes[0]) {
    state.currentScene = chapter.scenes[0].id;
  }
}
```

### 2. 章节导航组件（建议添加）

创建一个章节选择器，让玩家可以选择从哪一章开始：

```typescript
// src/components/ChapterSelector.tsx
import { useDispatch } from 'react-redux';
import { chapters } from '../data/chapters';

export const ChapterSelector = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="chapter-selector">
      {Object.values(chapters).map(chapter => (
        <button
          key={chapter.id}
          onClick={() => dispatch(setChapter(chapter.id))}
        >
          第{chapter.id}章：{chapter.title}
        </button>
      ))}
    </div>
  );
};
```

### 3. 测试特定章节

开发模式下快速测试某个章节：

```typescript
// 在 src/App.tsx 中临时设置
useEffect(() => {
  // 测试第2章
  dispatch(setChapter(2));
}, []);
```

## 🎮 章节内容概览

### 第1章：重生宴会 ✅
- **状态**：已有
- **场景数**：4
- **主题**：重生觉醒，初识纪氏家族

### 第2章：校园生活初体验 ✅ 
- **状态**：新增
- **场景数**：4
- **主题**：理科班、与纪舟野的关系建立
- **关键解锁**：学术路线、医疗路线

### 第3章：家族深入接触 ✅
- **状态**：新增
- **场景数**：4
- **主题**：芙蓉庄园、诊断纪舜英
- **关键解锁**：治疗计划、古代医术

### 第4章：医疗突破线 ✅
- **状态**：新增
- **场景数**：4
- **主题**：实施治疗、纪舜英有反应
- **关键解锁**：奇迹医者、完美治疗

### 第5章：学术声名鹊起 ✅
- **状态**：新增
- **场景数**：4
- **主题**：数学竞赛、教育顾问邀请
- **关键解锁**：数学大师、文化使者

### 第6-16章：待开发 ⏳
- **状态**：规划中
- **建议开发顺序**：
  - 第6-8章：学校与家族的双线发展
  - 第9-12章：剧情高潮与转折
  - 第13-16章：多结局分支

## 🔍 调试工具

### 查看当前章节数据

```javascript
// 在浏览器控制台
import { chapters } from './src/data/chapters/index.ts';
console.log(chapters[2]); // 查看第2章
```

### 验证章节完整性

```bash
cd interactive-grandmother-game
node scripts/validate-chapters.js
```

### 检查TypeScript类型

```bash
cd interactive-grandmother-game
npx tsc --noEmit
```

## ?? 属性平衡参考

### 推荐的章节通关属性值

| 章节 | 智慧 | 气场 | 现代化 | 教导 | 医疗 |
|------|------|------|--------|------|------|
| 第1章结束 | 55 | 35 | 25 | 45 | 65 |
| 第2章结束 | 65 | 43 | 28 | 53 | 73 |
| 第3章结束 | 75 | 51 | 36 | 61 | 88 |
| 第4章结束 | 83 | 59 | 44 | 71 | 106 |
| 第5章结束 | 103 | 69 | 52 | 86 | 116 |

### 关系值建议

| 角色 | 第2章 | 第3章 | 第4章 | 第5章 |
|------|-------|-------|-------|-------|
| 纪止渊 | 5-15 | 20-35 | 35-50 | 50-75 |
| 纪舟野 | 5-20 | 10-30 | 25-45 | 35-60 |
| 纪舜英 | 3-10 | 15-30 | 40-65 | 50-80 |

## 💡 开发提示

### 添加新场景

1. 在对应的 `chapterX.ts` 文件中添加场景对象
2. 确保 `id` 格式为 `"X-Y"` (X=章节号，Y=场景号)
3. 设置正确的 `nextScene` 链接

### 添加新选择

1. 选择 `id` 格式：`"cX-Ya"` (a,b,c,d...)
2. 设置合理的 `requirements`（前置条件）
3. 设计平衡的 `effects`（属性影响）
4. 可选添加 `unlock` 标记

### 测试清单

- [ ] 场景能正常显示
- [ ] 选择按钮可点击
- [ ] 属性正确更新
- [ ] 场景正确跳转
- [ ] 前置条件生效
- [ ] 解锁标记记录

## 🐛 常见问题

### Q: 场景跳转失败？
A: 检查 `nextScene` 的值是否与目标场景的 `id` 完全匹配

### Q: 选择按钮显示但无法点击？
A: 检查 `requirements` 是否设置过高，当前属性是否满足

### Q: 属性变化不符合预期？
A: 检查 `effects.stats` 中的属性名是否拼写正确

### Q: TypeScript报错？
A: 运行 `npx tsc --noEmit` 查看具体错误信息

## 📞 支持

如有问题，请查看：
- `CHAPTERS_2-5_SUMMARY.md` - 详细的章节设计文档
- `technical_implementation_plan.md` - 技术实现方案
- GitHub Issues - 提交bug和建议

---

**最后更新**：2026-02-19
**版本**：v1.0 (第1-5章完整版)