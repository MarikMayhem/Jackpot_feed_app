<template>
  <div class="container">
    <img class="mediumpot-image" :src="require(`@/assets/${imageType}.png`)" alt="daily drop" />
    <p class="amount">{{formatedAmount}}</p>
    <Timer v-if="this.dropIn" :time="this.dropIn" />
  </div>
</template>

<script>
module.exports = {
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
      type: String,
      default: undefined
    }
  },
  computed: {
    timer() {
      //TODO CREATE TIMER
      return this.dropIn;
    },
    formatedAmount() {
      return this.currency + this.amount;
    }
  }
};
</script>

<style scoped>
.container {
  /* background: url("../../assets/stars.png");
  background-repeat: no-repeat; */
  margin: auto;
  display: flex;
}
.mediumpot-image {
  margin-right: left;
}
.amount {
  color: yellow;
}
p {
  font-size: 2em;
  text-align: center;
}
</style>