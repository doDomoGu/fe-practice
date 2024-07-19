<script setup>
import { reactive } from 'vue'
import Singleton from './main'

const instance1 = reactive(new Singleton())
const instance2 = reactive(new Singleton())

</script>

<template>
  <div>
    <div>
      <div> instance1 </div>
      <div>
        property1: <input v-model="instance1.property1" />
      </div>
      <div>
        property2: {{ instance1.property2 }}
      </div>
      <div>
        property3: <input v-model="instance1.property3" />
      </div>
      <div>
        count: {{ instance1.count }}  
        <button @click="instance1.add()">add</button>
      </div>
    </div>

    <br/>
    <br/>

    <div>
      <div> instance2 </div>
      <div>
        property1: {{ instance2.property1 }}
      </div>
      <div>
        property2: <input v-model="instance2.property2" />
      </div>
      <div>
        property3: <input v-model="instance2.property3" />
      </div>
      <div>
        count: {{ instance2.count }}  
        <button @click="instance2.add()">add</button>
      </div>
    </div>
  </div>
</template>