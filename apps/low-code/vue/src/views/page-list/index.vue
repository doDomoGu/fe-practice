<script setup>
// const pageList = [
//   {
//     id: 1,
//     name: '页面一'
//   }
// ]
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <div class="text-xl font-bold text-white m-4">页面列表</div>
    <div class="flex flex-wrap justify-start gap-4 mx-4">
      <router-link
        v-for="id in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        :key="id"
        :to="{ name: 'editor', params: { id } }"
      >
        <div
          class="bg-white text-black text-[30px] rounded-md w-[100px] h-[100px] cursors-pointer hover:opacity-70 text-center leading-[100px]"
        >
          {{ id }}
        </div>
      </router-link>
    </div>
  </div>
</template>
