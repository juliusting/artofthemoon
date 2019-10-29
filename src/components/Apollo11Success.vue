<template>
	<section v-inview:enter="onEnter" v-inview:leave="onLeave" >
        <div class="wrapper">
			<h2>Congratulation!</h2>
			<h3>You had made it to the Moon!</h3>

			<div class="certificate" data-aos="flip-down">
				<h4><span style="font-size: 7em">🎉</span></h4>

				<b style="font-size: 1.3em; text-decoration: underline">Your Certificate</b>
				<p
					class="name"
					data-aos="fade-up"
					data-aos-delay="300"
					data-aos-duration="10000"
					v-text="$store.state.name">
				</p>

				<social-sharing
					:url="url_full_current"
					title="Story of Apollo 11"
					description="Interactive Story of Apollo 11 with sound"
					hashtags="nasa,spaceappchallenge,hackathon,inspiration,story,blind,interactive,sound,voice"
					twitter-user="Story of Apollo 11"
					inline-template>
					<div>
						<network network="facebook">
							<a
								class="share"
								data-aos="zoom-out"
								data-aos-delay="300"
								v-on:click="$ga.event({
									eventCategory: 'social',
									eventAction: 'share-facebook',
									eventLabel: $store.state.name
								})">
								Facebook
							</a>
						</network>
						<network network="linkedin">
							<a
								class="share"
								data-aos="zoom-out"
								data-aos-delay="300"
								v-on:click="$ga.event({
									eventCategory: 'social',
									eventAction: 'share-linkedin',
									eventLabel: $store.state.name
								})">
								linkedin
							</a>
						</network>
						<network network="twitter">
							<a
								class="share"
								data-aos="zoom-out"
								data-aos-delay="300"
								v-on:click="$ga.event({
									eventCategory: 'social',
									eventAction: 'share-twitter',
									eventLabel: $store.state.name
								})">
								Twitter
							</a>
						</network>
					</div>
				</social-sharing>
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
			isViewed: false,
			url_full_current: window.location.href
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

		console.log(this.url_full_current)
	}
}
</script>

<style lang="scss" scoped>
section {
	display: flex;
	background-image: linear-gradient(rgba(0, 0, 0, .5), black), url('@/../../assets/images/manonmoon.jpg');
	background-position: center;
	background-size: cover;
	background-color: black;
	color: white;

	height: auto !important;
	min-height: 120vh;

	.wrapper {
		margin: auto;

		h2,
		h3 {
			text-shadow: .1em .1em black;
			word-break: break-all;
		}

		h2 { font-size: 8em; font-size: 10vw; font-weight: bold; margin: 0 }
		h3 { font-size: 2em; font-size: 5vw; font-weight: 600; font-family: 'Courier New', Courier, monospace }

		.certificate {
			margin: 2em auto;
			padding: 2em 2em;
			max-width: 25em;
			background-color: white;
			background-image: linear-gradient(#c4e0e5, #4ca1af);
			color: black;
			border-radius: .5em;
			box-shadow: 0 0 1em rgba(0, 0, 0, 1);

			.name {
				padding: 0 1em 1em;
			}

			/deep/ a {
				display: inline-block;
				padding: .5em 1em;
				border: .3em solid black;
				text-decoration: none;
				font-weight: bold;
				font-size: 1.5em;
				color: black;
				user-select: none;
				cursor: pointer;
				min-width: 5em;
				text-transform: uppercase;
			}

			/deep/ span:not(:first-of-type) {
				display: block;
				margin-top: 1em;
			}
		}
	}
}
</style>
