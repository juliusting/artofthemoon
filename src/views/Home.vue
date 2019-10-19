<template>
	<div>
		<canvas ref="canvas" width="windowWidth" height="windowHeight"></canvas>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: "teckhan",
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
			this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
			this.ctx.drawImage(bg, window.innerWidth/2 - 250, window.innerHeight/2 - 250, 500, 500);


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
