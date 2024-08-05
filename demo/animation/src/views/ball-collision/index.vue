<script setup>
import { onMounted, ref, reactive, computed } from 'vue'
// import { Vector2 } from '@catsums/vector2'

import Collection from '@/models/collection'
import Ball from '@/models/2d/ball'
import Canvas from '@/models/2d/canvas'

const balls = new Collection(Ball, 100) // 最多生成X个小球

const animationTime = 60 // 动画执行时长 单位（秒）  -1: 一直执行下去

const fps = 60 // 每秒X帧  ==> 应动态获取客户端数值

const timesPerSecond = 10 // 一秒执行X次

const frameCount = ref(0) // 表示第几帧

const canvasRef = ref(null)

const canvasInstance = ref(null)

onMounted(() => {
  if (canvasRef.value) {
    canvasRef.value.width = canvasRef.value.offsetWidth
    canvasRef.value.height = canvasRef.value.offsetHeight
    // 创建画布实例
    canvasInstance.value = new Canvas(canvasRef.value)

    // 往画布实例中添加balls精灵对象
    canvasInstance.value.addSprite(balls)

    // {animationTime}秒后停止动画运行  -1: 表示一直运行
    // canvasInstance.value.stop(animationTime)

    console.time('frameTime')
    // let executingTimeStart = 0

    const run = () => {
      // 判断是否继续执行
      if (canvasInstance.value.animating) {
        // !executingTimeStart && (executingTimeStart = t)

        // 更新每个精灵对象的状态
        canvasInstance.value.update()
        // balls.update(ctx)

        // if (canvasInstance.value.balls.balls.length > 0) {
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
          // 添加一个小球
          balls.add()
          // balls.add({ id: balls.length })
          // console.log({ balls })
        }

        // 清空画布
        canvasInstance.value.clear()

        // 绘制画布
        canvasInstance.value.paint()

        frameCount.value++
      }
      // else {
      //   console.timeEnd('frameTime')
      // }

      requestAnimationFrame(run)
    }
    setTimeout(() => run(), 100)
  }
})

const handleAnimate = () => {
  if (!canvasInstance.value) return
  canvasInstance.value.animating
    ? canvasInstance.value.pause()
    : canvasInstance.value.play()
}

// https://blog.csdn.net/liudonglovehemin/article/details/137507068
</script>

<template>
  <div class="w-full h-full p-8 flex flex-col">
    <div class="h-32 text-xl flex-none w-full text-center">
      <div>
        {{
          canvasInstance
            ? canvasInstance.animating
              ? '播放中'
              : '暂停中'
            : '--'
        }}
        | {{ frameCount }} |
        {{
          canvasInstance ? canvasInstance.sprites[0].collection.length : '--'
        }}
      </div>

      <div>
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
      <div>
        <button @click="handleAnimate">
          {{
            canvasInstance ? (canvasInstance.animating ? '暂停' : '播放') : '--'
          }}
        </button>
      </div>
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
