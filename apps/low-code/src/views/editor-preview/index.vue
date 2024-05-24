<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>editor-preview {{ route.params.id }}</div>
</template>
