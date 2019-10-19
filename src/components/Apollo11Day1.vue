<template>
	<section v-inview:enter="audioStart" v-inview:leave="audioEnd">
		<div class="container">
			<div class="JKR">
				<div style="margin-left: auto; width: 10em">
					<img src="@/assets/presidentspeech.png" alt="president" class="speech">
				</div>
			</div>
			<div class="s" data-aos="zoom-in">
				<p>"But why, some say, the moon?"</p>
			</div>
		</div>
	</section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
	name: "apollo11Day1",
	inject: ['$util'],
	data () {
		return {
		}
	},
	methods: {
		audioStart () {
			this.$util.playAudio('cut_jfk')
		},
		audioEnd() {
			this.$util.stopAudio('cut_jfk')
		}
	},
	created() {
		AOS.init()
	}
}
</script>

<style lang="scss" scoped>
section {
	padding: 0.01em 16px;
	background-image: url('@/../../assets/stars3.png');
	background-size: cover;
	background-color: black;
}

p {
  margin: 0;
}

.s {
  color: white;
  font-size: 5em;
  margin: -7em 0em 0em 1em;
  text-align-last: left;
  transform: translateZ(0) scale(1);
}

.speech {
	width: 23em;
	margin: 22em 0em 0em -12em;
}

.JKR {
	display: flex;
}

[data-aos] {
	transform: translateZ(0) scale(1);
	transition-duration: 1s;
}
</style>
