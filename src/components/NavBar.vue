<template>
  <header
    class="flex max-w-[1372px] py-[14px] xl:py-[18px] mx-auto px-4 z-50 items-center text-font-black"
  >
    <img class="xl:w-[142px] w-[100px]" src="@/assets/cupraLogo.svg" alt="Cupra logo" />
    <nav class="ml-24 gap-8 hidden xl:flex">
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
    <div class="items-center ml-auto hidden xl:flex">
      <a
        class="ml-auto font-medium hover:underline hover:[text-shadow:0px_0px_0.5px_black]"
        href="tel:+48585066565"
        >+48 58 506 65 65</a
      >
      <MainButton variant="white" class-name="ml-12">Zapytaj o ofertę</MainButton>
      <MainButton variant="black" class-name="ml-6">Umów jazdę próbną</MainButton>
    </div>
    <button @click="isMenuOpen = true" class="ml-auto xl:hidden">
      <img class="h-[25px]" src="@/assets/hamburger.svg" alt="menu" />
    </button>
  </header>
  <Transition>
    <MobileMenu @close="isMenuOpen = false" v-if="isMenuOpen" />
  </Transition>
</template>

<script setup lang="ts">
import MainButton from '@/components/MainButton.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
}
</style>
