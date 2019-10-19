<template>
	<section v-inview:leave="audioEnd">
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
            console.log(transcript)
            if (transcript.toLowerCase().trim().indexOf('blast off') > -1) {
                this.$util.getSpeechDestroy()
                resolve()
            } else {
                console.log('please try again')
            }
        },
        audioEnd () {
            this.$util.stopAudio('blast_off')
        }
    },
	async created() {
        AOS.init()
        
        let transcript = await this.$util.getSpeech(this.callbackBlastOff).catch(error => console.warn('ops =)'))

		if (transcript) {
            this.$util.playAudio('blast_off')
		}
	}
}
</script>

<style lang="scss" scoped>
section {
	background-color: black;
	background-image: url('@/../../assets/blast1.gif');
    background-size: cover;
}

.blast {
}
</style>
