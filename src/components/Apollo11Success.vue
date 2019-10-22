<template>
	<section v-inview:enter="onEnter" v-inview:leave="onLeave" >
        <div class="cert">
			<h2>Congratulation!</h2>
			<h3>You had made it to the Moon!</h3>
			<div class="box">
				<h4 style="padding: 1em 0">
					<span style="font-family: cursive; font-weight: bold">Your Certificate</span>
				</h4>
				<p class="name"><span style="font-size: 3em" v-text="$store.state.name"></span></p>
				<a
					class="share"
					v-on:click="$ga.event({
						eventCategory: 'social',
						eventAction: 'share',
						eventLabel: $store.state.name
					})">
					<span>Share</span>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
	name: "apollo11Day1-1",
	inject: ['$util'],
	components: {},
	data () {
		return {
			isViewed: false
		}
	},
	methods: {
		onEnter () {
			this.$util.playAudio('onesmallstep')
			if (!this.isViewed) {
				this.$ga.event({
					eventCategory: 'page-section',
					eventAction: 'view',
					eventLabel: 'apollo11-success'
				})
				this.isViewed = true
			}

		},
		onLeave () {
			this.$util.stopAudio('onesmallstep')
		}
	},
	created() {
		AOS.init()
	}
}
</script>

<style lang="scss" scoped>
section {
	display: flex;
	background-image: url('@/../../assets/images/manonmoon.jpg');
	background-position: center;
	background-size: cover;
	background-color: black;
	color: white;

	height: 120vh;

	.cert {
		margin: auto;

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
				background-color: #999999;
				color: white;
				font-family: 'Courier New', Courier, monospace;
				font-weight: bold;
			}

			.share {
				display: block;
				padding: 2em 2em;
				background-color: black;
				color: white;
				font-weight: bold;
			}
		}
	}
}
</style>
