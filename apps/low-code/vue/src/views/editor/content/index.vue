<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex-none h-[30px] leading-[30px] bg-gray-300 text-gray-400 text-center">
      内容区
    </div>
    <div class="flex-1 p-[10px] overflow-hidden">
      <iframe
        id="editor-preview"
        :src="`/editor/preview/${route.params.id}`"
        class="w-full h-full"
      ></iframe>
    </div>
  </div>
</template>
