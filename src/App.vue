<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import MainHero from '@/components/MainHero.vue'
import FirstSection from '@/components/FirstSection.vue'
import SecondSection from '@/components/SecondSection.vue'
import CarsCarousel from '@/components/CarsCarousel.vue'
import ContactForm from '@/components/ContactForm.vue'
import BottomFooter from './components/BottomFooter.vue'
</script>

<template>
  <div class="font-montserrat bg-[#F5F5F5]">
    <Navbar />
    <MainHero />
    <FirstSection />
    <CarsCarousel />
    <SecondSection />
    <ContactForm />
    <BottomFooter />
  </div>
</template>
