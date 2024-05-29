<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { CreateLocalStore } from '@dodomogu/localstore'
import { v4 as uuidv4 } from 'uuid'

const route = useRoute()
const localstore = new CreateLocalStore(`editor-${route.params.id}`, [])

// let parent = null
onMounted(() => {
  console.log('iframe onmounted')
  window.addEventListener('message', (e) => {
    console.log('postmessage', { e })
    const { action, data } = e.data
    switch (action) {
      case 'init':
        init(data)
        break
      case 'addControl':
        addControl(data)
        break
    }
  })
})

window.parent.postMessage({ type: 'from-editor-preview' }, '*')

// const data = computed(() => localstore.get('content'))
const contentData = ref([])
const init = (data) => {
  contentData.value = data
}
const addControl = (item) => {
  item.uuid = uuidv4()

  localstore.push('content', item)
  contentData.value.push(item)
}
// const s = {
//   id: 'text1',
//   icon: '/src/views/editor/controls/icons/text.svg',
//   title: '文本组件',
//   limit: 50,
//   uuid: '4596752b-554b-40b5-a1dc-904d5ac58265'
// }
</script>

<template>
  <div class="w-full h-full overflow-auto">
    <div class="bg-white w-[750px] h-[800px] overflow-auto mx-auto mt-4 p-4">
      <template v-for="item in contentData" :key="item.uuid">
        <div class="w-[320px] h-[160px] border text-black">
          <component :is="item.id" :data="item" />
        </div>
      </template>
    </div>
  </div>
</template>
