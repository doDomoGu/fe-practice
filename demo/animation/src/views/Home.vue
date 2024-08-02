<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const routes = router.options.routes.filter((v) => v.path != '/')
</script>

<template>
  <div class="flex">
    <template v-for="route in routes" :key="route.path">
      <div class="p-2">
        <button
          class="p-2 rounded-md bg-blue-500 text-white"
          @click="$router.push(route.path)"
        >
          {{ route.meta ? route.meta.title : route.name }}
        </button>
      </div>
    </template>
  </div>
</template>
