<script setup>
import { onMounted, ref, reactive, computed, watch } from 'vue'
// import { Vector2 } from '@catsums/vector2'

import Collection from '@/models/collection'
import Ball from '@/models/2d/ball'
import Canvas from '@/models/2d/canvas'

const balls = new Collection(Ball, 100) // 最多生成X个小球

const canvasRef = ref(null)

const canvasInstance = ref(null)

onMounted(() => {
  if (canvasRef.value) {
    // 创建画布实例
    canvasInstance.value = new Canvas(canvasRef.value, {
      animationTime: 20 // 动画执行时长 单位（秒）  -1: 一直执行下去
    })

    // 往画布实例中添加balls精灵对象
    canvasInstance.value.addSprite(balls)

    const run = () => {
      // 判断是否继续执行
      if (canvasInstance.value.isPlaying) {
        // 更新每个精灵对象的状态
        canvasInstance.value.update()

        //
        if (canvasInstance.value.isActionFrame()) {
          // 添加一个小球
          balls.add()
        }

        // 清空画布
        canvasInstance.value.clear()

        // 绘制画布
        canvasInstance.value.paint()

        // 超出最大帧数时停止执行
        if (canvasInstance.value.isFrameExceed()) {
          canvasInstance.value.stop()
          return
        }

        canvasInstance.value.frame++
      }

      requestAnimationFrame(run)
    }
    setTimeout(() => {
      canvasInstance.value.play()
      run()
    }, 100)
  }
})

const handleAnimate = () => {
  if (!canvasInstance.value) return
  if (canvasInstance.value.isPaused) {
    canvasInstance.value.play()
  } else if (canvasInstance.value.isPlaying) {
    canvasInstance.value.pause()
  }
}

// https://blog.csdn.net/liudonglovehemin/article/details/137507068
</script>

<template>
  <div class="w-full h-full p-8 flex flex-col">
    <div class="h-16 text-base flex-none w-full text-center overflow-hidden">
      <template v-if="canvasInstance">
        <div class="flex justify-center">
          <div class="w-[100px] px-1 mx-2 text-right border border-slate-300">
            {{ canvasInstance.statusCn }}
          </div>
          <div
            class="w-[140px] px-1 mx-2 text-right border border-slate-300 font-number"
          >
            {{ canvasInstance.frame }} / {{ canvasInstance.totalFrame }}
          </div>
          <div
            class="w-[120px] px-1 mx-2 text-right border border-slate-300 font-number"
          >
            {{ balls.collection.length }}
            / {{ balls.maxCount }}
          </div>
          <div class="w-[120px] px-1 mx-2">
            <button
              class="border px-2"
              @click="handleAnimate"
              :disabled="canvasInstance.isStopped"
            >
              {{ canvasInstance.isPlaying ? '暂停' : '播放' }}
            </button>
          </div>
        </div>

        <div>
          {{
            canvasInstance.canvas.offsetWidth +
            ' - ' +
            canvasInstance.canvas.offsetHeight +
            ' | ' +
            canvasInstance.canvas.width +
            ' - ' +
            canvasInstance.canvas.height
          }}
        </div>
      </template>
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
