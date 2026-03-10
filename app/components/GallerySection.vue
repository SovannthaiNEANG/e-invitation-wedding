<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const images = [
  "/img/gallery1.jpg",
  "/img/gallery2.jpg",
  "/img/envelope.jpg",
  "/img/gallery2.jpg",
];
</script>

<template>
  <section class="gallery-slider">
    <h2 class="section-title text-center text-xxl mb-4">Gallery</h2>

    <Swiper :slides-per-view="2" :space-between="20" loop>
      <SwiperSlide v-for="img in images" :key="img">
        <img :src="img" class="slide-img" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.gallery-slider {
  padding: 120px 20px;
  background: #e8dccf;
}

.slide-img {
  width: 100%;
  height: 500px;

  object-fit: cover;
  border-radius: 20px;
}
</style>
