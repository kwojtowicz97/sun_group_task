<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  className: String,
  name: String,
  id: String,
  placeholder: String,
  error: {
    required: false,
    type: String as PropType<string | undefined>
  },
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :class="[
      'border-b',
      'border-[#D5D5D5]',
      'py-3',
      'leading-[21px]',
      'bg-transparent',
      'outline-0',
      'placeholder:text-black',
      'w-full',
      props.className
    ]"
    :name="props.name"
    :id="props.id"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />

  <p v-if="props.error" class="ml-auto text-[13px] leading-[21px] text-[#FF0000]">
    {{ props.error }}
  </p>
</template>
