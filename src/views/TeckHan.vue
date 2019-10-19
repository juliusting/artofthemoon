<template>
	<div>
		<!--
		<div v-text="canvas.width">Width: {{ canvas.width }}</div>
		<div v-text="canvas.height">height: {{  }}</div>
		<canvas ref="canvas" :width="canvas.width" :height="canvas.height"></canvas>
		-->
		<v-stage :config="canvas">
			<v-layer>
				<v-image :config="configImage"></v-image>
			</v-layer>
		</v-stage>
	</div>
</template>

<script>
import { throttle } from 'lodash'

const bg = new Image();
bg.src = require('../assets/3.4.earth.png');
let a = require('../assets/3.4.earth.png')

export default {
	name: "teckhan",
	components: {},
	data () {
		return {
			canvas: {
				width: 0,
				height: 0
			},
			configCircle: {
				x: 100,
				y: 100,
				radius: 70,
				fill: "red",
				stroke: "black",
				strokeWidth: 4
			},
			configImage: {
				image: null
			}
		}
	},
	methods: {
		resizeCanvas: throttle(function () {
			this.canvas.width = window.innerWidth
			this.canvas.height = window.innerHeight
			this.configImage.width = this.canvas.width
			this.configImage.height = this.canvas.height
		}, 300, { leading: true, trailing: true })
	},
	mounted() {
		this.canvas.body = this.$refs.canvas
		window.addEventListener('resize', this.resizeCanvas)
		this.resizeCanvas()

		const image = new window.Image();
		image.src = 'https://storage.cloud.google.com/artofthemoon/3.4.earth-min.png'
		image.onload = _ => {
			this.configImage.image = image;
		}
	},
	destroyed () {
		window.removeEventListener('resize', this.resizeCanvas)
	}
}
</script>

<style scoped>
#canvas {
	position: fixed;
	top: 0;
}
</style>
