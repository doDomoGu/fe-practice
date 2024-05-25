<script setup>
const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="h-[32px] w-full flex">
    <div class="w-[100px] pl-[6px] flex flex-row items-center">
      <div><<router-link :to="{ name: 'pageList' }">返回</router-link></div>
    </div>
    <div class="flex-1 text-center">编辑器页面 id: {{ props.id }}</div>
    <div class="w-[100px] pr-[6px] flex flex-row items-center justify-end">
      <div><button>保存</button></div>
    </div>
  </div>
</template>
