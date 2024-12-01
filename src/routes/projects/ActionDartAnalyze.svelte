<script lang="ts">
	import LogoTitle from '$lib/components/LogoTitle.svelte';
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [SkillId.GithubActions, SkillId.TypeScript, SkillId.Dart, SkillId.Flutter];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<LogoTitle
				src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
				title="Action dart analyze"
			/>

			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>
				A GitHub action written in TypeScript that analyzes dart code by running <code
					>dart analyze</code
				>
				and
				<code>dart format</code>.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/action-dart-analyze"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a
					href="https://github.com/marketplace/actions/dart-analyze"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Marketplace</button>
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
		flex-direction: column;
		align-items: flex-start;
		@screen lg {
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
