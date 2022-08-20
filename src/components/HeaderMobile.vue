<template>
  <div class="header">
    <div class="header__item-logo">
      <img :src="require('@/assets/header_logo.svg')"/>
    </div>
    <div class="header__item-menu" @click="openMenu">
      <img :src="require('@/assets/header-menu.svg')"/>
    </div>
    <div class="header__item-navigation">
      <div class="header__item-navigation-item">
        <div>
          <a href="#about-product">
            Про товар
          </a>
        </div>
        <img class="header__item-navigation-item-image" :src="require('@/assets/header_hover.svg')"/>
      </div>
      <div class="header__item-navigation-item">
        <div>
          <a href="#why-us">
            Чому ми
          </a>
        </div>
        <img class="header__item-navigation-item-image" :src="require('@/assets/header_hover.svg')"/>
      </div>
      <div class="header__item-navigation-item">
        <div>
          <a href="#where-find-us">
            Де нас знайти
          </a>
        </div>
        <img class="header__item-navigation-item-image" :src="require('@/assets/header_hover.svg')"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header-Mobile",
  methods: {
    openMenu() {
      if (!document.body.classList.contains("is-sidebar-opened")) {
        document.body.classList.add("is-sidebar-opened");
      }
      if (!document.querySelector('.sidebar').classList.contains("sidebar_opened")) {
        document.querySelector('.sidebar').classList.add("sidebar_opened");
      }
    }
  }
}
</script>

<style scoped>

  @media (max-width: 1024px) {
    .header__item-navigation {
      display: none;
    }
  }

  .header{
    background-color: #F8F8F8;
    width: 100%;
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__item-logo {
    padding-left: 10px;
    cursor: pointer;
  }

  .header__item-menu {
    padding-right: 10px;
  }

  @media (min-width: 1024px) {
    .header {
      min-height: 100px;
    }

    .header__item-menu {
      display: none;
    }

    .header__item-navigation {
      display: flex;
      flex-direction: row;
      gap: 50px;
      padding-right: 100px;

      font-family: 'Raleway', 'sans-serif';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      text-transform: uppercase;
      color: #3D3B3B;
    }
    
    .header__item-navigation-item {
      cursor: pointer;
      padding-top: 20px;
      text-decoration: none;
      text-underline: none;
    }

    .header__item-navigation-item-image {
      visibility: hidden;
    }

    .header__item-navigation-item:hover > img {
      visibility: visible;
    }

    .header__item-logo {
      min-width: 180px;
      min-height: 23px;
    }

    .header__item-logo > img {
      width: 100%;
      height: 100%;
    }
  }
</style>