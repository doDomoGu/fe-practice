<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useEventBus } from '@vueuse/core'

import EditorHeader from './header'
import EditorMainContent from './content'
import EditorMainControls from './controls'
import EditorMainSettings from './settings'

import { CreateLocalStore } from '@dodomogu/localstore'

import useStore from '@/store/editor'
const { setCurrentControl } = useStore()

const route = useRoute()

const localstore = new CreateLocalStore(`editor-${route.params.id}`, [])

const eventBus = useEventBus('editor')

let editorPreviewIframe = null

// 发送数据给预览页面 初始化操作
onMounted(() => {
  editorPreviewIframe = document.getElementById('editor-preview')
  setTimeout(() => {
    console.log('onload', 'postmessage')
    editorPreviewIframe.contentWindow.postMessage(
      { action: 'init', data: localstore.get('content') || [] },
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
    // localstore.set('content', event.data.data)
    setCurrentControl(event.data.data)
  }
})
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex-none">
      <EditorHeader :id="route.params.id" />
    </div>
    <div class="flex-1 overflow-hidden flex">
      <div class="flex-none">
        <EditorMainControls />
      </div>
      <div class="flex-1 bg-purple-200 text-black w-full h-full flex flex-col">
        <EditorMainContent />
      </div>
      <div class="flex-none w-[350px] bg-cyan-200 text-black">
        <EditorMainSettings />
      </div>
    </div>
  </div>
</template>
