<template>
  <button
    :type="props.type"
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
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset' | undefined>,
    required: false
  }
})

const variants = {
  black: 'bg-primary-black text-white outline outline-black hover:bg-[#494949]',
  white: 'bg-white text-black outline outline-black hover:outline-2',
  gray: 'bg-gray-100 text-black hover:bg-white'
}

const variantClasses = variants[props.variant]
</script>
