# 部署与测试指南 🚀

## 📋 目录

1. [本地开发环境](#本地开发环境)
2. [生产环境构建](#生产环境构建)
3. [部署方案](#部署方案)
4. [测试指南](#测试指南)
5. [性能优化](#性能优化)
6. [故障排查](#故障排查)

---

## 本地开发环境

### 系统要求

- macOS / Windows / Linux
- Node.js >= 16.0
- npm >= 8.0 或 yarn >= 1.22
- 现代浏览器（Chrome/Firefox/Safari/Edge 最新版）

### 环境配置

```bash
# 1. 克隆/进入项目
cd interactive-grandmother-game

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 访问游戏
# 浏览器打开: http://localhost:3000
```

### 开发工具推荐

- **VSCode插件**:
  - ESLint
  - Prettier
  - TypeScript Vue Plugin (Volar)
  - Tailwind CSS IntelliSense
  
---

## 生产环境构建

### 构建命令

```bash
# 完整构建流程
npm run build

# 输出目录: dist/
# 包含优化后的HTML、CSS、JS和资源文件
```

### 构建优化

```bash
# 1. 类型检查
npm run type-check

# 2. 代码检查
npm run lint

# 3. 预览构建结果
npm run preview
# 访问: http://localhost:4173
```

### 构建配置

**vite.config.ts** 关键配置：

```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,  // 生产环境关闭源码映射
    minify: 'terser',  // 使用terser压缩
    rollupOptions: {
      output: {
        manualChunks: {
          // 代码分割优化
          'react-vendor': ['react', 'react-dom'],
          'redux-vendor': ['@reduxjs/toolkit', 'react-redux'],
        }
      }
    }
  }
})
```

---

## 部署方案

### 方案一：Vercel（推荐）

**特点**: 零配置、自动CI/CD、免费SSL

```bash
# 1. 安装Vercel CLI
npm i -g vercel

# 2. 登录Vercel
vercel login

# 3. 部署
vercel

# 4. 生产部署
vercel --prod
```

**vercel.json** 配置：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

### 方案二：Netlify

**特点**: 简单易用、表单处理、函数支持

```bash
# 1. 安装Netlify CLI
npm i -g netlify-cli

# 2. 登录Netlify
netlify login

# 3. 初始化站点
netlify init

# 4. 部署
netlify deploy --prod
```

**netlify.toml** 配置：

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 方案三：GitHub Pages

**特点**: 免费、与GitHub集成

```bash
# 1. 安装gh-pages
npm install --save-dev gh-pages

# 2. 添加package.json脚本
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# 3. 部署
npm run deploy
```

**vite.config.ts** 需要添加base：

```typescript
export default defineConfig({
  base: '/interactive-grandmother-game/',
  // ...其他配置
})
```

---

### 方案四：自托管（Nginx）

**适用**: 有自己的服务器

```nginx
# nginx.conf
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/game/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

部署步骤：

```bash
# 1. 构建
npm run build

# 2. 上传dist目录到服务器
scp -r dist/* user@server:/var/www/game/dist/

# 3. 重启Nginx
ssh user@server 'sudo systemctl restart nginx'
```

---

## 测试指南

### 功能测试清单

#### 基础功能测试

- [ ] 游戏启动正常
- [ ] 所有16个章节可访问
- [ ] 选择按钮可点击
- [ ] 属性值正确更新
- [ ] 关系值正确更新
- [ ] 场景切换流畅

#### 选择系统测试

- [ ] 无前置条件的选择可见
- [ ] 有前置条件的选择正确显示/隐藏
- [ ] 选择后属性变化正确
- [ ] 选择历史正确记录
- [ ] nextScene跳转正确

#### 结局系统测试

测试每个结局是否能正确触发：

```bash
# 使用浏览器控制台测试
# 1. 打开开发者工具
# 2. 在Console中运行:

// 测试女帝归来结局
store.dispatch({
  type: 'game/loadGame',
  payload: {
    playerStats: { wisdom: 85, charisma: 95, modernity: 70, teaching: 60, medical: 50 },
    relationships: { jiZhiyuan: 85, jiZhouye: 50, jiShunying: 60, rongRuoya: 40 },
    choiceHistory: ['business_decision_1', 'business_decision_2', 'business_decision_3'],
    currentChapter: 16,
    currentScene: '16-3'
  }
})
```

#### 浏览器兼容性测试

| 浏览器 | 版本 | 状态 |
|--------|------|------|
| Chrome | 90+ | ✅ 完全支持 |
| Firefox | 88+ | ✅ 完全支持 |
| Safari | 14+ | ✅ 完全支持 |
| Edge | 90+ | ✅ 完全支持 |
| IE | 11 | ❌ 不支持 |

#### 响应式测试

测试以下屏幕尺寸：

- [ ] 移动端 (375px - 767px)
- [ ] 平板 (768px - 1023px)
- [ ] 桌面 (1024px+)
- [ ] 大屏 (1920px+)

---

## 性能优化

### 已实施的优化

1. **代码分割**
   - React库单独打包
   - Redux库单独打包
   - 章节数据按需加载

2. **资源优化**
   - Tailwind CSS按需生成
   - 图片懒加载（待实施）
   - 字体子集化（待实施）

3. **运行时优化**
   - React.memo优化组件
   - useMemo/useCallback缓存计算
   - Redux状态标准化

### 性能指标

使用Lighthouse测试：

```bash
# 生产构建后测试
npm run build
npm run preview

# 在Chrome DevTools中运行Lighthouse
# 目标指标:
# - Performance: > 90
# - Accessibility: > 95
# - Best Practices: > 90
# - SEO: > 85
```

### 待优化项

- [ ] 添加Service Worker实现离线缓存
- [ ] 图片使用WebP格式
- [ ] 实现虚拟滚动（如果列表很长）
- [ ] 添加骨架屏加载状态

---

## 故障排查

### 常见问题

#### 1. npm install 失败

**症状**: 依赖安装报错

**解决方案**:
```bash
# 清除缓存
npm cache clean --force

# 删除node_modules
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

#### 2. TypeScript编译错误

**症状**: `npm run type-check` 报错

**解决方案**:
```bash
# 检查具体错误
npm run type-check

# 常见问题:
# - 类型定义缺失: npm install @types/xxx
# - 导入路径错误: 检查import语句
# - 类型不匹配: 查看src/types/game.ts
```

#### 3. 构建后白屏

**症状**: 部署后页面空白

**可能原因**:
1. base路径配置错误
2. 静态资源路径错误
3. JavaScript执行错误

**解决方案**:
```bash
# 检查浏览器控制台错误
# 检查Network面板资源加载

# 修复base路径
# vite.config.ts
export default defineConfig({
  base: './',  // 使用相对路径
})
```

#### 4. 游戏状态异常

**症状**: 属性不更新/场景不切换

**解决方案**:
```javascript
// 清除localStorage
localStorage.clear()

// 刷新页面
location.reload()

// 检查Redux DevTools
// 查看action和state变化
```

#### 5. 性能问题

**症状**: 游戏卡顿、响应慢

**诊断**:
```bash
# 使用Chrome Performance面板
# 1. 打开DevTools
# 2. 切换到Performance
# 3. 录制游戏操作
# 4. 分析瓶颈

# 常见原因:
# - 频繁重渲染: 使用React.memo
# - 大型状态更新: 优化reducer
# - 未优化的计算: 使用useMemo
```

---

## 监控与日志

### 添加错误监控（推荐Sentry）

```typescript
// src/main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

### 添加分析工具（推荐Google Analytics）

```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 安全检查

```bash
# 1. 审计依赖安全
npm audit

# 2. 修复已知漏洞
npm audit fix

# 3. 检查过时依赖
npm outdated
```

---

## 备份与回滚

### 版本标记

```bash
# 发布前打标签
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### 快速回滚

```bash
# Vercel回滚
vercel rollback

# Netlify回滚
# 在Dashboard中选择之前的部署

# 自托管回滚
git checkout v1.0.0
npm run build
# 重新部署
```

---

## 持续集成（CI/CD）

### GitHub Actions示例

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Type check
      run: npm run type-check
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID}}
        vercel-project-id: ${{ secrets.PROJECT_ID}}
        vercel-args: '--prod'
```

---

**部署完成后，记得更新README.md中的线上地址！** 🎉