<script setup>
import { onMounted, ref } from 'vue'
import { Vector2 } from '@catsums/vector2'
// import { Ball } from './ball.js'
import Canvas from './ballCanvas.js'

// const ball = new Ball({ id: 1 })
// const ball2 = new Ball({ id: 2 })
// console.log(ball, ball2)

// const balls = new Balls()

const ballCount = 50 // 生成多少球  debug只添加一个球

const animationTime = 10 // 动画执行时长 单位（秒）  -1: 一直执行下去

const fps = 60 // 每秒X帧  ==> 应动态获取客户端数值

const timesPerSecond = 10 // 一秒执行X次

const runningFlag = ref(true) // 用于判断是否继续执行
const frameCount = ref(0) // 表示第几帧

const canvasRef = ref(null)

let canvasInstance = null
// const base = new Vector2(0, 0)
// const vec1 = new Vector2(1, 2)
// const velocity = new Vector2(4, -3)
// const vec2 = Vector2.ADD(vec1, velocity) // 3, -1
// console.log(vec1)
// console.log(velocity)
// console.log(vec2)

// console.log(
//   (Math.abs(vec1.y) * Math.abs(vec2.x - vec1.x)) / Math.abs(vec2.y - vec1.y)
// )
// console.log((vec1.angleTo(base) / Math.PI) * 180)

onMounted(() => {
  if (canvasRef.value) {
    canvasRef.value.width = canvasRef.value.offsetWidth
    canvasRef.value.height = canvasRef.value.offsetHeight

    canvasInstance = new Canvas({
      ctx: canvasRef.value.getContext('2d'),
      width: canvasRef.value.width,
      height: canvasRef.value.height
    })

    // {animationTime}秒后将 执行标志位置为false
    if (animationTime > 0)
      setTimeout(() => (runningFlag.value = false), animationTime * 1000)

    console.time('frameTime')
    // let executingTimeStart = 0

    const run = () => {
      // 判断是否继续执行
      if (runningFlag.value) {
        // !executingTimeStart && (executingTimeStart = t)

        // 更新每个小球的状态
        canvasInstance.updateBalls()

        // if (canvasInstance.balls.balls.length > 0) {
        //   console.log(
        //     balls.balls[0].coordinate.x,
        //     balls.balls[0].coordinate.y,
        //     balls.balls[0].velocity.x,
        //     balls.balls[0].velocity.y
        //   )
        //   console.log(balls.balls[0])
        // }

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
        canvasInstance.clear()

        // 绘制当前状态下的小球
        canvasInstance.paintBalls()

        frameCount.value++

        requestAnimationFrame(run)
      } else {
        console.timeEnd('frameTime')
      }
    }
    setTimeout(() => run(), 100)
  }
})
</script>

<template>
  <div class="w-full h-full p-8 flex flex-col">
    <div class="h-16 text-xl flex-none w-full text-center">
      {{ runningFlag ? 'test执行中' : '执行结束' }} | {{ frameCount }} |
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
    <div class="flex-1 w-full overflow-hidden">
      <canvas
        class="w-full h-full border border-slate-800 bg-teal-700"
        width="800"
        height="400"
        id="MyCanvas"
        ref="canvasRef"
      />
    </div>
  </div>
</template>
