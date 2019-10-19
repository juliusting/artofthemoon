<template>
	<section>
		<div class="JKR">
			<div style="margin-left: auto; width: 10em">
				<img src="@/assets/presidentspeech.png" alt="president" class="speech">
			</div>
		</div>
		<div class="s">
			<p>"But why, some say, the moon?"</p>
		</div>
	</section>
</template>

<script>
export default {
	name: "apollo11Day1",
	components: {},
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
section {
	padding: 0.01em 16px;
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
}

.speech {
	width: 23em;
	margin: 22em 0em 0em -12em;
}

.JKR {
	display: flex;
}
</style>
