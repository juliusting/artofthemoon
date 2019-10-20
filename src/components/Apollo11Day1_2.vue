<template>
	<section v-inview:enter="onEnter" v-inview:leave="onLeave" v-inview:offset="200">
	</section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    name: "apollo11Day1-2",
    inject: ['$util'],
	components: {},
	data () {
		return {
		}
	},
	methods: {
		callbackBlastOff (resolve, reject, transcript) {
			if (transcript.toLowerCase().trim().indexOf('blast off') > -1) {
				this.$util.getSpeechDestroy()
				resolve(true)
			} else {
				console.warn('please try again')
			}
		},
		async onEnter () {
			setTimeout(_ => {
				this.$util.playAudio('blast')
			}, 1000)

			setTimeout(async _ => {
				let transcript = await this.$util.getSpeech(this.callbackBlastOff).catch(error => console.warn('ops =)'))

				if (transcript) {
					this.$util.playAudio('blast_off')
				}
			}, 5000)
		},
        onLeave () {
			this.$util.stopAudio('blast_off')
			this.$util.stopAudio('blast')
			this.$util.getSpeechDestroy()
        }
    },
	created() {
		AOS.init()
	}
}
</script>

<style lang="scss" scoped>
section {
	background-color: black;
	// background-image: url('https://storage.cloud.google.com/artofthemoon/blast1.gif');
	background-image: url('@/../../assets/blast1.gif');
    background-size: 100% auto;
}

.blast {
    margin: 0em 0em 0em -57em;
}
</style>
