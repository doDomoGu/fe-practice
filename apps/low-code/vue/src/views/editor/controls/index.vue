<script setup>
import Item from './Item'

import { reactive } from 'vue'
import { useEventBus } from '@vueuse/core'

const controlConfigs = window.controlConfigs

const eventBus = useEventBus('editor')

const componentCount = reactive({})

// 处理添加控件
const handleAdd = (item) => {
  eventBus.emit({ action: 'addControl', data: { ...item } })
}

// 处理清空控件
const handleClear = () => {
  eventBus.emit({ action: 'clearControl' })
}

eventBus.on((e) => {
  const { action, data } = e
  switch (action) {
    case 'initFinish':
      data.forEach((item) => {
        componentCount[item.id] = (componentCount[item.id] || 0) + 1
      })
      break
    case 'addControlSuccess':
      componentCount[data.id] = (componentCount[data.id] || 0) + 1
      break
    case 'clearControlSuccess':
      for (let compId in componentCount) {
        delete componentCount[compId]
      }
      break
  }
})
</script>

<template>
  <div class="w-[250px] bg-gray-200 text-black h-full flex flex-col">
    <div
      class="flex-none h-[30px] items-center px-2 bg-gray-700 text-gray-400 text-center"
    >
      控件区
      <button @click="handleClear">清空</button>
    </div>
    <div class="overflow-auto flex-1">
      <div class="flex flex-wrap justify-start">
        <Item
          v-for="item in controlConfigs"
          v-bind="{ ...item }"
          :count="componentCount[item.id] || 0"
          :key="item.id"
          @click="handleAdd(item)"
          class="m-2"
        />
      </div>
    </div>
  </div>
</template>
