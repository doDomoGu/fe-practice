<script setup>
import { onMounted, ref } from 'vue'
// import { Vector2 } from '@catsums/vector2'
// import { Ball } from './ball.js'
// import Canvas from './ballCanvas.js'

import Collection from '@/models/collection'
import Ball from '@/models/2d/ball'
import Canvas from '@/models/2d/canvas'

const balls = new Collection(Ball)

const ballMaxNum = 100 // 最多生成多少小球

const animationTime = 300 // 动画执行时长 单位（秒）  -1: 一直执行下去

const fps = 60 // 每秒X帧  ==> 应动态获取客户端数值

const timesPerSecond = 10 // 一秒执行X次

const runningFlag = ref(true) // 用于判断是否继续执行
const frameCount = ref(0) // 表示第几帧

const canvasRef = ref(null)

let canvasInstance = null

onMounted(() => {
  if (canvasRef.value) {
    canvasRef.value.width = canvasRef.value.offsetWidth
    canvasRef.value.height = canvasRef.value.offsetHeight

    // 创建画布实例
    canvasInstance = new Canvas(canvasRef.value)

    // 往画布实例中添加balls精灵对象
    canvasInstance.addSprite(balls)

    // {animationTime}秒后将 执行标志位置为false
    if (animationTime > 0)
      setTimeout(() => (runningFlag.value = false), animationTime * 1000)

    console.time('frameTime')
    // let executingTimeStart = 0

    const run = () => {
      // 判断是否继续执行
      if (runningFlag.value) {
        // !executingTimeStart && (executingTimeStart = t)

        // 更新每个精灵对象的状态
        canvasInstance.update()
        // balls.update(ctx)

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
          // console.timeLog('frameTime')

          // 判断是否要添加小球
          if (balls.collection.length < ballMaxNum) {
            // 添加一个小球
            balls.add({ id: balls.length })
            // console.log('add a ball')
          }
          // console.log({ balls })
        }

        // 清空画布
        canvasInstance.clear()

        // 绘制画布
        canvasInstance.paint()

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
      {{ canvasInstance ? canvasInstance.sprites[0].collection.length : '--' }}
      <br />
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
