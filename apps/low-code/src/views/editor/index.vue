<script setup>
import { useRoute } from 'vue-router'
import EditorHeader from './header'
const route = useRoute()
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex-none">
      <EditorHeader :id="route.params.id" />
    </div>
    <div class="flex-1 overflow-hidden flex">
      <div></div>
      <div>main</div>
      <div></div>
    </div>
  </div>
</template>
