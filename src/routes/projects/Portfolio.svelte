<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [SkillId.Svelte, SkillId.TypeScript, SkillId.Firebase];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<LogoTitle src="https://valentinvignal.github.io/portfolio/favicon.png" title="Portfolio" />
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>My portfolio website made with SvelteKit.</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/portfolio"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a
					href="https://valentinvignal.github.io/portfolio"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Demo</button>
				</a>
			</div>
			<h2>Libraries</h2>
			<ul>
				<li><a href="https://daisyui.com">daisyUI</a></li>
				<li><a href="https://tailwindcss.com/">tailwindcss</a></li>
				<li>
					<a href="https://github.com/steeze-ui/icons">@steeze-ui/heroicons</a>
				</li>
			</ul>
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
