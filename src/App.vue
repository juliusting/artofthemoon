<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'normalize.css'

export default {
	name: 'App',
	created () {
		AOS.init()
		if (window.location.protocol != "https:") { // manual redirect to https
			if (window.location.hostname === 'localhost') return

			window.location.href = window.location.href.replace('http', 'https')
		}
	}
}
</script>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

body {
	width: 100%;
}
</style>
