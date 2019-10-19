<template>
	<main>
		<!--Test/-->
		<Apollo11Day1/>
		<Apollo11Day2/>
		<Apollo11Day3/>
		<Apollo11Day4/>
	</main>
</template>

<script>
import Apollo11Day1 from '@/components/Apollo11Day1'
import Apollo11Day2 from '@/components/Apollo11Day2'
import Apollo11Day3 from '@/components/Apollo11Day3'
import Apollo11Day4 from '@/components/Apollo11Day4'
import Test from '@/components/Test'

export default {
	name: "apollo11",
	components: {
		Apollo11Day1,
		Apollo11Day2,
		Apollo11Day3,
		Apollo11Day4,
		Test
	},
	data () {
		return {
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
