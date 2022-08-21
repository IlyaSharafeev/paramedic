<template>
  <div class="about-product">
    <div class="about-product__content">
      <div class="about-product__content-title" id="about-product">
        Про товар
      </div>
      <div class="about-product__content-description">
        Аптечка військова призначена для надання екстреної медичної допомоги пораненим у випадках, коли є пряма загроза їхньому здоров'ю чи життю.
        Складається із найнеобхідніших для екстрених ситуацій медичних засобів.
        Аптечка виготовлена у компактних розмірах, не займає багато вільного місця.
        Детально продуманий внутрішній простір дозволяє зручно зберігати всі медичні засоби в спеціально відведених для цього місцях.
      </div>
    </div>
    <div class="about-product__image-wrapper">
      <div class="about-product__image">
        <img :src="require('@/assets/AboutProductFirst.svg')"/>
      </div>
      <div class="about-product__image-wrapper-slider">
        <Slider />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
export default {
  name: "AboutProduct",
  components: {Slider},
}
</script>

<style scoped>
  .about-product {
    margin: 70px 5px 0 5px;
  }

  .about-product__content-title {
    overflow-y: hidden;
    font-family: 'Raleway',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    text-transform: uppercase;
  }

  .about-product__content-description {
    margin-top: 26px;
    font-family: 'Raleway',serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
  }

  .about-product__image-wrapper {
    width: 100%;
    margin-top: 45px;
  }

  .about-product__image-wrapper > img {
    width: 100%;
  }

  .about-product__image {
    margin-top: 20px;
  }

  .about-product__image > img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    .about-product {
      margin: 150px 20px 0 20px;
    }

    .about-product__content-title {
      font-size: 55px;
    }

    .about-product__content-description {
      margin-top: 50px;
    }

    .about-product__image-wrapper {
      flex: 1;
    }

    .about-product__image {
      max-width: 50%;
      margin: 0 auto;
    }
  }
</style>
