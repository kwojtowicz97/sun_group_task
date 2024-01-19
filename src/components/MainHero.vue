<script setup lang="ts">
import MainButton from '@/components/MainButton.vue'
import { scrollToForm } from '@/utils'
</script>

<template>
  <div class="h-[884px] bg-[url('@/assets/photo1.webp')] bg-center bg-cover w-full relative">
    <div class="max-w-[1372px] px-4 mx-auto pt-[344px]">
      <div class="text-white/50 text-base md:text-xl leading-[120%]">CUPRA Fermentor</div>
      <h1 class="mt-4 text-white text-[40px] md:text-[60px] font-light leading-[107%]">
        Wejdź do świata Cupra. <br />
        Poznaj prawdziwą moc <br />
        i sportowego ducha marki.
      </h1>
      <MainButton @click="scrollToForm" variant="gray" class-name="mt-12"
        >Ruszaj na jazdę testową</MainButton
      >
    </div>
  </div>
</template>
