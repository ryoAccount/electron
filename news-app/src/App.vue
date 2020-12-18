<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>
<script>
import appHeader from "@/components/Header.vue";
export default {
    name: "Layout",
    components: {
        appHeader,
    },
};
</script>
<style>
    html,
    #app {
        min-height: 100vh;
    }
    #app {
        font-family: sans-serif, monospace;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #dfefff;
        background-color: #131415;
    }
    #app h1 {
        font-family: sans-serif, cursive;
    }
    a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    a.router-link-exact-active {
        color: #42b983;
    }
</style>
