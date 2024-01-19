<template>
  <div class="fixed left-0 right-0 top-0 bg-white z-40 xl:hidden px-4 py-[14px]">
    <div class="flex max-w-[1372px] mx-auto items-center text-font-black">
      <img class="w-[100px]" src="@/assets/cupraLogo.svg" alt="Cupra logo" />
      <button @click="emit('close')" class="ml-auto xl:hidden">
        <img class="h-[25px]" src="@/assets/cross.svg" alt="menu" />
      </button>
    </div>
    <nav class="gap-2 flex flex-col mt-2">
      <a class="hover:underline hover:[text-shadow:0px_0px_0.5px_black]" href="/samochody"
        >Samochody</a
      >
      <a class="hover:underline hover:[text-shadow:0px_0px_0.5px_black]" href="/jazda-probna"
        >Jazda próbna</a
      >
      <a class="hover:underline hover:[text-shadow:0px_0px_0.5px_black]" href="/oferta">Oferta</a>
      <a class="hover:underline hover:[text-shadow:0px_0px_0.5px_black]" href="/salony"
        >Salony Cupra</a
      >
    </nav>
    <a
      class="font-medium hover:underline hover:[text-shadow:0px_0px_0.5px_black] mt-8 block"
      href="tel:+48585066565"
      >+48 58 506 65 65</a
    >
    <div class="flex flex-col w-full items-center mt-2 gap-4">
      <MainButton variant="white" class-name="w-full">Zapytaj o ofertę</MainButton>
      <MainButton variant="black" class-name="w-full">Umów jazdę próbną</MainButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainButton from '@/components/MainButton.vue'

const emit = defineEmits(['close'])
</script>
