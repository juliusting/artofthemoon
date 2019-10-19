<template>
	<section>
        <div class="container">
			<div class="name">
				<p class="as1">hey</p>
				<p class="as2">wo</p>
				<p class="as3">zdhxn</p>
			</div>
            <div class="crew1">
                <img src="@/assets/ast 1.png" alt="leftppl" class="a1" data-aos="fade-right">
				<img src="@/assets/ast 3.png" alt="middleppl" class="a3">
				<img src="@/assets/ast 2.png" alt="rightppl" class="a2" data-aos="fade-left">
            </div>
        </div>
	</section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
	name: "apollo11Day1-1",
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
}

.a1 {
	margin: 0em -13em 0em 0em;
}

.a2 {
	margin: 0em 0em 0em -14em;
}

.crew {
	size: 0em;
}

.name {
	color: white;
	position: absolute;
}

.as1 {
	margin: 5em 2em -3em 58em;
}

.as2 {
	margin: 0em 0em 0em 0em;
}

.as3 {
	margin: 0em 0em 0em 0em;
}
</style>
