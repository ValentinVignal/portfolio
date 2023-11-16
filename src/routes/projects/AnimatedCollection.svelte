<script lang="ts">
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [SkillId.Flutter, SkillId.Dart];

	const vscodeSkills = [SkillId.Flutter, SkillId.Dart];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<code>animated_collection</code>
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>
				A Flutter library with simple animated widgets and utilities methods to use with animations.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/flutter_packages"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a
					href="https://pub.dev/packages/animated_collection"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">pub.dev</button>
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
	.title {
		display: flex;
		justify-content: space-between;
	}
	.collapse-title {
		z-index: 1;
		pointer-events: none;
	}
</style>
