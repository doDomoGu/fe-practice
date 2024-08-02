#! /bin/bash
echo '== 开始执行'

echo '== 开始拉取最新代码'
git pull 

echo '== 开始更新项目依赖'
pnpm install

echo '== 开始项目构建'

echo '** @dodomogu/demo_animation'
pnpm -F @dodomogu/demo_animation build

echo '脚本执行完毕'