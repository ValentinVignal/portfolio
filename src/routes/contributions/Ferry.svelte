<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [
		SkillId.Ferry,
		SkillId.BuiltValue,
		SkillId.Flutter,
		SkillId.Dart,
		SkillId.GraphQL
	];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<LogoTitle src="https://ferrygraphql.com/img/favicon.ico" title="Ferry">
				<code>ferry</code>
			</LogoTitle>
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>
				I made <a href="https://github.com/gql-dart/ferry/issues?q=author%3AValentinVignal+"
					>multiple contributions</a
				>
				to <code>ferry</code>, one of them to allow different request to reuse the same shared and
				cached stream.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<div class="actions">
					<a href="https://pub.dev/packages/ferry" target="_blank" rel="noopener noreferrer">
						<button class="btn btn-neutral">pub.dev</button>
					</a>
					<a
						href="https://github.com/gql-dart/ferry/issues?q=author%3AValentinVignal+"
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
