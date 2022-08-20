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
    overflow-y: hidden;
    font-family: 'Raleway',serif;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    text-transform: uppercase;
  }

  .military-first__content-description {
    margin-top: 20px;
    line-height: 140%;
  }

  .military-first__image-wrapper {
    margin-top: 40px;
  }

  .military-first__image-wrapper-first {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("@/assets/military-first.svg");
    border-radius: 10px;
    background-size: 100% 100%;
    min-height: 400px;
  }

  .military-first-image-second {
    position: absolute;
  }

  @media (min-width: 1024px) {
    .military-first {
      margin: 150px 20px 0 20px;
    }

    .military-first__content {
      display: flex;
      flex-direction: row;
      gap: 120px;
    }

    .military-first__content-title {
      flex: 1;
      font-size: 55px;
    }

    .military-first__content-description {
      flex: 1;
      font-size: 18px;
      margin-top: 0;
    }

    .military-first__image-wrapper {
      margin-top: 100px;
    }

    .military-first__image-wrapper-first {
      background-image: url("@/assets/background_military-first.svg");
      min-height: 480px;
    }

    .military-first-image-second {
      min-width: 483px;
    }
  }
</style>