<template>
	<section>
        <div class="cert">
			<h2>Congratulation!</h2>
			<h3>You had made it to the Moon!</h3>
			<div class="box">
				<h4 style="padding: 1em 0">
					<span style="font-family: cursive; font-weight: bold">Your Certificate</span>
				</h4>
				<p class="name"><span style="font-size: 3em">Neil Armstrong</span></p>
			</div>
		</div>
	</section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
	name: "apollo11Day1-1",
	components: {},
	data () {
		return {
		}
	},
	methods: {
	},
	created() {
		AOS.init()
	}
}
</script>

<style lang="scss" scoped>
section {
	background-image: url('@/../../assets/manonmoon.jpg');
	background-position: center;
	background-size: cover;
	background-color: black;
	color: white;

	.cert {
		h2,
		h3 {
			text-shadow: .1em .1em black;
		}

		h2 { font-size: 8em; font-weight: bold; margin: 0 }
		h3 { font-size: 2em; font-weight: 600; font-family: 'Courier New', Courier, monospace }

		.box {
			background-color: rgba(255, 255, 255, 1);
			color: #414141;
			display: inline-block;
			border-radius: 1em;
			overflow: hidden;
			box-shadow: 0 0 .5em .5em rgba(0, 0, 0, .25);
			min-width: 30%;

			h4, .name {
				margin: 1em 0 0
			}

			.name {
				padding: 5em 2em;
				background-color: #414141;
				color: white;
				font-family: 'Courier New', Courier, monospace;
				font-weight: bold;
			}
		}
	}
}
</style>
