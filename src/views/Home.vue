<template>
  <canvas ref="canvas" width="windowWidth" height="windowHeight"></canvas>
</template>

<script>
const bg = new Image();
bg.src = require('../assets/logo.png');

export default {
  name: "canvas",
  data: {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  },
  components: {},
  methods: {
    draw: function() {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      this.ctx.drawImage(bg, 0, 0, window.innerWidth, window.innerHeight);

      // accurate
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000";
      this.ctx.font = "20px Verdana";
      this.ctx.fillText("Size: " + window.innerWidth + ", " + window.innerHeight,
        this.canvas.width / 2,
        100
      );
      this.ctx.closePath();
      requestAnimationFrame(this.draw);
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.$refs.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.ctx.beginPath();
    this.ctx.strokeStyle = "black";
    this.ctx.rect(0, 0, 200, 200);
    this.ctx.stroke();
    this.draw();
  }
};
</script>

<style scoped>
#canvas {
  position: fixed;
  top: 0;
}
</style>