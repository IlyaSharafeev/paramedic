<template>
  <div class="where-find-us">
    <div class="where-find-us__content">
      <div class="where-find-us__content-title" id="where-find-us">Де нас знайти</div>
      <div class="where-find-us__content-description">
        Для того, щоб придбати наш товар, пишіть нам в <a href="https://www.instagram.com/paramedic.dp/" target="_blank">Instagram</a> або телефонуйте
        <a href="https://www.instagram.com/paramedic.dp/" target="_blank">+380506130068</a>
      </div>
    </div>
    <div class="where-find-us__video">
      <video width="100%" controls poster="@/assets/video.svg" >
        <source src="@/assets/video.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhereFindUs"
}
</script>

<style scoped>
  .where-find-us {
    margin-top: 80px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .where-find-us__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .where-find-us__content-title {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 120%;
    text-transform: uppercase;
    color: #000000;
  }

  .where-find-us__content-description {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #3D3B3B;
  }

  .where-find-us__content-description > a {
    color:  #222222;
  }

  video {
    border-radius: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  @media (min-width: 1024px) {
    .where-find-us {
      display: flex;
      flex-direction: row;
      margin: 150px 20px 0 20px;
      gap: 120px;
    }

    .where-find-us__content {
      flex: 1;
      justify-content: center;
    }

    .where-find-us__content-title {
      font-size: 55px;
    }

    .where-find-us__content-description {
      margin-top: 50px;
    }

    .where-find-us__video {
      flex: 1;
    }
  }
</style>