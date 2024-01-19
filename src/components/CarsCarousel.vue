<template>
  <div class="w-full relative bg-[#F5F5F5]">
    <carousel :items-to-show="1" :wrap-around="true" :breakpoints="{ 900: { itemsToShow: 1.7 } }">
      <slide v-for="car in cars" :key="car.name">
        <CarouselItem
          :name="car.name"
          :gross="car.gross"
          :description="car.description"
          :monthly="car.monthly"
          :img="car.img"
        />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import CarouselItem from '@/components/CarouselItem.vue'
import { cars } from '@/cars'
</script>

<style>
.carousel__item {
  border: 1px solid red;
  min-height: 200px;
  background-color: red;
  color: green;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  filter: opacity(0.3);
}

.carousel__prev,
.carousel__next {
  width: 50px;
  height: 50px;
}

.carousel__prev {
  left: 20%;
}

.carousel__icon {
  background-color: white;
}

@media (max-width: 900px) {
  .carousel__prev {
    left: 20px;
  }
}

.carousel__next {
  right: 20%;
}

@media (max-width: 900px) {
  .carousel__next {
    right: 20px;
  }
}

.carousel__slide--active {
  filter: opacity(1);
}
</style>
