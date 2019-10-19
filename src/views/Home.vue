<template>
  <div>
    <canvas ref="canvas" width="windowWidth" height="windowHeight"></canvas>
    <div class="content">
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
      <p class="right-side">hello!</p>
    </div>
  </div>
</template>

<script>
const bg = new Image();
bg.src = require("../assets/3.4.earth-min.png");

export default {
  name: "canvas",
  data: {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  },
  components: {},
  methods: {
    draw: function() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      this.ctx.drawImage(
        bg,
        window.innerWidth / 2 - 250,
        window.innerHeight / 2 - 250,
        500,
        500
      );

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
canvas {
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  z-index: -3;
}

p {
  color:white;
  font-size:2em;
}
</style>