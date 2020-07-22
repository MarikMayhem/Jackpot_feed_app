<template>
  <div class="container">
    <img src="@/assets/1.png" alt="daily drop" />
    <div class="money-container">
      <animated-number
        class="amount"
        :value="bigPot.amount"
        :formatValue="formatToPrice"
        :duration="2000"
      />
    </div>
    <Timer class="timer" :time="bigPot.must_drop_in" v-if="bigPot.must_drop_in" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    AnimatedNumber
  },
  data: function() {
    return {
      pot: "Test"
    };
  },
  computed: {
    ...mapGetters(["bigPot"]),
    formatValue() {
      return this.bigPot.amount.toLocaleString("en");
    }
  },
  methods: {
    formatToPrice(value) {
      return `${this.bigPot.currency}${value.toLocaleString("en")}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto 11px 0;
  padding-bottom: 17px;
  background: radial-gradient(
    ellipse at center,
    rgba(23, 33, 38, 0.2) 63%,
    rgba(42, 48, 105, 0.5) 100%
  );
}
.money-container {
  background: url("../../assets/box.png");
  background-position: center;
  height: 4em;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
}

.amount {
  font-family: bambi sans-serif;
  font-weight: bold;
  width: 100%;
  font-size: 45px;
  background: -webkit-linear-gradient(#fcff9e, #e29624);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.timer {
  width: 70%;
  margin: 25px auto 9px;
}

img {
  margin: auto;
  display: block;
  width: 100%;
}

p {
  font-size: 2em;
  text-align: center;
}
</style>