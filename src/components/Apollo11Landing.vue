<template>
	<section>
		<div class="content">
		<div class="container1">
			<div class="video">
				<video autoplay="" muted="" loop="" id="mVideo" style="display:block;margin:auto" width="90%" height="90%">
					<source src="https://storage.cloud.google.com/artofthemoon/moon.mp4" type="video/mp4">
				</video>
				<div class="video-desc">
					<div class="title">
					<p class="BigTitle">Apollo11</p>
					<div class="desc">
						<p>Based on real mission </p>
						<p>in </p>
						<p>1969</p>
					</div>
					</div>
				</div>
			</div>
		</div>
		<div class="arrow">
			<img src="@/assets/down-arrow.svg" alt="down-arrow" class="darrow">
		</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "apollo11Landing",
	data () {
		return {
		}
	}
};

</script>

<style lang="scss" scoped>
section {
	background-color: black;
  z-index: 1;
}

p {
  color:white;
  font-size:2em;
  margin: 0.5em 0em 0em 0em;
}

.container1 {
  padding: 0.01em 16px;
}

.BigTitle {
  font-size: 8em;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 36% 0% 0% 0%;
}

.desc {
  font-size: 0.8em;
  font-family: 'Courier New', Courier, monospace;
  height: 17em;
}

.video {
  background-color: black;
}

.video-desc {
  position: absolute;
  top: 50%;
  left: 31%;
  margin: -20em 0em 0em 0em;
}

.darrow {
  width: 40px;
  position: relative;
  animation: arrowmove 1.5s infinite;
  animation-timing-function: ease;
  margin: -3em 0em 1em 0em;
}
</style>
