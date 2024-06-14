<script setup></script>
<script>
import TextIcon from '../icons/text.svg'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'InputText'
})
export const config = {
  id: 'input-text',
  icon: TextIcon,
  componentName: '文本输入框1',
  limit: 50
}
</script>
<template>
  <div>这是一个input-text组件</div>
</template>
