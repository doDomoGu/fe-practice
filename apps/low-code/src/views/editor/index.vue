<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>editor {{ route.params.id }}</div>
</template>
