<template>
  <div class="footer-mobile">
    <div class="footer-mobile__navigation">
      <div class="footer-mobile__navigation-item">Про товар</div>
      <div class="footer-mobile__navigation-item">Чому ми</div>
      <div class="footer-mobile__navigation-item">Де нас знайти</div>
    </div>
    <div class="footer-mobile__about-us">
      Created by team   <span class="footer-mobile__about-us--key-word">Balvior</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMobile"
}
</script>

<style scoped>
  .footer-mobile {
    margin-top: 80px;
    background-color: #F8F8F8;
    padding: 20px 10px;
    font-family: 'Aeroport', sans-serif;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-weight: bold;
  }

  .footer-mobile__navigation {
    display: flex;
    justify-content: space-between;
  }

  .footer-mobile__about-us {
    color: #939393;
  }

  .footer-mobile__about-us--key-word {
    letter-spacing: 5px;
    padding-left: 10px;
    text-decoration: underline;
  }
</style>