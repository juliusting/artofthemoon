<template>
    <canvas 
    ref='canvas'
    width='windowWidth'
    height='windowHeight'
    ></canvas>
</template>

<script>

export default {
  name: "canvas",
  data: {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  },
  components: {
  },
  methods: {
    draw: function() {}
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.$refs.canvas.getContext("2d");
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
    
    this.ctx.beginPath();
    this.ctx.strokeStyle = "black";
    this.ctx.rect(0, 0, 200, 200);
    this.ctx.stroke();


    this.ctx.beginPath();
    this.ctx.fillStyle = "#000";
    this.ctx.font = "20px Verdana";
    this.ctx.fillText("Size: " + document.body.clientWidth + ", " + document.body.clientHeight, this.canvas.width /2, 20);
    this.ctx.closePath();

    
    const bg = new Image();
    bg.src = '../assets/bg.png';
    this.ctx.drawImage(bg, 0, 0, 100, 100);
  }
};
</script>

<style scoped>
#canvas {
  position: fixed;
  top: 0;
}
</style>