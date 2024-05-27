import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export default defineStore('Editor', () => {
  const controlsCount = reactive({})

  function addControlsCount(id) {
    if (controlsCount[id]) {
      controlsCount[id]++
    } else {
      controlsCount[id] = 1
    }
  }

  return { controlsCount, addControlsCount }
})
