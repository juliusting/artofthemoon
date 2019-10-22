<template>
	<section ref="sceneDay2" v-inview:enter="onEnter" v-inview:leave="onLeave">
		<div style="display: flex">
			<div ref="earth" style="margin: 0 auto; position: relative">
				<img src="@/assets/images/3.4.earth.png" style="width: 100%">
			</div>
		</div>

		<div class="moon" style="position: absolute; height: 100%; width: 100%; top: 0"></div>
	</section>
</template>

<script>
export default {
	name: "apollo11Day2",
	inject: ['$util'],
	data () {
		return {
			holdTimer: null,
			width: 50,
			top: '0em'
		}
	},
	methods: {
		setHoldTimer () {
			this.holdTimer = setTimeout(_ => {
				this.$util.playAudio('earth')
				setTimeout(_ => {
					this.$util.downVolume('near')
					this.$ga.event({
						eventCategory: 'interaction',
						eventAction: 'tap-hold',
						eventLabel: 'apollo11day2'
					})
				}, 2000)
				this.destroyHoldTimer()
			}, 1000)
		},
		destroyHoldTimer() {
			if (this.holdTimer) clearTimeout(this.holdTimer)
			this.holdTimer = null
		},
		onEnter () {
			this.$util.playAudio('near')
		},
		onLeave () {
			this.destroyHoldTimer()
			this.$util.stopAudio('earth')
			this.$util.stopAudio('near')
		},
		onScroll2 (event) {
			let container = window.pageYOffset || document.documentElement.scrollTop
			let inner = this.$refs.sceneDay2.offsetTop - this.$refs.sceneDay2.scrollHeight
			this.$refs.earth.style.top = ((1/5 * inner / container - .15) * 150) + 'em'
			this.$refs.earth.style.width = (((1/5 * inner / container) + .45)* 100) + '%'

		}
	},
	mounted () {
		this.$refs.sceneDay2.addEventListener('mousedown', this.setHoldTimer)
		this.$refs.sceneDay2.addEventListener('mouseup', this.destroyHoldTimer)
		document.body.onscroll = this.onScroll2
		document.body.dispatchEvent(new CustomEvent('scroll'))

	},
	destroyed () {
		this.$refs.sceneDay2.removeEventListener('mousedown', this.setHoldTimer)
		this.$refs.sceneDay2.removeEventListener('mouseup', this.destroyHoldTimer)
		document.body.onscroll = null
	}

}
</script>

<style lang="scss" scoped>
section {
	background-color: black;
	color: white;

	.moon {
		background-image: url('@/../../assets/images/moonsurface.png');
		background-size: 100% 30%;
		background-repeat: no-repeat;
		background-position: bottom center;
	}
}
</style>
