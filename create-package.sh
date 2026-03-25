#!/bin/bash

# 《十八岁太奶奶》互动游戏 - 打包脚本
# 生成时间: 2026-02-25

echo "======================================"
echo "《十八岁太奶奶》互动游戏 - 打包工具"
echo "======================================"
echo ""

# 设置变量
VERSION="v1.0.0"
PROJECT_NAME="grandmother-game"
DATE=$(date +%Y%m%d)

echo "版本: $VERSION"
echo "日期: $DATE"
echo ""

# 创建打包目录
mkdir -p packages

echo "选择打包类型："
echo "1. 完整项目包（含所有源代码和文档）"
echo "2. 源代码包（不含node_modules）"
echo "3. 生产构建包（可直接部署）"
echo "4. 全部生成"
echo ""
read -p "请输入选项 (1-4): " choice

case $choice in
  1)
    echo ""
    echo "📦 打包完整项目..."
    cd ..
    zip -r "interactive-grandmother-game/packages/${PROJECT_NAME}-full-${VERSION}-${DATE}.zip" \
      interactive-grandmother-game/ \
      -x "*/node_modules/*" \
      -x "*/.git/*" \
      -x "*/dist/*" \
      -x "*/packages/*"
    
    echo "✅ 完成！"
    echo "文件位置: packages/${PROJECT_NAME}-full-${VERSION}-${DATE}.zip"
    ;;
    
  2)
    echo ""
    echo "📦 打包源代码..."
    zip -r "packages/${PROJECT_NAME}-source-${VERSION}-${DATE}.zip" \
      src/ \
      public/ \
      scripts/ \
      *.md \
      *.json \
      *.js \
      *.ts \
      *.html \
      .gitignore \
      -x "*/node_modules/*" \
      -x "*/.git/*"
    
    echo "✅ 完成！"
    echo "文件位置: packages/${PROJECT_NAME}-source-${VERSION}-${DATE}.zip"
    ;;
    
  3)
    echo ""
    echo "📦 构建生产版本..."
    npm run build
    
    echo "打包生产文件..."
    cd dist
    zip -r "../packages/${PROJECT_NAME}-production-${VERSION}-${DATE}.zip" .
    cd ..
    
    echo "✅ 完成！"
    echo "文件位置: packages/${PROJECT_NAME}-production-${VERSION}-${DATE}.zip"
    ;;
    
  4)
    echo ""
    echo "📦 生成所有包..."
    
    # 完整项目包
    echo "1/3 打包完整项目..."
    cd ..
    zip -r "interactive-grandmother-game/packages/${PROJECT_NAME}-full-${VERSION}-${DATE}.zip" \
      interactive-grandmother-game/ \
      -x "*/node_modules/*" \
      -x "*/.git/*" \
      -x "*/dist/*" \
      -x "*/packages/*" \
      > /dev/null 2>&1
    cd interactive-grandmother-game
    
    # 源代码包
    echo "2/3 打包源代码..."
    zip -r "packages/${PROJECT_NAME}-source-${VERSION}-${DATE}.zip" \
      src/ \
      public/ \
      scripts/ \
      *.md \
      *.json \
      *.js \
      *.ts \
      *.html \
      .gitignore \
      -x "*/node_modules/*" \
      > /dev/null 2>&1
    
    # 生产构建包
    echo "3/3 构建生产版本..."
    npm run build > /dev/null 2>&1
    cd dist
    zip -r "../packages/${PROJECT_NAME}-production-${VERSION}-${DATE}.zip" . > /dev/null 2>&1
    cd ..
    
    echo "✅ 全部完成！"
    ;;
    
  *)
    echo "❌ 无效选项"
    exit 1
    ;;
esac

echo ""
echo "======================================"
echo "📦 打包完成！"
echo "======================================"
echo ""
echo "生成的文件："
ls -lh packages/ | tail -n +2
echo ""
echo "文件位置: $(pwd)/packages/"
echo ""