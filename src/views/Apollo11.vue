<template>
	<main>
		<audio v-for="source in audioSources" :key="source" :ref="source" preload="auto">
			<source :src="require(`@/assets/audio/${source}.ogg`)" type="audio/ogg">
			<source :src="require(`@/assets/audio/${source}.mp3`)" type="audio/mpeg">
		</audio>
		<!--Test/-->
		<Apollo11Landing/>
		<div class="separator"></div>
		<Apollo11Day1/>
		<div class="separator"></div>
		<Apollo11Day1_1/>
		<div class="separator"></div>
		<Apollo11Day1_2/>
		<div class="separator"></div>
		<Apollo11Day2/>
		<Apollo11Day4/>
		<div class="separator"></div>
		<Apollo11Success/>
	</main>
</template>

<script>
import { debounce, throttle } from 'lodash'

import Apollo11Landing from '@/components/Apollo11Landing'
import Apollo11Day1 from '@/components/Apollo11Day1'
import Apollo11Day1_1 from '@/components/Apollo11Day1_1'
import Apollo11Day1_2 from '@/components/Apollo11Day1_2'
import Apollo11Day2 from '@/components/Apollo11Day2'
import Apollo11Day3 from '@/components/Apollo11Day3'
import Apollo11Day4 from '@/components/Apollo11Day4'
import Apollo11Success from '@/components/Apollo11Success'
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
		Apollo11Success,
		Test
	},
	provide () {
		return {
			$util: {
				async getSpeech (callback) {
					return new Promise ((resolve, reject) => {
						if (this.SpeechRecognition) return

						window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition

						let finalTranscript = ''

						this.SpeechRecognition = new window.SpeechRecognition()
						// recognition.lang = 'id-ID'
						this.SpeechRecognition.interimResults = true
						this.SpeechRecognition.maxAlternatives = 10
						this.SpeechRecognition.continuous = true

						this.SpeechRecognition.onresult = throttle(event => {
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
						}, 300, { leading: true, trailing: true })

						this.SpeechRecognition.start()
					})
				},
				getSpeechDestroy () {
					if (this.SpeechRecognition) {
						this.SpeechRecognition.stop()
					}
					this.SpeechRecognition = null
				},
				playAudio: filename => {
					this.$refs[filename][0].play()
				},
				stopAudio: filename => {
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
				'blast_off',
				'eagle',
				'total_crew',
				'earth'
			]
		}
	},
	mounted () {
	},
	methods: {
	},
	created() {
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
		overflow: hidden;
	}
}

.separator {
	background-color: black;
	height: 30vh;
	width: 100%;
}
</style>
