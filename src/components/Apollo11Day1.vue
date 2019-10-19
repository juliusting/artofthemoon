<template>
	<section v-inview:enter="onEnter" v-inview:leave="onLeave">
		<div style="display: flex; position: absolute; height: 100%; width: 100%; overflow: hidden">
			<div style="margin: auto 1em -2em auto; width: 23em">
				<img src="@/assets/presidentspeech.png" alt="president" style="width: 100%">
			</div>
		</div>
		<div class="s" data-aos="zoom-in" data-aos-duration="1000">
			<span>"But why, some say, the moon?"</span>
		</div>
	</section>
</template>

<script>
export default {
	name: "apollo11Day1",
	inject: ['$util'],
	data () {
		return {
		}
	},
	methods: {
		onEnter () {
			this.$util.playAudio('cut_jfk')
		},
		onLeave() {
			this.$util.stopAudio('cut_jfk')
		}
	}
}
</script>

<style lang="scss" scoped>
section {
	background-image: url('@/../../assets/stars3.png');
	background-size: cover;
	background-position: center;
	background-color: black;
	color: white;
}

.s {
	padding: 20vh 7em;
	text-align: left;

	span {
		font-size: 5em;
	}
}
</style>
