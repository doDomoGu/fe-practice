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

const editorStore = new CreateLocalStore(`editor-${route.params.id}`)

let editorPreviewIframe = null

// 发送数据给"画布预览"页面, 用于初始化状态
onMounted(() => {
  // console.log('onMounted', document.getElementById('editor-preview'))
  editorPreviewIframe = document.getElementById('editor-preview')
  setTimeout(() => {
    // console.log('onload', 'postmessage')
    editorPreviewIframe.contentWindow.postMessage(
      {
        from: 'editor',
        action: 'init',
        data: editorStore.get('content') || []
      },
      '*'
    )
  }, 500)
})

// editor 的事件总线
const eventBus = useEventBus('editor')
eventBus.on((e) => {
  // console.log('e', e)
  // 将指定操作和数据发送给"画布预览"页面
  if (['addControl', 'clearControl'].includes(e.action)) {
    editorPreviewIframe.contentWindow.postMessage({ ...e, from: 'editor' }, '*')
  }
})

// 接收 "画布预览"页面的message
window.addEventListener('message', (e) => {
  console.log('01 received-message', e.data)
  const { from, action, data } = e.data
  if (from == 'editor-preview') {
    console.log('02')
    switch (action) {
      case 'initFinish':
        eventBus.emit({ action: 'initFinish', data })
        break
      case 'addControlSuccess':
        eventBus.emit({ action: 'addControlSuccess', data })
        break
      case 'clearControlSuccess':
        eventBus.emit({ action: 'clearControlSuccess' })
        break
      case 'select-item':
        setCurrentControl(data)
        break
    }
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
