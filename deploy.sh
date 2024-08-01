#! /bin/bash
echo '== 开始执行'

echo '== 开始拉取最新代码'
git pull 


echo '== 开始项目构建'

echo '** @dodomogu/demo_animation'
pnpm -F @dodomogu/demo_animation build

echo '** @dodomogu/dodomogu.com-blog'
pnpm -F @dodomogu/dodomogu.com-blog docs:build

echo '脚本执行完毕'