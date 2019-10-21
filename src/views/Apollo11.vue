<template>
	<main>
		<div ref="block" class="getting_user_interacted">
			<form
				v-on:submit.prevent="start"
				style="padding: 1em; text-align: center">
				<h1>What's your name? *</h1>
				<div style="display: flex; max-width: 25em" data-aos="zoom-out">
					<input ref="name" type="text" v-model="name" :placeholder="namePlaceholder" required autofocus>
					<button type="submit">Start</button>
				</div>
			</form>
		</div>
		<section ref="block2"></section>
		<!--Test/-->
		<Apollo11Landing ref="tet"/>
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
		<audio v-for="source in audioSources" :key="source" :ref="source" preload="auto">
			<source :src="require(`@/assets/audio/${source}.ogg`)" type="audio/ogg">
			<source :src="require(`@/assets/audio/${source}.mp3`)" type="audio/mpeg">
		</audio>
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

							console.log(interimTranscript)

							callback(resolve, reject, interimTranscript)
						}, 300)

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
					console.log(filename)
					this.$refs[filename][0].play()
					this.$refs[filename][0].volume = 1
				},
				stopAudio: filename => {
					console.log(filename)
					this.$refs[filename][0].pause()
					this.$refs[filename][0].currentTime = 0
				},
				downVolume: filename => {
					this.$refs[filename][0].volume = .2
				}
			}
		}
	},
	data () {
		return {
			name: '',
			namePlaceholder: '',
			namePlaceholders: [
				'Neil',
				'Robert',
				'Mark',
				'Armstrong',
				'Shelton',
				'Riccobono'
			],
			namePlaceholdersTimer: null,
			SpeechRecognition: null,
			audioSources: [
				'near',
				'cut_jfk',
				'blast_off',
				'eagle',
				'total_crew',
				'earth',
				'blast',
				'land',
				'onesmallstep'
			]
		}
	},
	methods: {
		start () {
			if (this.$refs.name.value) {
				this.$refs.block.remove()
				this.$refs.block2.remove()
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0

				this.$store.dispatch('setName', this.name)
			} else {
				this.$refs.name.focus()
			}

		}
	},
	mounted () {
		this.namePlaceholder = this.namePlaceholders[0]

		this.namePlaceholdersTimer = setInterval(_ => {
			let nextIndex = this.namePlaceholders.indexOf(this.namePlaceholder) + 1

			nextIndex = nextIndex < this.namePlaceholders.length ? nextIndex : 0

			this.namePlaceholder = this.namePlaceholders[nextIndex]
		}, 2000)
	},
	destroyed () {
		clearInterval(this.namePlaceholdersTimer)
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
		background-repeat:none;
	}
}

.getting_user_interacted {
	position: fixed;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	z-index: 99;
	background-color: black;
	color: white;

	> form {
		margin: auto
	}

	input {
		display: inline-block;
		padding: .5em 1em;
		border: .3em solid white;
		text-decoration: none;
		font-weight: bold;
		font-size: 1.5em;
		color: black;
		line-height: 1.15;
		width: 100%;
	}

	button {
		display: inline-block;
		padding: .5em 1em;
		border: .3em solid white;
		text-decoration: none;
		font-weight: bold;
		font-size: 1.5em;
		color: white;
		user-select: none;
		cursor: pointer;

		background-color: black;
	}
}

.separator {
	background-color: black;
	height: 30vh;
	width: 100%;
}
</style>
