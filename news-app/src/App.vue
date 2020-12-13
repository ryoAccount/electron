<template>
    <div id="app">
        <app-header />
        <router-view />
    </div>
</template>
<script>
    import appHeader from "@/components/Header.vue";
    export default {
        name: "layout",
        components: {
            appHeader,
        },
    };
</script>
<style>
    @import url("https://fonts.googleapis.com/css2?family=Abel&family=Staatliches&display=swap");
    html,
    #app {
        min-height: 100vh;
    }
    #app {
        font-family: "Abel", sans-serif, monospace;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #dfefff;
        background-color: #131415;
    }
    #app h1 {
        font-family: "Staatliches", cursive;
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
