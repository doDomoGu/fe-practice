<script setup>
import Item from './Item'
import config from './config'

import useStore from '@/store/editor'

const { controlsCount, addControlsCount } = useStore()
</script>

<template>
  <div class="w-[250px] bg-gray-200 text-black h-full flex flex-col">
    <div class="flex-none h-[30px] items-center px-2 bg-gray-700 text-gray-400 text-center">
      控件区
    </div>
    <div class="overflow-auto flex-1 grid grid-cols-2 gap-2 p-4">
      <Item
        v-for="item in config"
        v-bind="{ ...item }"
        :count="controlsCount[item.id] || 0"
        :key="item.id"
        @click="addControlsCount(item.id)"
      />
    </div>
  </div>
</template>
