<script setup></script>
<template>
  <div>
    <div class="text-center">首页</div>
    <div class="pl-[200px]">
      <router-link
        :to="{ name: 'fifty-tone' }"
        class="cursor-pointer hover:text-blue-300 hover:underline"
      >
        五十音图>>
      </router-link>
    </div>
  </div>
</template>
