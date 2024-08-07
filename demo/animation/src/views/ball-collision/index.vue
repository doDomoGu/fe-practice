<script setup>
import { onMounted, ref, reactive, computed, watch } from 'vue'
// import { Vector2 } from '@catsums/vector2'

import Collection from '@/models/collection'
import Ball from '@/models/2d/ball'
import Canvas from '@/models/2d/canvas'

const balls = new Collection(Ball, 100) // 最多生成X个小球

const canvasInstanceParams = {
  duration: 6 // 动画执行时长 单位（秒）  -1: 一直执行下去
}
const canvasRef = ref(null)

const canvasInstance = ref(null)

onMounted(() => {
  if (canvasRef.value) {
    // 创建画布实例
    canvasInstance.value = new Canvas(
      canvasRef.value.getContext('2d'),
      canvasInstanceParams
    )

    // 往画布实例中添加balls精灵对象
    canvasInstance.value.addSprite(balls)

    const run = () => {
      // 判断是否继续执行
      if (canvasInstance.value.isPlaying) {
        canvasInstance.value.frame++

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
      }

      // 超出最大帧数时停止执行
      if (canvasInstance.value.isFrameExceed()) {
        canvasInstance.value.stop()
        console.log('history')
        console.log(canvasInstance.value.history)
      } else {
        requestAnimationFrame(run)
      }
    }
    setTimeout(() => {
      canvasInstance.value.start()
      requestAnimationFrame(run)
    }, 0)
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

const sliderValue = ref([0])
const handleUpdate = (v) => {
  console.log('handleUpdate', v)
}
// https://blog.csdn.net/liudonglovehemin/article/details/137507068
</script>

<template>
  <div class="w-full h-full p-[16px] flex flex-col">
    <div
      class="h-16 text-xs flex-none bg-slate-600 overflow-hidden p-[8px] box-content"
    >
      <template v-if="canvasInstance">
        <div class="flex bg-slate-500">
          <div class="flex-1 h-6 leading-6 px-1 overflow-hidden">
            <!-- {{ canvasInstance.history.length }} -->
            状态: {{ canvasInstance.statusCn }}
          </div>
          <div class="flex-1 h-6 leading-6 px-1 overflow-hidden">
            <button
              class="border h-5 leading-5 px-2 hover:bg-slate-600 hover:cursor-pointer"
              @click="handleAnimate"
              v-show="!canvasInstance.isStopped"
            >
              {{ canvasInstance.isPlaying ? '暂停' : '播放' }}
            </button>
          </div>
        </div>
        <div class="flex bg-slate-500">
          <div class="flex-1 h-6 leading-6 px-1 font-number overflow-hidden">
            播放帧数: {{ canvasInstance.frame }} /
            {{ canvasInstance.totalFrame }}
          </div>
          <div class="flex-1 h-6 leading-6 px-1 font-number overflow-hidden">
            小球数量: {{ balls.collection.length }} / {{ balls.maxCount }}
          </div>
        </div>
        <div>
          <!-- <DgSlider v-model="sliderValue" @update:modelValue="handleUpdate" /> -->
          <!-- {{
            canvasInstance.canvas.offsetWidth +
            ' - ' +
            canvasInstance.canvas.offsetHeight +
            ' | ' +
            canvasInstance.canvas.width +
            ' - ' +
            canvasInstance.canvas.height
          }} -->
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
