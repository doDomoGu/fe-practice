<script setup>
import { onMounted, ref } from 'vue'
// import { Vector2 } from '@catsums/vector2'
import Balls from './ball.js'
import { paintBall, paintBalls } from './canvas.js'

const balls = new Balls()

const ballCount = 200 // 生成多少球  debug只添加一个球

const animationTime = 300 // 动画执行时长 单位（秒）

const fps = 60 // TODO 先固定 60帧  应动态获取客户端数值

const runningFlag = ref(true) // 用于判断是否继续执行
const frameCount = ref(0) // 表示第几帧

onMounted(() => {
  var canvas = document.getElementById('MyCanvas')

  // console.log(canvas.offsetWidth, canvas.offsetHeight)
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  var ctx = canvas.getContext('2d')

  // {animationTime}秒后将 执行标志位置为false
  setTimeout(() => (runningFlag.value = false), animationTime * 1000)

  console.time('frameTime')
  // let executingTimeStart = 0

  const run = (t) => {
    // 判断是否继续执行
    if (runningFlag.value) {
      // !executingTimeStart && (executingTimeStart = t)

      // 更新每个小球的状态
      balls.update(canvas.width, canvas.height)

      if (balls.balls.length > 0) {
        // console.log(
        //   balls.balls[0].pos.x,
        //   balls.balls[0].pos.y,
        //   balls.balls[0].velocity.x,
        //   balls.balls[0].velocity.y
        // )
        // console.log(balls.balls[0])
      }

      // 每60帧(fps) （约等于每一秒）执行的逻辑
      if (frameCount.value % fps === 0) {
        console.timeLog('frameTime')

        // 判断是否要添加小球
        if (balls.balls.length < ballCount) {
          // 添加一个小球
          balls.add()
          // console.log('add a ball')
        }
        // console.log({ balls })
      }

      // 清空画布
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // 绘制当前状态下的小球
      paintBalls(ctx, balls.balls)

      frameCount.value++

      requestAnimationFrame(run)
    } else {
      console.timeEnd('frameTime')
    }
  }

  // context.arc(x, y, radius, startAngle, endAngle, anticlockwise);

  run()
})
</script>

<template>
  <div style="width: 100%; height: 100%; display: flex; flex-direction: column">
    <div
      style="
        height: 3rem;
        flex: none;
        width: 100%;
        text-align: center;
        font-size: 2rem;
      "
    >
      {{ runningFlag ? '执行中' : '执行结束' }} | {{ frameCount }} |
      {{ balls.balls.length }}
    </div>
    <canvas
      style="
        box-sizing: border-box;
        flex: 1;
        overflow: hidden;
        width: 100%;
        /* height: 100vh; */
        border: 1px solid #000;
        background-color: #00800033;
      "
      width="800"
      height="400"
      id="MyCanvas"
    ></canvas>
  </div>
</template>
