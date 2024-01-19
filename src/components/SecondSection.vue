<script setup lang="ts">
import MainButton from '@/components/MainButton.vue'
</script>

<template>
  <div class="bg-[#1b1b1b]">
    <div
      class="flex flex-col xl:gap-[159px] max-w-[1372px] py-[14px] xl:pt-[173px] xl:pb-[96px] mx-auto px-4"
    >
      <div class="flex xl:flex-row flex-col-reverse items-start">
        <img class="h-[519px] w-full xl:w-[787px] object-cover" src="@/assets/photo6.webp" alt="" />
        <div class="bg-[#1b1b1b] xl:-ml-[85px] xl:pl-[117px] pb-8 xl:pb-16">
          <p class="font-light leading-[26px] text-white xl:mt-0 mt-10">Technologia</p>
          <h1 class="text-[36px] font-light leading-[46px] text-white">
            Poczuj pełną wolność <br />
            jazdy dzięki licznym innowacjom.
          </h1>
          <MainButton variant="white" class-name="mt-12">Umów jazdę próbną</MainButton>
        </div>
      </div>
      <div class="flex xl:flex-row flex-col items-start">
        <div class="bg-[#1b1b1b] xl:-mr-[85px] xl:pr-[117px] pb-8 xl:pb-16 z-10">
          <p class="font-light leading-[26px] text-white xl:mt-0 mt-10">Potęga Designu</p>
          <h1 class="text-[36px] font-light leading-[46px] text-white">
            Crossover emanujący <br />
            gracją, dynamizmem <br />
            i czystym wyrafinowaniem.
          </h1>
          <MainButton variant="white" class-name="mt-12">Umów jazdę próbną</MainButton>
        </div>
        <img class="h-[519px] w-full xl:w-[787px] object-cover" src="@/assets/photo5.webp" alt="" />
      </div>
      <div class="flex xl:flex-row flex-col-reverse items-start">
        <img class="h-[519px] w-full xl:w-[787px] object-cover" src="@/assets/photo4.webp" alt="" />
        <div class="bg-[#1b1b1b] xl:-ml-[85px] xl:pl-[117px] pb-8 xl:pb-16">
          <p class="font-light leading-[26px] text-white xl:mt-0 mt-10">Design wnętrza</p>
          <h1 class="text-[36px] font-light leading-[46px] text-white">
            Idealny komfort. Unikalny wystrój wnętrza stworzony <br />
            w stylu CUPRY.
          </h1>
          <MainButton variant="white" class-name="mt-12">Umów jazdę próbną</MainButton>
        </div>
      </div>
    </div>
  </div>
</template>
