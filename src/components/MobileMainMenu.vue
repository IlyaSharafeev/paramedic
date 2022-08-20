<template>
  <div class="mobile-main-menu">
    <div class="mobile-main-menu__header">
      <img :src="require('@/assets/header_logo.svg')" />
      <img :src="require('@/assets/closeButton.svg')" @click="closeMenu" />
    </div>
    <div class="mobile-main-menu__content">
      <a class="mobile-main-menu__content-item" href="#about-product" @click="closeMenu">Про товар</a>
      <a class="mobile-main-menu__content-item" href="#why-us" @click="closeMenu">Чому ми</a>
      <a class="mobile-main-menu__content-item" href="#where-find-us" @click="closeMenu">Де нас знайти</a>
    </div>
    <div class="mobile-main-menu__footer">
      <a class="mobile-main-menu__footer-item" href="https://www.instagram.com/paramedic.dp/">Instagram</a>
      <div class="mobile-main-menu__footer-item">+380 (95) 693-75-79</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMainMenu",
  methods: {
    closeMenu() {
      if (document.body.classList.contains("is-sidebar-opened")) {
        document.body.classList.remove("is-sidebar-opened");
      }
      if (document.querySelector('.sidebar').classList.contains("sidebar_opened")) {
        document.querySelector('.sidebar').classList.remove("sidebar_opened");
      }
    }
  }
};
</script>

<style scoped>
  .mobile-main-menu {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 10px;
  }

  .mobile-main-menu__header {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
  }

  .mobile-main-menu__content {
    display: flex;
    gap: 20px;
    flex-direction: column;
    text-align: center;
  }

  .mobile-main-menu__content-item {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    color: #3D3B3B;
    text-decoration: none;
  }

  .mobile-main-menu__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 25px;
  }

  .mobile-main-menu__footer-item {
    display: flex;
    font-family: 'Raleway', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 140%;
    color: #3D3B3B;
  }
</style>
