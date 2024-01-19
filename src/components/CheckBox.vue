<script setup lang="ts">
const props = defineProps({
  className: String,
  label: String,
  id: String,
  name: String
})
</script>

<template>
  <div :class="['relative', 'flex', props.className]">
    <input
      class="appearance-none before:w-5 before:h-5 before:absolute before:border-[#D5D5D5] before:border before:cursor-pointer before:checked:bg-[#8C8B8B] before:checked:outline before:outline-offset-[-4px] before:outline-white before:outline-[3px] before:top-px before:left-0"
      :id="props.id"
      :name="props.name"
      type="checkbox"
    />
    <label class="text-[13px] block font-light leading-[21px] ml-8" :for="props.id">{{
      props.label
    }}</label>
  </div>
</template>
