<template>
	<section v-inview:enter="test" v-inview:leave="yo">
	</section>
</template>

<script>
export default {
	name: "apollo11Day2",
	inject: ['$util'],
	data () {
		return {
		}
	},
	methods: {
		test () {
			console.log('inview')
			this.$util.playAudio('near')
		},
		yo () {
			console.log('out')
			this.$util.stopAudio('near')
		}
	},
	created() {
	}
}
</script>

<style lang="scss" scoped>
section {
	background-color: red;
}
</style>
