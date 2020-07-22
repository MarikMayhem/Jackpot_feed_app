<template>
  <div class="timer-shell">
    <p>
      Must drop in
      <i class="fas fa-clock"></i>
      {{ timer}}
    </p>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {
      timer: this.time
    };
  },
  props: {
    time: {
      type: String,
      default: undefined
    }
  },
  computed: {
    initTimer() {
      var [hh, mm, ss] = this.time.split(":");
      Date.prototype.addTime = function(h, m, s) {
        this.setHours(this.getHours() + h);
        this.setMinutes(this.getMinutes() + m);
        this.setSeconds(this.getSeconds() + s);
        return this;
      };
      var timer = new Date().addTime(+hh, +mm, +ss).getTime();

      function pad(n) {
        return n < 10 ? "0" + n : n;
      }

      var timeInterval = setInterval(
        function() {
          var now = new Date().getTime();

          var distance = timer - now;

          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          this.timer = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

          if (distance < 0) {
            clearInterval(timeInterval);
            return (this.timer = "00:00:00");
          }
        }.bind(this),
        1000
      );
    }
  },
  created() {
    this.initTimer;
  }
};
</script>
<style lang="scss" scoped>
.timer-shell {
  background-color: black;
  border-radius: 20px;
  padding: 3px;
  font-size: 14px;
  color: white;
}
</style>