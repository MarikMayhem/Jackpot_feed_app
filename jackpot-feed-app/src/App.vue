<template>
  <div id="app">
    <BigPot />
    <MediumPot />
    <MediumPot />
  </div>
</template>

<script>
import BigPot from "./components/BigPot/BigPot.vue";
import MediumPot from "./components/MediumPot/MediumPot.vue";

export default {
  name: "App",
  components: {
    BigPot,
    MediumPot
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
