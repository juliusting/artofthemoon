<template>
	<section>
        <div class="container">
			<div class="name">
				<p>Congratulation! You had made it to the Moon!</p>
                <p style="color:red">Your Certificate</p>
                <form>
                    <input type="text" name="name"><br>
                    <input type="submit" value="Share" id="submit" style="margin: 1em 0em 0em 0em; border-radius: .5em;">
                </form>
                
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

.name {
    font-size: 3em;
	color: white;
	position: absolute;
    margin: 2em 0em 0em 4em;
}
</style>
