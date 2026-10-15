<template>
	<div>
		<h1>Resume</h1>
		<div class="paragraph">
			I'm <strong>Avilash Das</strong>, a game designer. I have experience in creating games with a focus on retention, player pacing. long term meta-progression, level-flow and other engaging systems.		<br />
			<br />Right now I'm working as a Game Design intern at Tritek Games. 		<br />
			If you have any opportunity feel free to <router-link to="/contact">contact me</router-link>.
			<br /><br />
			Besides games, I'm passionate about art and history.
			<div style="margin-top:20px; margin-bottom:20px;">
				<!-- Fixed download link using BASE_URL -->
				<a class="download-link" :href="`${publicPath}pdf/Avilash_Das_Resume.pdf`" download="Avilash_Das_Resume.pdf" target="_blank">
					<i class="fa fa-download fa-lg fa-fw"></i> Download as PDF
				</a>
				<div style="clear:both"></div>
			</div>
		</div>
		<div style="clear:both"></div>
		<div class="full-content">
			<h2>Work experience</h2>
			<h3>
				GAME DESIGN INTERN - <em>Tritek Games</em>
			</h3>
			<h4>June 2026 - Present</h4>
			<h4></h4>
			<div>● Prototyping different iterations of the game.</div>
			<div>● Deconstruction of many Endless Runner, 4X, Tower Defence games.</div>
			<div>● Translated the educational material for children into a playable format.</div>
			<div>● Ideation of multiple game mechanics to retain the attention of the player.</div>
			<div>● Market analysis and Competitive analysis.</div>
			<h3>GAME JAM AND PERSONAL PROJECTS</h3>
			<h4></h4>
			<div>
				<strong>● Solar Brawl</strong>
			</div>
			<div>
				<em>Created a 2D PvP Arena Shooter in Unity 6 and published the first build within of 24 hours.</em>
			</div>
			<div>
				<strong>● Substantia Venefica</strong>
			</div>
			<div>
				<em>Designed and blocked out a ~30-minute level in Unity for a FPS game in the jam by collaborating in a team of 2.</em>
			</div>
			<div>
				<strong>● Spatial Launch</strong>
			</div>
			<div>
				<em>Designed the levels, mechanics and particle effects for a 2D racing game in Unity, as a personal project in Second-Year of College. It was built within a week.</em>
			</div>
			<h2>Skills</h2>
			<div class="skill-set">
				<h3>PRIMARY</h3>
				<SkillRate name="Systems Design"/>
				<SkillRate name="Level Design"/>
				<SkillRate name="Deconstruction"/>
				<SkillRate name="Documentation"/>
				<SkillRate name="Prototyping"/>
				<SkillRate name="Competitive Analysis"/>
			</div>
			<div class="skill-set">
				<h3>SECONDARY</h3>
				<SkillRate name="2D Art (in Photoshop)"/>
				<SkillRate name="3D Modeling (in Maya)"/>
			</div>
			<div class="skill-set">
				<h3>SOFTWARES</h3>
				<SkillRate name="Unity"/>
				<SkillRate name="MS Word"/>
				<SkillRate name="Figma"/>
				<SkillRate name="Excel"/>
				<SkillRate name="Slides"/>
				<SkillRate name="Photoshop"/>
				<SkillRate name="Maya"/>
			</div>
			<div style="clear:both" />
			<h2>Education</h2>
			<h3>ICAT Design and Media College (Alagappa University)</h3>
			<h4>Bachelor of Science in Game Design and Art</h4>
			<div>(SPECIALISATION: Level Design)</div>
			<h2>Languages</h2>
			<h3>English</h3>
			<div>
				<strong>Proficiency:</strong> ADVANCED
			</div>
			<h3>Bengali</h3>
			<div>
				<strong>Proficiency:</strong> NATIVE
			</div>
			<h3>Hindi</h3>
			<div>
				<strong>Proficiency:</strong> Speaking-ADVANCED, Reading & Writing-INTERMEDIATE
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import SkillRate from "@/components/SkillRate.vue";

	export default Vue.extend({
	name: "Resume",
	components: {
	SkillRate,
	},
	data() {
	return {
	publicPath: process.env.BASE_URL,
	};
	},
	});
</script>

<style scoped="">
	h2 {
	font-weight: 100;
	font-size: 2em;
	margin: 0px;
	padding: 0px;
	padding-top: 50px;
	}
	h3 {
	font-weight: 100;
	font-size: 1.6em;
	margin: 0px;
	padding: 0px;
	padding-top: 30px;
	}
	h4 {
	font-weight: 100;
	font-size: 1.3em;
	margin: 0px;
	padding: 0px;
	padding-top: 15px;
	font-style: italic;
	}

	.paragraph {
	max-width: 700px;
	}

	.download-link {
	float:left;
	margin-right: 50px;
	}

	.full-content div {
	max-width: 800px;
	}

	.skill-set h3 {
	padding-bottom: 10px;
	}

	.photo img {
	height: 300px;
	width: 300px;
	}

	.tech-stack {
	font-style: italic;
	}

	.photo {
	margin-top: 50px;
	text-align: center;
	}

	@media only screen and (min-width: 620px){
	.paragraph {
	float: left;
	}

	.photo {
	float: left;
	padding: 30px;
	padding-left: 80px;
	}

	.skill-set {
	float: left;
	padding-right: 60px;
	}
	}
</style>