
<script setup>
import { computed, reactive } from 'vue'
import ButtonFactory from './main.ts'

const primaryBtn = reactive(ButtonFactory('primary'))
const seondaryBtn = reactive(ButtonFactory('secondary'))
const linkBtn = reactive(ButtonFactory('link'))


// primaryBtn.onClick()
// seondaryBtn.onClick()
// linkBtn.onClick()

</script>

<template>
  <div>
    <!-- <div>factory</div> -->
    <div>
      <div>
        <label>{{ primaryBtn.type }}</label>
        &emsp;
        <button @click="primaryBtn.onClick()">{{ primaryBtn.text }}</button>
        &emsp;
        <span>count: {{ primaryBtn.count }}</span>
      </div>
      <div>
        <label>{{ seondaryBtn.type }}</label>
        &emsp;
        <button @click="seondaryBtn.onClick()">{{ seondaryBtn.text }}</button>
        &emsp;
        <span>count: {{ seondaryBtn.count }}</span>
      </div>
      <div>
        <label>{{ linkBtn.type }}</label>
        &emsp;
        <button @click="linkBtn.onClick()">{{ linkBtn.text }}</button>
        &emsp;
        <span>count: {{ linkBtn.count }}</span>
      </div>
      
    </div>
  </div>
</template>
