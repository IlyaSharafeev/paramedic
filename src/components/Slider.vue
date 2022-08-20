<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="slide in 2" :key="slide">
      <img :src="require('@/assets/header_logo.svg')"/>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'SliderCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      settings: {
        wrapAround: true,
        snapAlign: "left",
        transition: 1000,
        autoplay: 2000,
        itemsToShow: 1,
      },
      breakpoints: {
        1024: {
          autoplay: 2000,
          // wrapAround: false,
          // touchDrag: false,
          itemsToShow: 2,
        },
        320: {
          autoplay: 0,
          itemsToShow: 1,
        }
      },
    }
  }
};
</script>
