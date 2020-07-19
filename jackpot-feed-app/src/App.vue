<template>
  <div id="app">
    <div class="content-container">
      <BigPot :amount="bigPot.amount" :currency="bigPot.currency" :dropIn="bigPot.must_drop_in" />
      <MediumPot
        v-for="(pots, idx) in mediumPots"
        :amount="pots.amount"
        :currency="pots.currency"
        :dropIn="pots.must_drop_in"
        :imageType="pots.imageType"
        :key="idx"
      />
    </div>
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
      bigPot: {},
      mediumPots: []
    };
  },
  created: function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data =>
        data.pots.forEach(element =>
          element.type === "big"
            ? (this.bigPot = element)
            : this.mediumPots.push(element)
        )
      );
  }
};
</script>

<style>
html,
body {
  padding: 0;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  background-image: url("./assets/bg.png");
  height: 100vh;
  background-position: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content-container {
  width: 20%;
  min-width: 150px;
  max-width: 300px;
  height: 100%;
  min-height: 320px;
  margin: auto;
}
</style>
