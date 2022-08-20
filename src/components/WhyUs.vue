<template>
  <div class="why-us">
    <div class="why-us__title" id="why-us">
      Чому ми
    </div>
    <div class="why-us__facts">

      <div class="why-us__facts-item">
        <div class="why-us__facts-item-icon"></div>
        <div class="why-us__facts-item-fact">
          Зібрали та відправили
          на фронт майже 300 аптечок
        </div>
      </div>

      <div class="why-us__facts-item">
        <div class="why-us__facts-item-icon"></div>
        <div class="why-us__facts-item-fact">
          Правильне та повне наповнення аптечки
        </div>
      </div>

      <div class="why-us__facts-item">
        <div class="why-us__facts-item-icon"></div>
        <div class="why-us__facts-item-fact">
          Якість, за яку ми ручаємося
        </div>
      </div>

    </div>
    <div class="why-us__facts--desktop">

      <div class="why-us__facts-item--row">
        <div class="why-us__facts-item">
          <div class="why-us__facts-item-icon"></div>
          <div class="why-us__facts-item-fact">
            Зібрали та відправили
            на фронт майже 300 аптечок
          </div>
        </div>

        <div class="why-us__facts-item">
          <div class="why-us__facts-item-icon"></div>
          <div class="why-us__facts-item-fact">
            Правильне та повне наповнення аптечки
          </div>
        </div>
      </div>

      <div class="why-us__facts-item">
        <div class="why-us__facts-item-icon"></div>
        <div class="why-us__facts-item-fact">
          Якість, за яку ми ручаємося
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "WhyUs"
}
</script>

<style scoped>
  .why-us {
    margin-top: 80px;
    padding: 60px 10px;
    background: #F8F8F8;
  }

  .why-us__title {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 120%;
    text-transform: uppercase;
  }

  .why-us__facts {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .why-us__facts-item {
    display: flex;
    margin: 0 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .why-us__facts-item-icon {
    display: flex;
    flex: 1;
    max-width: 20px;
    height: 0;
    border: 2px solid #005BBB;
  }

  .why-us__facts-item-fact {
    display: flex;
    flex: 10;
    font-family: 'Raleway', 'sans-serif';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #3D3B3B;
  }

  .why-us__facts--desktop {
    display: none;
  }

  @media (min-width: 1024px) {
    .why-us {
      margin-top: 150px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .why-us__title {
      font-size: 55px;
    }

    .why-us__facts-item {
      font-size: 18px;
    }

    .why-us__facts-item--row {
      display: flex;
      margin-top: 50px;
      justify-content: space-between;
      margin-bottom: 40px;
      gap: 110px;
    }

    .why-us__facts {
      display: none;
    }

    .why-us__facts--desktop {
      display: block;
    }
  }
</style>