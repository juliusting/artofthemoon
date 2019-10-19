<template>
	<main>
		<audio v-for="source in audioSources" :key="source" :ref="source" preload="auto">
			<source :src="require(`@/assets/audio/${source}.ogg`)" type="audio/ogg">
			<source :src="require(`@/assets/audio/${source}.mp3`)" type="audio/mpeg">
		</audio>
		<Test/>
		<Apollo11Landing/>
		<Apollo11Day1/>
		<Apollo11Day1_1/>
		<Apollo11Day1_2/>
		<Apollo11Day2/>
		<Apollo11Day3/>
		<Apollo11Day4/>
	</main>
</template>

<script>
import { debounce } from 'lodash'

import Apollo11Landing from '@/components/Apollo11Landing'
import Apollo11Day1 from '@/components/Apollo11Day1'
import Apollo11Day1_1 from '@/components/Apollo11Day1_1'
import Apollo11Day1_2 from '@/components/Apollo11Day1_2'
import Apollo11Day2 from '@/components/Apollo11Day2'
import Apollo11Day3 from '@/components/Apollo11Day3'
import Apollo11Day4 from '@/components/Apollo11Day4'
import Test from '@/components/Test'

export default {
	name: "apollo11",
	components: {
		Apollo11Landing,
		Apollo11Day1,
		Apollo11Day1_1,
		Apollo11Day1_2,
		Apollo11Day2,
		Apollo11Day3,
		Apollo11Day4,
		Test
	},
	provide () {
		return {
			$util: {
				async getSpeech (callback) {
					console.log('ready speech')
					return new Promise ((resolve, reject) => {
						if (this.SpeechRecognition) return

						window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition

						let finalTranscript = ''

						this.SpeechRecognition = new window.SpeechRecognition()
						// recognition.lang = 'id-ID'
						this.SpeechRecognition.interimResults = true
						this.SpeechRecognition.maxAlternatives = 10
						this.SpeechRecognition.continuous = true

						this.SpeechRecognition.onresult = debounce(event => {
							let interimTranscript = ''
							for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
								let transcript = event.results[i][0].transcript
								if (event.results[i].isFinal) {
									finalTranscript += transcript
								} else {
									interimTranscript += transcript
								}
							}

							callback(resolve, reject, interimTranscript)
						}, 1000)
						this.SpeechRecognition.start()
					})
				},
				getSpeechDestroy () {
					console.log('speech destroyed')
					if (this.SpeechRecognition) {
						this.SpeechRecognition.stop()
					}
					this.SpeechRecognition = null
				},
				playAudio: filename => {
					console.log('playaudio', filename)
					this.$refs[filename][0].play()
				},
				stopAudio: filename => {
					console.log('destroyaudio', filename)
					this.$refs[filename][0].pause()
					this.$refs[filename][0].currentTime = 0
				}
			}
		}
	},
	data () {
		return {
			SpeechRecognition: null,
			audioSources: [
				'near',
				'cut_jfk',
				'blast_off'
			]
		}
	},
	mounted () {
	},
	methods: {
	},
	created() {
		/*
		navigator.mediaDevices.getUserMedia({ audio: true })
		.then(function(stream) {
		console.log('You let me use your mic!')
		})
		.catch(function(err) {
		console.log('No mic for you!')
		});
		*/
	}
}
</script>

<style lang="scss" scoped>
main {
	scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vh);
	scroll-snap-type: y mandatory;

	& > section {
		position: relative;
		scroll-snap-align: start;
		height: 100vh;

		&:not(:last-of-type):after {
			content: '';
			position: relative;
			display: block;
			height: 5em;
			width: 100%;
			background-color: black
		}
	}
}

.separator {
	height: 5em;
	width: 100%;
}
</style>
