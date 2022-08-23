<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="slide in slides" :key="slide">
      <div class="slide">
        <div class="slide__content">
          {{slide.content}}
        </div>
        <div class="slide__image">
          <img :src="require(`@/assets/slider-image/slide-image${slide.image}.svg`)"/>
        </div>
        <div class="slide__counter">
          {{slide.counter}}
        </div>
      </div>
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
        transition: 500,
        itemsToShow: 1,
      },
      breakpoints: {
        1024: {
          autoplay: 5000,
          // wrapAround: false,
          // touchDrag: false,
          itemsToShow: 1,
        },
        320: {
          autoplay: 5000,
          itemsToShow: 1,
        }
      },
      slides: [
        {
          content: 'Турнікет кровоспинний— це сучасний джут кровоспинний, призначений для зупинки кровотечі при пораненнях артерій та втраті крові.',
          counter: '2 шт.',
          image: 1,
        },
        {
          content: 'Гемостатичний бинт KlotPad це військова кровоспинна пов’язка високої концентрації на основі каоліну, розміри 7,5 см х 3,7 м.',
          counter: '1 шт.',
          image: 2,
        },
        {
          content: 'Компресійний бандаж 4-6 дюймів (США) — це стерильна компресійна пов`язка з поглинаючою подушкою, пришитою до одного з її кінців.',
          counter: '1 шт.',
          image: 3,
        },
        {
          content: 'Бинт марльовий широкий нестерильний — призначений для фіксації та накладання пов`язок, бандажів.',
          counter: '1 шт.',
          image: 4,
        },
        {
          content: 'Назофарингеальний повітропровід (розмір 28 Fr або З0 Fr) — призначений для відновлення прохідності дихальних шляхів.',
          counter: '1 шт.',
          image: 5,
        },
        {
          content: 'Оклюзійний пластир із клапаном Rhino Rescue —спеціальний пластир для закриття ран в грудній клітині.',
          counter: '2 шт.',
          image: 6,
        },
        {
          content: 'Нітрилові рукавички —забезпечують значно більш кращий захист, чим латекс. Стійкість нітрилу до проколів і міцність на розтяг також значно вище, ніж у латексу та інших плівок ',
          counter: '2 пари',
          image: 7,
        },
        {
          content: 'Лейкопластир у рулоні — тканий матеріал з натуральної бавовни покритий сучасним гіпоалергенним клеєм. Пластир надійно фіксує пов`язки, компреси.',
          counter: '1 шт.',
          image: 8,
        },
        {
          content: 'Рятувальна ковдра — термоізолююче покривало створене для захисту від перегріву або переохолодження. Зроблено з полімерної плівки, покритої металізованим матеріалом, \n' +
              'що відображає.',
          counter: '1 шт.',
          image: 9,
        },
        {
          content: 'Перманентний маркер — призначений для нанесення стійких написів на будь-якій поверхні. Має підвищену світлостійкість. Напис стійкий до впливу вологи, стирання, атмосферного впливу.',
          counter: '1 шт.',
          image: 10,
        },
        {
          content: 'Тактичні ножиці — застосовують для розрізання одягу, коли потрібно звільнити доступ до рани, а також для різання бинтів, перев`язок і інших матеріалів.',
          counter: '1 шт.',
          image: 11,
        },
        {
          content: 'Декомпресійна голка — призначений для боротьби із напруженим пневмотораксом. У прозорій стерильній упаковці знаходиться голка з катетером, довжина та діаметр яких відповідають рекомендаціям комітету ТССС.',
          counter: '1 шт.',
          image: 12,
        },
      ]
    }
  }
};
</script>

<style>
  .slide {
    background: #F8F8F8;
    width: 480px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    border-radius: 5%;
  }

  .slide__content {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    color: #3D3B3B;
    text-align: start;
  }

  .slide__image {
    min-width: 200px;
    height: 150px;
  }

  .slide__image > img {
    width: 100%;
    height: 100%;
  }

  .slide__counter {
    text-align: start;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #827E7E;
  }

</style>
