<template>
  <header class="header">
    <div class="logo">
      <div class="logo__container">
        <img
          src="../assets/icon.png"
          alt="News app logo"
          class="logo__image"
        >
      </div>
    </div>
    <nav class="nav">
      <h4 class="nav__link">
        <router-link to="/home">
          Home
        </router-link>
      </h4>
      <h4 class="nav__link">
        <router-link to="/oversea">
          Oversea
        </router-link>
      </h4>
      <h4 class="nav__link">
        <router-link to="/bbc">
          BBC News
        </router-link>
      </h4>
    </nav>
  </header>
</template>
<script>
export default {
    name: "AppHeader",
};
</script>
<style>
    .header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 95%;
    }
    .logo {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        height: 50px;
    }
    .logo__container {
        width: 50px;
        height: 50px;
    }
    .logo__image {
        margin-left: 15px;
        margin-top: 10px;
        max-width: 100%;
        max-height: 100%;
    }
    .nav {
        display: flex;
        flex-wrap: wrap;
        width: 350px;
        justify-content: space-between;
    }
</style>
