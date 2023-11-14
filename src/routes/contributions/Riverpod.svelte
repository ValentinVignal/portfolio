<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';

	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [SkillId.Riverpod, SkillId.Flutter, SkillId.Dart];
</script>

<!-- TODO: Mention youtube video Remi mentioning me -->
<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<LogoTitle title="Riverpod" src="https://riverpod.dev/img/logo.svg">
				<code>riverpod</code>
			</LogoTitle>
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>
				I made multiple contributions to <code>riverpod</code>, mostly around
				<code>riverpod_graph</code>.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<p>
				Rémi Rousselet, the creator of<code>riverpod</code>,
				<a href="https://www.youtube.com/watch?v=CzHt_uwmlXM&t=66s">mentioned me in his talk</a>
				at <a href="https://fluttervikings.com/">Flutter Vikings</a> 2022.
			</p>
			<ul>
				<li>
					<a href="https://github.com/rrousselGit/riverpod/tree/master/packages/riverpod_graph"
						><code>riverpod_graph</code></a
					>
				</li>
			</ul>
			<div class="actions">
				<div class="actions">
					<a href="https://pub.dev/packages/riverpod" target="_blank" rel="noopener noreferrer">
						<button class="btn btn-neutral">pub.dev</button>
					</a>
					<a
						href="https://github.com/rrousselGit/riverpod/issues?q=author%3AValentinVignal+"
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
		justify-content: space-between;
	}
	.collapse-title {
		z-index: 1;
		pointer-events: none;
	}
</style>
