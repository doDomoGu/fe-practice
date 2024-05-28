<script setup>
import Item from './Item'
import config from './config'

import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import useStore from '@/store/editor'
import { CreateLocalStore } from '@dodomogu/localstore'

// import { v4 as uuidv4 } from 'uuid'

import { useEventBus } from '@vueuse/core'

const eventBus = useEventBus('editor')

const route = useRoute()

// const { controlsCount, addControlsCount } = useStore()

const localstore = new CreateLocalStore(`editor-${route.params.id}`, [])
const componentCount = reactive({ data: localstore.get('componentCount') || {} })
const handleAddControl = (item) => {
  // addControlsCount(item.id)
  const _componentCount = localstore.get('componentCount') || {}
  _componentCount[item.id] = _componentCount[item.id] ? _componentCount[item.id] + 1 : 1

  componentCount.data = _componentCount
  localstore.set('componentCount', _componentCount)
  // eventBus.emit({ action: 'addControl', data: { ...item, uuid: uuidv4() } })
  eventBus.emit({ action: 'addControl', data: { ...item } })
  // console.log(localstore.get('content'))
}

const handleClear = () => {
  localstore.set('componentCount', {})
  localstore.set('content', [])
}

const componentCount2 = computed(() => localstore.get('componentCount') || {})
</script>

<template>
  <div class="w-[250px] bg-gray-200 text-black h-full flex flex-col">
    <div class="flex-none h-[30px] items-center px-2 bg-gray-700 text-gray-400 text-center">
      控件区
      <button @click="handleClear">清空</button>
      <!-- {{ localstore.get('content') }} -->
    </div>
    <div class="overflow-auto flex-1">
      <div class="flex flex-wrap justify-start">
        <Item
          v-for="item in config"
          v-bind="{ ...item }"
          :count="componentCount.data[item.id] || 0"
          :key="item.id"
          @click="handleAddControl(item)"
          class="m-2"
        />
      </div>
    </div>
  </div>
</template>
