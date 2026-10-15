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
				<!-- Make sure your picture in the public/img folder is named exactly avatar.png -->
				<img src="/img/avatar.png" alt="My Avatar" />
			</div>
		</div>
	</div>
</template>

<style scoped="">
	.about-container {
	margin-bottom: 80px;
	}

	/* Layout for text and image side-by-side */
	.intro-container {
	display: flex;
	align-items: center; /* Vertically centers the text and image */
	justify-content: space-between;
	gap: 40px; /* Space between text and image */
	}

	.intro-text {
	flex: 1; /* Takes up remaining space */
	}

	.paragraph {
	margin-bottom: 20px;
	}

	/* Image container styling */
	.intro-image {
	flex-shrink: 0; /* Prevents the image container from shrinking */
	}

	/* The magic circle styling */
	.intro-image img {
	width: 200px;       /* Adjust this size as needed */
	height: 200px;      /* Must be the same as width to be a perfect circle */
	border-radius: 50%; /* This makes it circular */
	object-fit: cover;  /* Prevents the image from stretching weirdly */
	border: 4px solid #fce303; /* Optional: Adds the yellow border like the template */
	}

	/* Make it stack nicely on mobile screens */
	@media (max-width: 768px) {
	.intro-container {
	flex-direction: column-reverse; /* Puts image on top of text on mobile */
	text-align: center;
	}
	}
</style>