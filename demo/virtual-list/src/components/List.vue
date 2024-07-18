<script setup>
import { onMounted, ref, watch, computed } from 'vue'

import { throttle } from '@/utils/func.js'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const containerHeight = 510

const itemHeight = 50

const showNum = Math.ceil(containerHeight / itemHeight) // 表示在页面上显示的item数量

const containerRef = ref(null)

watch(
  () => props.items,
  () => {
    console.log('listRef', containerRef.value)

    containerRef.value.addEventListener(
      'scroll',
      throttle(function (e) {
        let scrollPos = Math.round(e.target.scrollTop / itemHeight)
        pos.value = scrollPos
        // console.log(e.target.scrollTop)
        console.log('scroll', e)
      }, 50)
    )

    // listRef.value.addEventListener('scroll',e =>{
    //   console.log(e.target.scrollTop)
    //   throttle(function(){
    //     console.log('scroll', e)
    //   }, 500)()
    // })
  }
)

const pos = ref(0) // 表示当前第一个元素(item)的序号

const showItems = computed(() => {
  return props.items.slice(
    pos.value, // 表示第一个元素的起始位置
    pos.value + showNum // 表示最后一个元素的结束位置
  )
})
</script>

<template>
  <div
    class="container"
    ref="containerRef"
    :style="{ height: `${containerHeight}px` }"
  >
    <ul
      class="ul"
      :style="{
        height: props.items.length * 40 + 'px',
        paddingTop: pos * 40 + 'px'
      }"
    >
      <li
        v-for="(item, index) in showItems"
        :key="index"
        :style="{ height: `${itemHeight}px` }"
      >
        <div>{{ item.label }} -- {{ pos }}</div>
      </li>
    </ul>
  </div>
</template>

<style>
.container {
  /* height: 510px; */
  width: 300px;
  overflow: auto;
  border: 1px solid #999;
  padding: 0 10px;
  box-sizing: border-box;
}
.ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.ul::-webkit-scrollbar {
  /* display: none; */
}

.ul li {
  padding-top: 10px;
}

.ul li div {
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #333;
}
</style>
