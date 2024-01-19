<script setup lang="ts">
import MainButton from '@/components/MainButton.vue'
import { scrollToForm } from '@/utils'
</script>

<template>
  <div class="bg-[#1b1b1b] pb-10 xl:pb-[104px] w-full relative">
    <div class="max-w-[1372px] py-[14px] xl:py-[18px] mx-auto px-4 text-white">
      <h1 class="text-[40px] xl:text-[60px] leading-[107%] font-light mt-[68px] xl:mt-[107px]">
        Wypróbuj
      </h1>
      <p class="xl:w-[553px] mt-4 text-white/50 text-base xl:text-xl leading-[120%]">
        Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody, które są wyjątkowym
        połączeniem technologii, mocy, elegancji i komfortu.
      </p>
      <div class="flex flex-col xl:flex-row gap-8 xl:mt-[68px] mt-8">
        <div class="flex-shrink-0">
          <img
            class="w-full xl:w-[787px] h-[519px] object-cover"
            src="@/assets/photo3.webp"
            alt=""
          />
          <p class="text-white/50 text-base leading-[143%] mt-8">
            Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale.
          </p>
          <h1 class="text-[40px] leading-[110%] font-light mt-[68px] xl:mt-[158px]">
            TYLKO DLA ODWAŻNYCH
          </h1>
          <p class="xl:w-[553px] mt-4 text-white/50 text-xl leading-[120%]">
            Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV coupé, wyjątkowy,
            odważny i innowacyjny – zapewni Ci to, co najlepsze w marce CUPRA.
          </p>
          <MainButton @click="scrollToForm" variant="gray" class-name="mt-8"
            >Umów jazdę próbną</MainButton
          >
        </div>
        <div>
          <img
            class="h-[737px] w-full object-cover object-left mt-8 xl:mt-[60px]"
            src="@/assets/photo2.webp"
            alt=""
          />
          <p class="mt-8 text-white/50 leading-[143%]">Podróżuj z rozmachem bez kompromisów.</p>
        </div>
      </div>
    </div>
  </div>
</template>
