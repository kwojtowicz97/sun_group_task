<template>
  <div class="py-[104px] w-[667px]">
    <h1 class="text-[48px] leading-[108%]">{{ params.car.name }}</h1>
    <img class="mt-[76px]" :src="params.car.img" alt="" />
    <p class="mt-[38px] text-sm font-light leading-5">{{ params.car.description }}</p>
    <div class="grid grid-cols-3 text-sm font-light leading-5 mt-12">
      <div>Dostępny w leasingu z 0% opłaty własnej</div>
      <div>
        <div>Rata netto/mies. od*</div>
        <div class="text-[20px] font-semibold leading-6">{{ params.car.monthly }} zł</div>
      </div>
      <div>
        <div>Cena brutto już od</div>
        <div class="text-[20px] font-semibold leading-6">{{ params.car.gross }} zł</div>
      </div>
    </div>
    <MainButton @click="goToForm" variant="black" class-name="mt-12 mx-auto"
      >Umów jazdę próbną</MainButton
    >
  </div>
</template>

<script setup lang="ts">
import type { Car } from '@/cars'
import MainButton from '@/components/MainButton.vue'
import { scrollToForm, store } from '@/utils'
import type { PropType } from 'vue'

const params = defineProps({
  car: {
    required: true,
    type: Object as PropType<Car>
  }
})

const goToForm = () => {
  store.selectedCar = params.car
  scrollToForm()
}
</script>
