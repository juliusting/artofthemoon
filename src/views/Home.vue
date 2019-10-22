<template>
	<main>
		<section ref="starfield">
			<div class="menu">
				<h1>Stories</h1>
				<div class="desc">
					For full experience, please allow access to device microphone.
					<p>And we recommend using desktop browser!</p>
				</div>

				<div
					class="links"
					v-for="(story, index) in stories"
					:key="story.name">
					<router-link
						:tabindex="index+1"
						tag="a"
						:to="story.route"
						v-text="story.name"
						data-aos="zoom-out">
					</router-link>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import Starfield from '@/assets/scripts/startfield'

export default {
	name: "home",
	data () {
		return {
			stories: [
				{ name: 'Apollo 11', route: '/apollo11' }
			]
		}
	},
	methods: {
		getMedia: async (constraints) => {
			let stream = null

			try {
				stream = await navigator.mediaDevices.getUserMedia(constraints)
				/* use the stream */
			} catch(err) {
				/* handle the error */
			}
		}
	},
	mounted () {
		let starfield = new Starfield()

		starfield.initialise(this.$refs.starfield)
		starfield.start()

		this.getMedia({ audio: true })
	},
	created () {
		this.$ga.page('/')
	}
}
</script>

<style lang="scss" scoped>
main {
	background-color: black;
	color: white;

	section {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100vh;

		/deep/ canvas {
			position: absolute;
			top: 0;
			height: 100%;
			width: 100%;
			z-index: 0;
		}

		.menu {
			z-index: 1;
			margin: auto;

			h1 {
				text-transform: uppercase;
				font-size: 3em;
			}

			.desc {
				margin: auto auto 2em;
				max-width: 10em;
				font-size: 1em;
				text-align: center;
			}

			.links {
				padding: .5em 0;

				a {
					display: inline-block;
					padding: .5em 1em;
					border: .3em solid white;
					text-decoration: none;
					font-weight: bold;
					font-size: 1.5em;
					color: white;
					user-select: none;
					cursor: pointer;
				}
			}
		}
	}
}
</style>
