<template>
	<section>Hello</section>
</template>

<script>
export default {
	name: "testSpeechRecognition",
	inject: ['$util'],
	data () {
		return {
		}
	},
	methods: {
		callbackBlastOff (resolve, reject, transcript) {
			if (transcript.toLowerCase().trim().indexOf('blast off') > -1) {
				this.$util.getSpeechDestroy()
				alert('do something for blast off')
				resolve()
			} else {
				console.log('please try again')
			}
		}
	},
	async created() {
		let transcript = await this.$util.getSpeech(this.callbackBlastOff).catch(error => console.warn('ops =)'))

		if (transcript) {
			alert('blast off')
		}
	}
}
</script>
