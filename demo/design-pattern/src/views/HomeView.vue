<script setup>
function CallLevel() {
  if (CallLevel.caller == null)
    alert('CallLevel was called from the top level.')
  else alert('CallLevel was called by another function:\n' + CallLevel.caller)
}
function funCaller() {
  CallLevel()
}
CallLevel()
// funCaller()
  
</script>

<template>
  <div>
    home
  </div>
</template>
