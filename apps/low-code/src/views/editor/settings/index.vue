<script setup></script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex-none h-[30px] items-center px-2 bg-gray-700 text-gray-400 text-center">
      配置区
    </div>
    <div class="overflow-auto flex-1">
      <div v-for="i in 100" :key="i">{{ i }}</div>
    </div>
  </div>
</template>
