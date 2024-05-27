<script setup>
import { useRoute } from 'vue-router'
import EditorHeader from './header'
import EditorMainContent from './content'
import EditorMainControls from './controls'
import EditorMainSettings from './settings'
const route = useRoute()
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
      <div class="flex-1 bg-purple-200 text-black">
        <EditorMainContent />
      </div>
      <div class="flex-none w-[350px] bg-cyan-200 text-black">
        <EditorMainSettings />
      </div>
    </div>
  </div>
</template>
