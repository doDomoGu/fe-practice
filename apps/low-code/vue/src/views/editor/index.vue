<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useEventBus } from '@vueuse/core'

import EditorHeader from './header'
import EditorMainContent from './content'
import EditorMainControls from './controls'
import EditorMainSettings from './settings'

import { CreateLocalStore } from '@dodomogu/localStore'

import useStore from '@/store/editor'

const { setCurrentControl } = useStore()

const route = useRoute()

const editorStore = new CreateLocalStore(`editor-${route.params.id}`)

const eventBus = useEventBus('editor')

let editorPreviewIframe = null

// 发送数据给"画布预览"页面, 用于初始化状态
onMounted(() => {
  editorPreviewIframe = document.getElementById('editor-preview')
  setTimeout(() => {
    console.log('onload', 'postmessage')
    editorPreviewIframe.contentWindow.postMessage(
      { action: 'init', data: editorStore.get('content') || [] },
      '*'
    )
  }, 500)
})

eventBus.on((e) => {
  editorPreviewIframe.contentWindow.postMessage(e, '*')
})

window.addEventListener('message', (event) => {
  console.log('received', event.data)
  if (event.data.type === 'select-item') {
    // editorStore.set('content', event.data.data)
    setCurrentControl(event.data.data)
  }
})
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <!-- header -->
    <div class="flex-none">
      <EditorHeader :id="route.params.id" />
    </div>
    <!-- main -->
    <div class="flex-1 overflow-hidden flex">
      <!-- 控件库 -->
      <div class="flex-none">
        <EditorMainControls />
      </div>
      <!-- 画布预览 -->
      <div class="flex-1 bg-purple-200 text-black w-full h-full flex flex-col">
        <EditorMainContent />
      </div>
      <!-- 配置区 -->
      <div class="flex-none w-[350px] bg-cyan-200 text-black">
        <EditorMainSettings />
      </div>
    </div>
  </div>
</template>
