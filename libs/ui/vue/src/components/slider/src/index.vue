<script setup>
import { ref } from 'vue'
// import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits
} from 'radix-vue'
// type SliderRootEmits, type SliderRootProps
// const props = defineProps<SliderRootProps>()
// const emits = defineEmits<SliderRootEmits>()

const props = defineProps()
const emits = defineEmits(['update:modelValue'])

const forward = useForwardPropsEmits(props, emits)

// const sliderValue = ref([50])
</script>

<template>
  <!-- <SliderRoot -->
  <!-- v-model="sliderValue" -->
  <!-- <SliderRoot
    :modelValue="props.value"
    @update:modelValue="(val) => $emit('update:value', val)"
    
    :max="100"
    :step="1" -->

  <SliderRoot
    v-bind="forward"
    class="relative flex items-center select-none touch-none w-full h-4"
  >
    <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
      <SliderRange class="absolute bg-white rounded-full h-full" />
    </SliderTrack>
    <SliderThumb
      class="block w-2 h-2 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
      aria-label="Volume"
    />
  </SliderRoot>
</template>
