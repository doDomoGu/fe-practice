<script setup>
import Item from './Item'
import config from './config'

import { useRoute } from 'vue-router'
import useStore from '@/store/editor'
import { CreateLocalStore } from '@dodomogu/localstore'

import { v4 as uuidv4 } from 'uuid'

import { useEventBus } from '@vueuse/core'

const eventBus = useEventBus('editor')

const route = useRoute()

const { controlsCount, addControlsCount } = useStore()

const localstore = new CreateLocalStore(`editor-${route.params.id}`, [])

const add = (item) => {
  addControlsCount(item.id)
  localstore.push('content', { ...item, uuid: uuidv4() })
  eventBus.emit({ action: 'addControl', data: { ...item, uuid: uuidv4() } })
  // console.log(localstore.get('content'))
}
</script>

<template>
  <div class="w-[250px] bg-gray-200 text-black h-full flex flex-col">
    <div class="flex-none h-[30px] items-center px-2 bg-gray-700 text-gray-400 text-center">
      控件区 {{ localstore.get('content') }}
    </div>
    <div class="overflow-auto flex-1 grid grid-cols-2 gap-2 p-4">
      <Item
        v-for="item in config"
        v-bind="{ ...item }"
        :count="controlsCount[item.id] || 0"
        :key="item.id"
        @click="add(item)"
      />
    </div>
  </div>
</template>
