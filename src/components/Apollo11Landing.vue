<template>
	<section>
        <canvas ref="canvas" width="windowWidth" height="windowHeight"></canvas>
        <div class="content">
        <div class="container1">
            <div class="video">
            <video autoplay="" muted="" loop="" id="mVideo" style="display:block;margin:auto" width="100%" height="100%">
                <source src="@/assets/moon.mp4" type="video/mp4">
            </video>
            <div class="video-desc">
                <div class="title">
                <p class="BigTitle">The Art of Moon!</p>
                <div class="desc">
                    <p>Based on real mission </p>
                    <p>of </p>
                    <p>Apollo 11 in 1969</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="c1">
            <p class="earth">This is the Earth</p>
        </div>
        <div>
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
	</section>
</template>

<script>
const bg = new Image();
bg.src = require("../assets/3.4.earth-min.png");

export default {
  name: "apollo11Landing",
  data () {
      return {
           windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
      }
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

<style lang="scss" scoped>
section {
	background-color: black;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  z-index: -3;
}

p {
  color:white;
  font-size:2em;
  margin: 0.5em 0em 0em 0em;
}

.container1 {
  padding: 0.01em 16px;
}
.c1 {
  font-size: 10px;
  margin: 17em 52em 0em 0em;
  background-image: url(/assets/presidentspeech.png);
  z-index: 3;
}

.BigTitle {
  font-size: 8em;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 10% 10% 0% 10%;
}

.desc {
  font-size: 0.8em;
  font-family: 'Courier New', Courier, monospace;
  height: 17em;
}

.video {
  background-color: black;
}

.video-desc {
  position: absolute;
  top: 50%;
  left: 16%;
  margin: -20em 0em 0em 0em;
}
</style>
