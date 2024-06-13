<script setup>
const props = defineProps({
  componentName: String,
  icon: String,
  count: Number,
  limit: Number
})
</script>
<template>
  <div
    class="w-[100px] h-[100px] border-[1px] py-[5px] border-slate-800 overflow-hidden flex flex-col items-center cursor-pointer hover:bg-slate-300"
  >
    <div class="w-[50px] h-[50px]"><img :src="icon" alt="" cßlass="w-full h-full" /></div>
    <div class="h-[20px] text-[14px]">{{ componentName }}</div>
    <div class="h-[20px] text-[14px]">{{ count }} / {{ limit }}</div>
  </div>
</template>
