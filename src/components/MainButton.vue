<template>
  <button
    :class="['h-12', 'px-6', 'flex', 'items-center', 'box-border', variantClasses, className]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  className: String,
  variant: {
    type: String as PropType<'black' | 'white' | 'gray'>,
    default: 'white',
    required: true
  }
})

const variants = {
  black: 'bg-primary-black text-white hover:bg-[#494949]',
  white: 'bg-white text-black outline outline-black hover:outline-2',
  gray: 'bg-gray-100 text-black'
}

const variantClasses = variants[props.variant]
</script>
