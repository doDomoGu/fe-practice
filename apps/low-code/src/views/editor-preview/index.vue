<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
// import { CreateLocalStore } from '@dodomogu/localstore'

const route = useRoute()
// const localstore = new CreateLocalStore(`editor-${route.params.id}`, [])

let parent = null
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
  contentData.value.push(item)
}
</script>

<template>
  <div class="w-full h-full overflow-auto">
    <div>editor-preview id: {{ route.params.id }}</div>
    <div>{{ contentData }}</div>
  </div>
</template>
