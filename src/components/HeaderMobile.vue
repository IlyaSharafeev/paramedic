<template>
  <div class="header">
    <div class="header__item-logo">
      <img :src="require('@/assets/header_logo.svg')"/>
    </div>
    <div class="header__item-menu">
      <img :src="require('@/assets/header-menu.svg')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header-Mobile"
}
</script>

<style scoped>
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
  }

  .header__item-menu {
    padding-right: 10px;
  }
</style>