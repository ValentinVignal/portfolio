<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';
	const skills = [SkillId.TypeScript];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<LogoTitle
				src="https://lh3.googleusercontent.com/dSxbcdV0X7hw6eBVbEHZLDmJR-pTIRpjk86copdyXCdiqDa5AmoTOMTMwNIO4ULbfSw_OVrmA0HFckh4gtttHMBIdw=w128-h128-e365-rj-sc0x00ffffff"
				title="Chrome markdown emojis"
				round={true}
			/>
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>A TypeScript Google Chrome extension to insert emojis from their markdown code.</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/chrome-markdown-emojis"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a
					href="https://chrome.google.com/webstore/detail/chrome-markdown-emojis/mojhbkjckfdaikbpfmmlfimchemiabln"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Webstore</button>
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
