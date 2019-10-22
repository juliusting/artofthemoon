<template>
	<section v-inview:enter="onEnter" v-inview:leave="onLeave" v-inview:offset="200">
		<video ref="vid1" src="@/assets/videos/blast1.mp4" loop muted></video>
		<video ref="vid2" src="@/assets/videos/blast1.mp4" loop muted></video>
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
			if (transcript.toLowerCase().trim().split(' ').some(r => ['blast', 'off'].includes(r))) {
				this.$util.getSpeechDestroy()
				console.log('accepted', transcript)
				resolve(true)
			} else {
				console.info('please try again')
			}
		},
		async onEnter () {
			this.$refs.vid1.currentTime = 0
			this.$refs.vid2.currentTime = 0
			this.$refs.vid1.play()
			this.$refs.vid2.play()

			setTimeout(_ => {
				this.$util.getAudio('blast').onended = async _ => {
					let transcript = await this.$util.getSpeech(this.callbackBlastOff).catch(error => console.warn('ops =)'))

					if (transcript) {
						this.$util.playAudio('blast_off')
						this.$ga.event({
							eventCategory: 'interaction',
							eventAction: 'speech-recognization',
							eventLabel: `Blast Off: ${transcript}`
						})
					}
				}
				this.$util.playAudio('blast')
			}, 1000)
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

	video {
		width: 80%;
		height: 80%;
		object-fit: cover;

		&:not(:first-of-type) {
			height: 20%;
		}
	}
}

.blast {
	margin: 0em 0em 0em -57em;
}
</style>
