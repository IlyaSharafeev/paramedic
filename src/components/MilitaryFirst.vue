<template>
  <div class="military-first">
    <div class="military-first__content">
      <div class="military-first__content-title">
        Військові аптечки
      </div>
      <div class="military-first__content-description">
        Збираємо та відправляємо аптечки, з кожної партії частину аптечок віддаємо ЗСУ.
        З продажу аптечок – замовляємо нові
        та відправляємо 15% з кожної аптечки ЗСУ.
      </div>
    </div>
    <div class="military-first__image-wrapper">
      <div class="military-first__image-wrapper-first">
        <img class="military-first-image-second" :src="require('@/assets/military-first-rags.svg')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MilitaryFirst"
}
</script>

<style scoped>
  .military-first{
    font-family: 'Raleway', sans-serif;
    margin: 50px 5px 0 5px;
  }

  .military-first__content-title {
    font-family: 'Raleway',serif;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    text-transform: uppercase;
  }

  .military-first__content-description {
    margin-top: 20px;
  }

  .military-first__image-wrapper {
    margin-top: 40px;
  }

  .military-first__image-wrapper-first {
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    align-items: center;
    background-image: url("@/assets/military-first.svg");
    border-radius: 10px;
    min-height: 370px
  }

  .military-first-image-second {
    position: absolute;
  }

</style>