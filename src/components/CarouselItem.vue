<template>
  <div class="py-[104px] w-[667px]">
    <h1 class="text-[48px] leading-[108%]">{{ params.name }}</h1>
    <img class="mt-[76px]" :src="params.img" alt="" />
    <p class="mt-[38px] text-sm font-light leading-5">{{ params.description }}</p>
    <div class="grid grid-cols-3 text-sm font-light leading-5 mt-12">
      <div>Dostępny w leasingu z 0% opłaty własnej</div>
      <div>
        <div>Rata netto/mies. od*</div>
        <div class="text-[20px] font-semibold leading-6">{{ params.monthly }} zł</div>
      </div>
      <div>
        <div>Cena brutto już od</div>
        <div class="text-[20px] font-semibold leading-6">{{ params.gross }} zł</div>
      </div>
    </div>
    <MainButton variant="black" class-name="mt-12 mx-auto">Umów jazdę próbną</MainButton>
  </div>
</template>

<script setup lang="ts">
import MainButton from '@/components/MainButton.vue'

const params = defineProps({
  name: String,
  description: String,
  monthly: String,
  gross: String,
  img: String
})
</script>
