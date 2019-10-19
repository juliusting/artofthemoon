<template>
	<section>
		<div style="position: relative; margin-top: 35vh; height: 65vh">
			<article>
				<div>
					<div class="profile">
						<div>
							<h2>Neil Armstrong</h2>
							<div>- Mission Commander</div>
						</div>
					</div>
					<div>
						<img src="@/assets/ast 1.png" alt="Neil Armstrong" data-aos2="fade-right">
					</div>
				</div>
			</article>
			<article>
				<div>
					<div class="profile">
						<div>
							<h2>Edwin 'Buzz' Aldrin</h2>
							<div>lunar module pilot</div>
						</div>
					</div>
					<div>
						<img src="@/assets/ast 3.png" alt="Edwin 'Buzz' Aldrin" data-aos2="fade-right">
					</div>
				</div>
			</article>
			<article>
				<div>
					<div class="profile">
						<div>
							<h2>Michael Collins</h2>
							<div>command module pilot</div>
						</div>
					</div>
					<div>
						<img src="@/assets/ast 2.png" alt="Michael Collins" data-aos2="fade-right">
					</div>
				</div>
			</article>
		</div>
		<!--
		<div class="name">
			<p class="as2">Michael Collins - command module pilot.</p>
			<p class="as3">Edwin 'Buzz' Aldrin - lunar module pilot.</p>
			<p class="as1">Neil Armstrong - Mission Commander.</p>
		</div>
		<div class="crew1">
			<img src="@/assets/ast 1.png" alt="leftppl" class="a1" data-aos="fade-right">
			<img src="@/assets/ast 3.png" alt="middleppl" class="a3">
			<img src="@/assets/ast 2.png" alt="rightppl" class="a2" data-aos="fade-left">
		</div>
		-->
	</section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
	name: "apollo11Day1-1",
	inject: ['$util'],
	components: {},
	data () {
		return {
		}
	},
	methods: {
		audioStart () {
			this.$util.playAudio('total_crew')
		},
		audioEnd() {
			this.$util.stopAudio('total_crew')
		}
	},
	created() {
		AOS.init()
	}
}
</script>

<style lang="scss" scoped>
section {
	background-color: black;
	color: white;

	article {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);

		.profile {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			& > div > div {
				font-family: 'Courier New', Courier, monospace;
			}
		}

		&:nth-child(1),
		&:nth-child(3) {
			z-index: 1;
		}

		&:nth-child(2) {
			position: relative;
			top: -5em;
		}

		&:nth-child(1) > * {
			position: relative;
			left: -10em;
		}

		&:nth-child(3) > * {
			position: relative;
			right: -10em;
		}

		&:nth-child(1) {
			.profile > * {
				position: relative;
				left: -13em;
			}
		}

		&:nth-child(2) {
			.profile > * {
				position: relative;
				top: -7em;
			}
		}

		&:nth-child(3) {
			.profile > * {
				position: relative;
				right: -15em;
			}
		}
	}
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

.as2 {
	margin: 7em -3em -9em 51em;
}

.as3 {
	margin:  0em -19em 6em -1em;
}

.as1 {
	margin: 0em 9em 0em 0em;
}
</style>
