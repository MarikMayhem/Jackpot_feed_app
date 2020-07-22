<template>
  <div class="container">
    <img class="mediumpot-image" :src="require(`@/assets/${imageType}.png`)" alt="daily drop" />
    <div class="container-amount">
      <animated-number
        class="amount"
        :value="this.amount"
        :formatValue="formatToPrice"
        :duration="2000"
      />
      <Timer id="timer" v-if="this.dropIn" :time="this.dropIn" />
    </div>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    AnimatedNumber
  },
  data: function() {
    return {
      pot: "Medium Pot",
      ammount: 23424
    };
  },
  props: {
    imageType: {
      type: String,
      default: undefined
    },
    dropIn: {
      type: String,
      required: false
    },
    currency: {
      type: String,
      default: undefined
    },
    amount: {
      type: Number,
      default: undefined
    }
  },
  methods: {
    formatToPrice(value) {
      return `${this.currency}${value.toLocaleString("en")}`;
    }
  }
};
</script>

<style scoped>
#timer {
  padding: 3px 4px;
  font-size: 12px;
}
.container {
  background-image: url("../../assets/stars.png"),
    radial-gradient(
      ellipse at center,
      rgba(7, 23, 25, 0.5) 50%,
      rgba(42, 48, 105, 0.7) 100%
    );
  background-repeat: repeat;
  background-position: center;
  margin: auto;
  display: flex;
  margin: 12px 0;
  padding: 14px 3px;
}
.container-amount {
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-self: center;
}
.mediumpot-image {
  height: 80%;
  width: 35%;
  margin-right: 20px;
  margin-left: 5px;
}

.amount {
  font-family: bambi sans-serif;
  font-weight: bold;
  align-self: center;
  font-size: 30px;
  align-self: self-end;
  background: -webkit-linear-gradient(#fcff9e, #e29624);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  font-size: 2em;
  text-align: center;
}
</style>