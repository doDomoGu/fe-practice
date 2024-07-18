<script setup>
import { onMounted, ref, watch, computed } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
})


const listRef = ref(null)

function throttle(fn, delay){
  let timer = null

  return function () {
    let context = this
    let args = arguments
    // console.log(18, timer, this, arguments)
    if(!timer) { 
      timer = setTimeout(function(){
        // console.log(23, timer, this, arguments)
        fn.apply(context, args)
        timer = null
       }, delay)
    }
  }
}

watch(() => props.data, () => {
  console.log('listRef', listRef.value)

  listRef.value.addEventListener('scroll', throttle(function(e){
      console.log('scroll', e)
    }, 500))

  // listRef.value.addEventListener('scroll',e =>{
  //   console.log(e.target.scrollTop)
  //   throttle(function(){
  //     console.log('scroll', e)
  //   }, 500)()
  // })
})


const pageNum  = ref(1)

const pageSize = 10

const showData = computed(()=>{
  return props.data.slice((pageNum.value-1) * pageSize, (pageNum.value+1) * pageSize)
})

</script>

<template>
  <div class="container">
    <ul class="ul" ref="listRef" :style="{height: (data.length * 40) + 'px'}">
      <li v-for="(item, index) in showData" :key="index"> {{ item.label }} </li>
    </ul>
  </div>
</template>

<style>
.container {
  height: 510px;
  width: 300px;
  overflow: auto;
  border: 1px solid #999;
  padding: 0 10px;
  box-sizing: border-box;
}
.ul {
  list-style: none;
}
.ul::-webkit-scrollbar {
  /* display: none; */
}

.ul li {
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #333;
  margin-top: 10px;
}
.ul li:last-child {
  margin-bottom: 10px;
}
</style>