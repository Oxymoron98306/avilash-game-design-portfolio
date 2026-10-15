<template>
	<div class="about-container">
		<div class="intro-container">
			<div class="intro-text">
				<h1>Hello!</h1>
				<div class="paragraph">
					<div>
						I'm <strong>Avilash Das</strong>, a Game Designer.<br/>
						I have experience in designing intricate systems and levels for video games.
					</div>
					<div style="margin-top: 20px;">
						I've worked on <router-link to="/game-projects">games</router-link> (for professional, academic and personal purposes), and on <router-link to="/other-projects">other projects</router-link>. You can view my <router-link to="/resume">resume here</router-link>.
					</div>
					<div style="margin-top: 40px;">
						You can reach me at <a href="mailto:avilashdas2006@gmail.com">avilashdas2006@gmail.com</a> or <router-link to="/contact">through here</router-link>.
					</div>
				</div>
			</div>
			<div class="intro-image">
				<!-- Fixed image source using publicPath -->
				<img :src="`${publicPath}img/avatar.png`" alt="My Avatar" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
	name: "AboutMe",
	data() {
	return {
	publicPath: process.env.BASE_URL,
	};
	},
	});
</script>

<style scoped="">
	.about-container {
	margin-bottom: 80px;
	}

	.intro-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 40px;
	}

	.intro-text {
	flex: 1;
	}

	.paragraph {
	margin-bottom: 20px;
	}

	.intro-image {
	flex-shrink: 0;
	}

	.intro-image img {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	object-fit: cover;
	border: 4px solid #fce303;
	}

	@media (max-width: 768px) {
	.intro-container {
	flex-direction: column-reverse;
	text-align: center;
	}
	}
</style>