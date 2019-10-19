<template>
	<section ref="sceneDay2" v-inview:leave="onLeave">
	</section>
</template>

<script>
export default {
	name: "apollo11Day2",
	inject: ['$util'],
	data () {
		return {
			holdTimer: null
		}
	},
	methods: {
		setHoldTimer () {
			this.holdTimer = setTimeout(_ => {
				this.$util.playAudio('near')
				this.destroyHoldTimer()
			}, 1000)
		},
		destroyHoldTimer() {
			if (this.holdTimer) clearTimeout(this.holdTimer)
			this.holdTimer = null
		},
		onLeave () {
			this.$util.stopAudio('near')
		}
	},
	mounted () {
		this.$refs.sceneDay2.addEventListener('mousedown', this.setHoldTimer)
		this.$refs.sceneDay2.addEventListener('mouseup', this.destroyHoldTimer)
	},
	destroyed () {
		this.$refs.sceneDay2.removeEventListener('mousedown', setHoldTimer)
		this.$refs.sceneDay2.removeEventListener('mouseup', destroyHoldTimer)
	}

}
</script>

<style lang="scss" scoped>
section {
	background-color: black;
	background-image: url('@/../../assets/3.4.earth.png');
	padding: 50em 0em 0em 0em;
}
</style>
