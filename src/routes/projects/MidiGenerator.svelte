<script lang="ts">
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [SkillId.Python];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			Midi generator
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			A Python project to generate music midi files using a TensorFlow neural network.
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			My Master Thesis project for my Master in the School of Computing of the <a
				href="https://www.comp.nus.edu.sg/">National University of Singapore</a
			>"<em>Music completion with deep probabilistic models</em>".

			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/midiGenerator"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a
					href="https://github.com/ValentinVignal/Dissertation-Report"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Report</button>
				</a>
			</div>
		</article>
	</div>
</div>

<style>
	.actions {
		padding: 8px 0px;
	}
	article > * > a {
		text-decoration: underline;
	}

	article {
		width: 100%;
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		@media (min-width: 1280px) {
			justify-content: space-between;
			flex-direction: row;
			align-items: center;
		}
	}

	.collapse-title {
		z-index: 1;
		pointer-events: none;
	}
</style>
