<script setup lang="ts">
import { cars, type Car } from '@/cars'
import { store } from '@/utils'
import { ref } from 'vue'

const isListOpen = ref(false)

const selectCar = (car: Car) => {
  store.selectedCar = car
  isListOpen.value = false
}
</script>

<template>
  <div class="relative h-[145px] w-full">
    <button
      @click="isListOpen = !isListOpen"
      type="button"
      class="flex items-center relative justify-between w-full h-full bg-[#f5f5f5]"
    >
      <img class="w-[260px] xl:w-[306px] z-10" :src="store.selectedCar.img" alt="" />
      <img class="w-[10px] mr-5 hidden md:block" src="@/assets/down_chevron.png" alt="" />
      <div
        class="absolute flex items-center pl-[200px] text-left xl:pl-[251px] border top-0 left-[50px] bottom-0 right-0 border-[#D5D5D5] xl:text-base text-sm"
      >
        {{ store.selectedCar.name }}
      </div>
    </button>
    <ul class="absolute w-full h-80 bg-white z-20" v-if="isListOpen">
      <li
        v-for="car in cars.filter((car) => car.name !== store.selectedCar.name)"
        :key="car.name"
        class="h-[145px]"
      >
        <button
          @click="() => selectCar(car)"
          type="button"
          class="flex items-center relative justify-between w-full h-full bg-[#f5f5f5]"
        >
          <img class="w-[260px] xl:w-[306px] z-10" :src="car.img" alt="" />
          <div
            class="absolute flex items-center pl-[200px] text-left xl:pl-[251px] border border-t-0 top-0 left-[50px] bottom-0 right-0 border-[#D5D5D5] xl:text-base text-sm"
          >
            {{ car.name }}
          </div>
        </button>
      </li>
    </ul>
  </div>
  <input type="hidden" name="car" id="car" />
</template>
