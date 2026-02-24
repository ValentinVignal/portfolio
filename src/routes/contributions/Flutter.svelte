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
				to the repositories with over
				<a
					href="https://github.com/flutter/flutter/pulls?q=is%3Apr+author%3AValentinVignal+state%3Amerged"
					>150 contributions</a
				>. My contributions to the flutter framework are mostly around the theme, material widgets,
				testing and fixing memory leaks.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<ul>
				<li>
					Top 1 2024 contributor (<a href="https://flutterwrapped.codemagic.app/#/home">here</a> or
					<a href="https://x.com/TahaTesser/status/1868747289872977987?s=20">here</a>)
				</li>
				<li>
					<a
						href="https://docs.google.com/document/d/1cE-oE1ULMeoguPDBKAqWY5AwQOuyZae-NF9v-2YhD9Y/edit?usp=sharing"
						>Top 5 2025 contributor</a
					>
				</li>
				<li>I'm a talker at the Flutter Singapore meetup.</li>

				<li>
					I've been mentioned in Flutter's notable commits. For example:
					<ul>
						<li>
							<a href="https://github.com/flutter/flutter/issues/121415#issuecomment-2465885271"
								>This one</a
							>
							or
							<a href="https://github.com/flutter/flutter/issues/121415#issuecomment-2495120324"
								>this one</a
							> about testing flutter examples.
						</li>
					</ul>
				</li>
			</ul>

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
