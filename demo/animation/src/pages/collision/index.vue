<script setup>
// import { onMounted } from 'vue'
import { Vector2 } from '@catsums/vector2'
import { v4 as uuidv4 } from 'uuid'

import Ball from './ball.js'

const ballCount = 10 // 至多多少球
const addBallByFrameCount = 60 // 每X帧加一个球
const balls = []

const addBall = () => {
  let ball = new Ball(50, 30, balls.length)
  ball.color = uuidv4().slice(0, 6)
  ball.velocity = new Vector2(5 * Math.random(), 5 * Math.random())
  balls.push(ball)
}

// for (let i = 0; i < ballNum; i++) {
//   addBall()
// }

// console.log({ balls })

let steps = 0

console.time('time')

function step() {
  // console.log({ steps })
  //重绘背景
  // paintBg()
  //每隔一定时间增加一个小球
  if (
    steps % addBallByFrameCount === 0 &&
    steps < ballCount * addBallByFrameCount
  ) {
    console.timeLog('time')
    addBall()
    console.log({ steps, balls })
  }
  //更新每个小球的状态
  //  balls = balls.map((ball,index,originArr)=>{
  //    ball.update(index,originArr);
  //    ball.paint();//描线但不在画布上绘制
  //    return ball;
  //  });
  //绘制每个小球位置

  steps++
  requestAnimationFrame(step)
}
step()
// onMounted(() => {
//   requestAnimationFrame(step)
// })
</script>

<template>
  <canvas
    style="
      width: 800px;
      height: 400px;
      border: 1px solid #000;
      background-color: #00800033;
    "
    id="canvas"
  ></canvas>
</template>
