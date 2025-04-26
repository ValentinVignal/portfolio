<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';

	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [SkillId.Drift, SkillId.Flutter, SkillId.Dart, SkillId.SQLite];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<LogoTitle
				src="https://www.google.com/s2/favicons?domain=https://drift.simonbinder.eu"
				title="Drift"
			>
				<code>drift</code>
			</LogoTitle>
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>
				I made multiple contributions to <code>drift</code>, mostly on <code>drift_dev</code> which is
				the code generator.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<div class="actions">
					<a href="https://pub.dev/packages/drift" target="_blank" rel="noopener noreferrer">
						<button class="btn btn-neutral">pub.dev</button>
					</a>
					<a
						href="https://github.com/simolus3/drift/pulls?q=author%3AValentinVignal+"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button class="btn btn-neutral">GitHub</button>
					</a>
				</div>
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

	article {
		text-align: justify;
	}
</style>
