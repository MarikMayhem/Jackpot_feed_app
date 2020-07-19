<template>
  <div class="timer-shell">
    <p>Must drop in {{timer}}</p>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {
      timee: "22"
    };
  },
  props: {
    time: {
      type: String,
      default: undefined
    }
  },
  computed: {
    timer() {
      // return this.time;
      return this.time;
    }
  }
};
</script>
<style lang="scss" scoped>
.timer-shell {
  background-color: black;
  border-radius: 20px;
  padding: 3px;
  width: 60%;
  margin: 20px auto;
  p {
    font-size: 14px;
    color: white;
  }
}
</style>