<script setup></script>
<script>
import TextIcon from '../icons/text.svg'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TitleText'
})
export const config = {
  id: 'title-text',
  icon: TextIcon,
  componentName: '标题文本1',
  limit: 50
}
</script>
<template>
  <div>这是一个title-text组件</div>
</template>
