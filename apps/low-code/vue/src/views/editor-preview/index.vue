<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import { CreateLocalStore } from '@dodomogu/localstore'
import { v4 as uuidv4 } from 'uuid'

const route = useRoute()
const localstore = new CreateLocalStore(`editor-${route.params.id}`, [])

const curCtrl = ref(null)

// 接收 "画布预览"页面的message
window.addEventListener('message', (e) => {
  console.log('11 received-message', e.data)
  const { from, action, data } = e.data
  if (from == 'editor') {
    console.log('12')
    switch (action) {
      case 'init':
        initData(data)
        break
      case 'addControl':
        addControl(data)
        break
      case 'clearControl':
        clearControl()
        break
    }
  }
})

// window.parent.postMessage({ from: 'editor-preview', action: 'test' }, '*')

const contentData = ref([])

const initData = (data) => {
  try {
    console.log('contentData', data)
    contentData.value = data
    window.parent.postMessage(
      { from: 'editor-preview', action: 'initFinish', data },
      '*'
    )
  } catch (e) {
    console.error('preview:initFinish', e)
  }
}
const addControl = (item) => {
  try {
    item.uuid = uuidv4()
    localstore.push('content', item)
    contentData.value.push(item)
    window.parent.postMessage(
      { from: 'editor-preview', action: 'addControlSuccess', data: item },
      '*'
    )
  } catch (e) {
    console.error('preview:addControl', e)
  }
}

const clearControl = () => {
  try {
    localstore.set('content', [])
    contentData.value = []
    window.parent.postMessage(
      { from: 'editor-preview', action: 'clearControlSuccess' },
      '*'
    )
  } catch (e) {
    console.error('preview:clearControl', e)
  }
}
// const s = {
//   id: 'text1',
//   icon: '/src/views/editor/controls/icons/text.svg',
//   title: '文本组件',
//   limit: 50,
//   uuid: '4596752b-554b-40b5-a1dc-904d5ac58265'
// }

const handleItemSelect = (item) => {
  console.log('select item', item)
  window.parent.postMessage(
    { from: 'editor-preview', action: 'select-item', data: item.uuid },
    '*'
  )

  curCtrl.value = item.uuid
  // store.setCurrentControl(item.uuid)
}
</script>

<template>
  <div class="w-full h-full overflow-auto">
    {{ curCtrl }}
    <div class="bg-white w-[750px] h-[800px] overflow-auto mx-auto mt-4 p-4">
      <template v-for="item in contentData" :key="item.uuid">
        <div
          class="w-[320px] h-[160px] border text-black"
          :class="curCtrl === item.uuid ? 'bg-blue-100' : ''"
          @click.stop="handleItemSelect(item)"
        >
          <component :is="item.id" :data="item" />
        </div>
      </template>
    </div>
  </div>
</template>
