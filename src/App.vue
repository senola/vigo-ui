<template>
  <Bubby theme="theme1"></Bubby>
</template>

<script>
  import Components from './components';
  export default {
      name: 'app',
      components: {
          Bubby: Components.Background.Bubby
      }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
