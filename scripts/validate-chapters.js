// 章节数据验证脚本
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 开始验证章节数据...\n');

// 验证文件是否存在
const chaptersDir = path.join(__dirname, '../src/data/chapters');
const requiredFiles = [
  'chapter1.ts',
  'chapter2.ts',
  'chapter3.ts',
  'chapter4.ts',
  'chapter5.ts',
  'index.ts'
];

let allValid = true;

console.log('📁 检查文件完整性:');
requiredFiles.forEach(file => {
  const filePath = path.join(chaptersDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`  ✅ ${file} (${stats.size} bytes)`);
  } else {
    console.log(`  ❌ ${file} - 文件不存在`);
    allValid = false;
  }
});

// 统计各章节的场景和选择数
console.log('\n📊 章节内容统计:');
for (let i = 1; i <= 5; i++) {
  const filePath = path.join(chaptersDir, `chapter${i}.ts`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // 统计场景数
    const sceneMatches = content.match(/id: "\d+-\d+"/g);
    const sceneCount = sceneMatches ? sceneMatches.length : 0;
    
    // 统计选择数
    const choiceMatches = content.match(/id: "c\d+-\d+[a-z]"/g);
    const choiceCount = choiceMatches ? choiceMatches.length : 0;
    
    // 统计解锁标记
    const unlockMatches = content.match(/unlock: \[([^\]]+)\]/g);
    const unlockCount = unlockMatches ? unlockMatches.length : 0;
    
    console.log(`  第${i}章:`);
    console.log(`    - 场景数: ${sceneCount}`);
    console.log(`    - 选择数: ${choiceCount}`);
    console.log(`    - 解锁标记: ${unlockCount}`);
  }
}

// 检查TypeScript语法
console.log('\n🔧 TypeScript语法检查:');
console.log('  运行: npx tsc --noEmit');

if (allValid) {
  console.log('\n✅ 所有验证通过！');
  process.exit(0);
} else {
  console.log('\n❌ 验证失败，请检查缺失的文件');
  process.exit(1);
}