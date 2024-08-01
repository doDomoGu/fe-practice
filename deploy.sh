#! /bin/bash
echo '== 开始执行'

echo '== 开始拉取最新代码'
git pull 


echo '== 开始项目构建'
pnpm -F @dodomogu/demo_animation build


echo '脚本执行完毕'