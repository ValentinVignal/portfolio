<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [SkillId.Flutter, SkillId.Dart];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<LogoTitle
				src="https://storage.googleapis.com/cms-storage-bucket/4fd0db61df0567c0f352.png"
				title="Flutter"
			/>
			<Skills skillIds={skills} />
		</div>

		<article class="prose">
			<p>
				I am a member of the Flutter Github organization with
				<a href="https://github.com/flutter/flutter/pull/152361#pullrequestreview-2201981291">
					contributor access
				</a>
				to the repositories with over 100 contributions. My contributions to the flutter framework are
				mostly around the theme, testing and fixing memory leaks.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a
					href="https://github.com/flutter/flutter/pulls?q=author%3AValentinVignal+"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
			</div>
		</article>
	</div>
</div>

<style>
	.actions {
		padding: 8px 0px;
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

	article {
		text-align: justify;
	}
</style>
