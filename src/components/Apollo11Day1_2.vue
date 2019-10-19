<template>
	<section v-inview:enter="audioStart" v-inview:leave="audioEnd">
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
			/*
            if (transcript.toLowerCase().trim().indexOf('blast off') > -1) {
                this.$util.getSpeechDestroy()
                resolve()
            } else {
                console.warn('please try again')
			}
			*/
			this.$util.getSpeechDestroy()
			resolve(true)
		},
		async audioStart () {
			let transcript = await this.$util.getSpeech(this.callbackBlastOff).catch(error => console.warn('ops =)'))

			if (transcript) {
				this.$util.playAudio('blast_off')
			}
		},
        audioEnd () {
			this.$util.stopAudio('blast_off')
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
	background-image: url('https://storage.cloud.google.com/artofthemoon/blast1.gif');
    background-size: cover;
}

.blast {
    margin: 0em 0em 0em -57em;
}
</style>
