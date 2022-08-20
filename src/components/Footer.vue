<template>
  <div class="footer-mobile">
    <div class="footer-mobile__logo">
      <img :src="require('@/assets/header_logo.svg')"/>
    </div>
    <div class="footer-mobile__navigation">
      <a class="footer-mobile__navigation-item" href="#about-product">Про товар</a>
      <a class="footer-mobile__navigation-item" href="#why-us">Чому ми</a>
      <a class="footer-mobile__navigation-item" href="#where-find-us">Де нас знайти</a>
    </div>
    <div class="footer-mobile__about-us">
      Created by team
      <span class="footer-mobile__about-us--key-word">
        <a href="https://www.instagram.com/balvior_team/" target="_blank">
          Balvior
        </a>
      </span>
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
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-weight: bold;
  }

  .footer-mobile__logo {
    display: none;
  }

  .footer-mobile__navigation {
    display: flex;
    justify-content: space-between;
  }

  .footer-mobile__navigation-item {
    color: #222222;
    text-decoration: none;
    overflow-y: hidden;
  }

  .footer-mobile__about-us {
    color: #939393;
    overflow-y: hidden;
  }

  .footer-mobile__about-us--key-word {
    letter-spacing: 5px;
    padding-left: 10px;
    text-decoration: underline;
  }

  a {
    color: #222222;
  }

  @media (min-width: 1024px) {
    .footer-mobile {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 150px;
      min-height: 100px;
      box-sizing: border-box;
      align-items: center;
      font-size: 18px;
    }

    .footer-mobile__logo {
      display: flex;
      min-height: 72px;
      min-width: 180px;
      align-items: center;
    }

    .footer-mobile__logo > img {
      width: 100%;
      height: 100%;
    }

    .footer-mobile__navigation {
      gap: 50px;
    }
  }
</style>