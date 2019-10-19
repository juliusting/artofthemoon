<template>
	<main>
		<Test/>
		<Apollo11Landing/>
		<Apollo11Day1/>
		<Apollo11Day2/>
		<Apollo11Day3/>
		<Apollo11Day4/>
	</main>
</template>

<script>
import { debounce } from 'lodash'

import Apollo11Landing from '@/components/Apollo11Landing'
import Apollo11Day1 from '@/components/Apollo11Day1'
import Apollo11Day2 from '@/components/Apollo11Day2'
import Apollo11Day3 from '@/components/Apollo11Day3'
import Apollo11Day4 from '@/components/Apollo11Day4'
import Test from '@/components/Test'

export default {
	name: "apollo11",
	components: {
		Apollo11Landing,
		Apollo11Day1,
		Apollo11Day2,
		Apollo11Day3,
		Apollo11Day4,
		Test
	},
	provide () {
		return {
			$util: {
				async getSpeech (callback) {
					return new Promise ((resolve, reject) => {
						console.log('init')
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
					this.SpeechRecognition.stop()
					this.SpeechRecognition = null
				}
			}
		}
	},
	data () {
		return {
			SpeechRecognition: null
		}
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
	}
}
</style>
