<template>
  <div class="container">
    <img src="@/assets/1.png" alt="daily drop" />
    <img src="@/assets/box.png" alt="daily drop" />
    <p>{{formatedAmount}}</p>
    <Timer :time="this.dropIn" />
  </div>
</template>

<script>
module.exports = {
  props: {
    dropIn: {
      type: String,
      default: undefined
    },
    amount: {
      type: String,
      default: undefined
    },
    currency: {
      type: String,
      default: undefined
    }
  },
  data: function() {
    return {
      pot: "Test"
    };
  },
  computed: {
    formatedAmount() {
      return this.currency + this.amount;
    }
  }
};
</script>

<style lang="scss" scoped>
/* CHANGE */

.container {
  margin: auto;
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