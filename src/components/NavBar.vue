<template>
  <header class="flex max-w-[1372px] p-[18px] mx-auto px-4 bg-white items-center text-font-black">
    <img class="w-[142px]" src="@/assets/cupraLogo.svg" alt="Cupra logo" />
    <nav class="flex ml-24 gap-8">
      <a href="/samochody">Samochody</a>
      <a href="/jazda-probna">Jazda próbna</a>
      <a href="/oferta">Oferta</a>
      <a href="/salony">Salony Cupra</a>
    </nav>
    <div class="flex items-center ml-auto">
      <a class="ml-auto font-medium" href="tel:+48585066565">+48 58 506 65 65</a>
      <MainButton variant="white" class-name="ml-12">Zapytaj o ofertę</MainButton>
      <MainButton variant="black" class-name="ml-6">Zapytaj o ofertę</MainButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import MainButton from '@/components/MainButton.vue'
</script>
