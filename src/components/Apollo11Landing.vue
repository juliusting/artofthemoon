<template>
	<section v-inview:enter="onEnter">
		<div class="video" data-aos="zoom-out" data-aos-delay="1000" data-aos-duration="15000" data-aos-easing="linear">
			<video ref="moon" src="@/assets/videos/moon.mp4" loop muted></video>
		</div>
		<div class="hero">
			<article style="opacity: 0">
				<div class="arrow">
					<img src="@/assets/images/down-arrow.svg" alt="down-arrow">
				</div>
			</article>

			<div class="video-desc">
				<h1 data-aos="fade-up" data-aos-duration="1000">Inspiration</h1>
				<article data-aos="fade-zoom-in" data-aos-delay="1000" data-aos-duration="3000">
					<div>Based on real mission</div>
					<div>in</div>
					<div>1969</div>
				</article>
			</div>

			<article data-aos="zoom-in" data-aos-delay="1500" data-aos-offset="0">
				<div class="arrow">
					<img src="@/assets/images/down-arrow.svg" alt="down-arrow">
				</div>
			</article>
		</div>
	</section>
</template>

<script>
export default {
	name: "apollo11Landing",
	data () {
		return {
		}
	},
	methods: {
		onEnter () {
			console.log(this.$refs.moon.play())
		}
	}
};

</script>

<style lang="scss" scoped>
section {
	background-color: black;
	color: white;

	.video {
		position: absolute;
		display: flex;
		height: 100%;
		width: 100%;
		z-index: 0;

		video {
			margin: auto;
			width: 100%;
			height: 80%;
		}
	}

	.hero {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;

		.video-desc {
			margin: auto;

			h1 {
				margin: 0 0 .25em;
				font-size: 8em;
				font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
			}

			article {
				& > * {
					font-family: 'Courier New', Courier, monospace;
				}
			}
		}

		.arrow {
			margin: 2em auto;
			width: 3em;

			img {
				position: relative;
				width: 100%;
				animation: bounce 3s infinite;
			}
		}
	}
}

@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(-30px);
	}
	60% {
		transform: translateY(-15px);
	}
}
</style>
