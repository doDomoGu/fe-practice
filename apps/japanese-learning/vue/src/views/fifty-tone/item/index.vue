<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="w-[150px] h-[100px] outline">
    <div class="text-lg" :class="[item.isRepeat ? 'text-slate-500' : '']">
      <div>{{ props.item.hiragana }}</div>
      <div>{{ props.item.katakana }}</div>
      <div>{{ props.item.romaji }}</div>
    </div>
  </div>
</template>
