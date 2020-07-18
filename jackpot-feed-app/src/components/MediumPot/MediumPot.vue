<template>
  <div class="container">
    <img :src="require(`@/assets/${imageType}.png`)" alt="daily drop" />
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      pot: "Medium Pot"
    };
  },
  props: {
    imageType: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.container {
  background: url("../../assets/stars.png");
  background-repeat: no-repeat;
}
p {
  font-size: 2em;
  text-align: center;
}
</style>