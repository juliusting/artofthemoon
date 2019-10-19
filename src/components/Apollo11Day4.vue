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
		}
	},
	methods: {
		callbackEagle (resolve, reject, transcript) {
			this.$util.getSpeechDestroy()
			resolve(true)
		},
		async onEnter () {
			let transcript = await this.$util.getSpeech(this.callbackEagle).catch(error => console.warn('ops =)'))

			if (transcript) {
				this.$util.playAudio('eagle')
			}
		},
		onLeave () {
			this.$util.stopAudio('eagle')
			this.$util.getSpeechDestroy()
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
	// background-image: url('@/../../assets/manonmoon.jpg');
	background-position: center;
	background-size: cover;
}
</style>
