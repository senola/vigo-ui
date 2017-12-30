<template>
  <p>hello world</p>
</template>

<script>
  import Components from './components';
  require('./styles');

  export default {
      name: 'app',
      components: {
          Bubby: Components.Background.Bubby,
          Matrix: Components.Background.Matrix,
          StarField01: Components.Background.StarField.StarField1,
          StarField02: Components.Background.StarField.StarField2
      }
  };
</script>
