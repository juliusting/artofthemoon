<template>
	<section  v-inview:enter="onEnter" v-inview:leave="onLeave">
	</section>
</template>

<script>
export default {
	name: "apollo11Day4",
	inject: ['$util'],
	data () {
		return {
			timer: null
		}
	},
	methods: {
		callbackEagle (resolve, reject, transcript) {
			if (transcript.toLowerCase().trim().split(' ').some(r => ['land', 'eagle'].includes(r))) {
				this.$util.getSpeechDestroy()
				resolve(true)
			} else {
				console.warn('please try again')
			}
		},
		async onEnter () {
			this.$util.playAudio('land')

			this.timer = setTimeout(async _ => {
				let transcript = await this.$util.getSpeech(this.callbackEagle).catch(error => console.warn('ops =)'))

				if (transcript) {
					this.$util.playAudio('eagle')
				}
			}, 6000)
		},
		onLeave () {
			this.$util.stopAudio('eagle')
			this.$util.stopAudio('land')
			this.$util.getSpeechDestroy()
			clearTimeout(this.timer)
			this.timer = null
		}
	},
	created() {

	}
}
</script>

<style lang="scss" scoped>
section {
	background-color: black;
	background-image: url('@/../../assets/images/eagle.gif');
	background-position: center;
	background-size: cover;
}
</style>
