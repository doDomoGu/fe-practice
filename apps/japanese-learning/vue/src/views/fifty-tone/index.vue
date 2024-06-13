<script setup>
// import { computed } from 'vue'
import Item from './item'
import { tableData } from './itemConfig'

console.log('tableData: ', tableData)
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex-none h-[40px]">FIFTY TONE</div>
    <div class="flex-1 overflow-scroll">
      <div class="p-[10px] flex flex-col">
        <div
          class="p-[10px] flex"
          v-for="(itemLine, idx) in tableData"
          :key="idx"
        >
          <div class="p-[10px]" v-for="item in itemLine" :key="item.id">
            <Item :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
