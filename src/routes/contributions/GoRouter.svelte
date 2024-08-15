<script>
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [SkillId.GoRouter, SkillId.Flutter, SkillId.Dart];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<code>go_router</code>
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>
				I led multiple major releases and made multiple contributions the flutter packages <code
					>go_router</code
				>
				and <code>go_router_builder</code>. Those were mostly about imperative routing and code
				generation.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<ul>
				<li><a href="https://pub.dev/packages/go_router"><code>go_router</code></a></li>
				<li>
					<a href="https://pub.dev/packages/go_router_builder"><code>go_router_builder</code></a>
				</li>
			</ul>
			<div class="actions">
				<a
					href="https://github.com/flutter/flutter/issues?q=author%3AValentinVignal+label%3A%22p%3A+go_router_builder%22%2C%22p%3A+go_router%22+"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub issues</button>
				</a>
				<a
					href="https://github.com/flutter/packages/pulls?q=author%3AValentinVignal+label%3A%22p%3A+go_router_builder%22%2C%22p%3A+go_router%22"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub pull requests</button>
				</a>
			</div>
		</article>
	</div>
</div>

<style>
	article {
		text-align: justify;
	}
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
</style>
