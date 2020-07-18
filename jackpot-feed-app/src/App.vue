<template>
  <div id="app">
    <p>{{pot}}</p>
    <BigPot />
    <MediumPot v-for="type in imageType" :imageType="type" :key="type" />
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
  },
  data() {
    return {
      imageType: ["hourly_drop", "super_drop"]
    };
  }
};
</script>

<style>
#app {
  background-image: url("./assets/bg.png");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
