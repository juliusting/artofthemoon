<template>
	<section>
        <div class="container">
        </div>
	</section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
	name: "apollo11Day1-2",
	components: {},
	data () {
		return {
		}
	},
	methods: {
	},
	created() {
		AOS.init()
	}
}
</script>

<style lang="scss" scoped>
section {
	background-color: black;
	background-image: url('@/../../assets/blast.jpg');
    background-size: cover;
}
</style>
