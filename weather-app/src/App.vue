<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-view />
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
    name: "App",
    components: {
        HelloWorld
    }
};
</script>
<style>
    html,
    #app {
        min-height: 100vh;
        min-width: 100vw;
    }
</style>
