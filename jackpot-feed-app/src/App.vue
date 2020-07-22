<template>
  <div id="app">
    <div class="content-container">
      <BigPot />
      <MediumPot
        v-for="(pots, idx) in mediumPots"
        :amount="Number(pots.amount)"
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    BigPot,
    MediumPot
  },
  data() {
    return {
      timer: ""
    };
  },
  methods: {
    ...mapActions(["fetchPots", "incrementBigPot", "incrementMediumPots"]),
    initCount() {
      setInterval(
        function() {
          this.incrementBigPot();
          this.incrementMediumPots();
        }.bind(this),
        30000
      );
    }
  },
  computed: mapGetters(["mediumPots"]),
  created: function() {
    this.fetchPots();
    this.initCount();
  }
};
</script>

<style>
@font-face {
  font-family: "bambi";
  src: url("./assets/fonts/x_bambi.ttf") format("ttf");
}
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.content-container {
  width: 20%;
  min-width: 150px;
  max-width: 300px;
  height: 100%;
  min-height: 320px;
  margin: auto;
  background: radial-gradient(
    ellipse at center,
    rgba(23, 33, 38, 0.2) 39%,
    rgba(42, 48, 105, 0.4) 100%
  );
  height: fit-content;
  padding: 9px 0;
  border-radius: 12px;
}

/* Tablet */
@media only screen and (max-width: 1200px) {
  .content-container {
    width: 60%;
  }
}

/* Mobile */
@media only screen and (max-width: 700px) {
  .content-container {
    width: 90%;
  }
}
</style>
