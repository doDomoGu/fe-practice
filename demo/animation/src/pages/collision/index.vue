<script setup>
import { onMounted, ref } from 'vue'
// import { Vector2 } from '@catsums/vector2'
// import Balls from './ball.js'
import Canvas from './ballCanvas.js'

// const balls = new Balls()

const ballCount = 250 // 生成多少球  debug只添加一个球

const animationTime = -1 // 动画执行时长 单位（秒）  -1: 一直执行下去

const fps = 60 // 每秒X帧  ==> 应动态获取客户端数值

const timesPerSecond = 10 // 一秒执行X次

const runningFlag = ref(true) // 用于判断是否继续执行
const frameCount = ref(0) // 表示第几帧

const canvasRef = ref(null)

let canvasInstance = null

onMounted(() => {
  // var canvas = document.getElementById('MyCanvas')

  // console.log(canvasRef.value.offsetWidth, canvasRef.value.offsetHeight)
  canvasRef.value.width = canvasRef.value.offsetWidth
  canvasRef.value.height = canvasRef.value.offsetHeight

  // const ctx = canvasRef.value.getContext('2d')

  canvasInstance = new Canvas(canvasRef.value)

  // {animationTime}秒后将 执行标志位置为false
  if (animationTime > 0)
    setTimeout(() => (runningFlag.value = false), animationTime * 1000)

  console.time('frameTime')
  // let executingTimeStart = 0

  const run = (t) => {
    // 判断是否继续执行
    if (runningFlag.value) {
      // !executingTimeStart && (executingTimeStart = t)

      // 更新每个小球的状态
      canvasInstance.updateBalls()

      if (canvasInstance.balls.balls.length > 0) {
        // console.log(
        //   balls.balls[0].pos.x,
        //   balls.balls[0].pos.y,
        //   balls.balls[0].velocity.x,
        //   balls.balls[0].velocity.y
        // )
        // console.log(balls.balls[0])
      }

      // 每60帧(fps) （约等于每一秒）执行的逻辑
      if (frameCount.value % (fps / timesPerSecond) === 0) {
        console.timeLog('frameTime')

        // 判断是否要添加小球
        if (canvasInstance.balls.balls.length < ballCount) {
          // 添加一个小球
          canvasInstance.addBall()
          // console.log('add a ball')
        }
        // console.log({ balls })
      }

      // 清空画布
      canvasInstance.ctx.clearRect(
        0,
        0,
        canvasRef.value.width,
        canvasRef.value.height
      )
      // 绘制当前状态下的小球
      canvasInstance.paintBalls()

      frameCount.value++

      requestAnimationFrame(run)
    } else {
      console.timeEnd('frameTime')
    }
  }

  // context.arc(x, y, radius, startAngle, endAngle, anticlockwise);

  setTimeout(() => run(), 100)
})
</script>

<template>
  <div style="width: 100%; height: 100%; display: flex; flex-direction: column">
    <div
      style="
        height: 2rem;
        line-height: 1rem;
        flex: none;
        width: 100%;
        text-align: center;
        font-size: 0.75rem;
      "
    >
      {{ runningFlag ? '执行中' : '执行结束' }} | {{ frameCount }} |
      {{ canvasInstance ? canvasInstance.balls.balls.length : '--' }} <br />
      {{
        canvasRef
          ? canvasRef.offsetWidth +
            '|' +
            canvasRef.offsetHeight +
            '|' +
            canvasRef.width +
            '|' +
            canvasRef.height
          : ''
      }}
    </div>
    <canvas
      style="
        box-sizing: border-box;
        flex: 1;
        overflow: hidden;
        width: 100%;
        /* height: 100vh; */
        border: 1px solid #000;
        background-color: #33803333;
      "
      width="800"
      height="400"
      id="MyCanvas"
      ref="canvasRef"
    ></canvas>
  </div>
</template>
./ballCanvas.js
