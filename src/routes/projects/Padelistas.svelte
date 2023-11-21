<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';
	const skills = [
		SkillId.Flutter,
		SkillId.Dart,
		SkillId.Riverpod,
		SkillId.GoRouter,
		SkillId.Freezed,
		SkillId.Firebase
	];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<LogoTitle src="https://padelistas-app.web.app/favicon.svg" title="Padelistas" />
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>A Flutter application using firebase to manage padel bookings in Singapore.</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/padelistas"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a href="https://padelistas-app.web.app" target="_blank" rel="noopener noreferrer">
					<button class="btn btn-neutral">Demo</button>
				</a>
			</div>

			<div class="mockup-phone border-primary">
				<div class="camera" />
				<div class="display">
					<iframe src="https://padelistas-app.web.app/" title="padelistas" height="600" />
				</div>
			</div>

			<h2>Libraries</h2>
			<ul>
				<li><a href="https://pub.dev/packages/cloud_firestore">cloud_firestore</a></li>
				<li><a href="https://pub.dev/packages/freezed">freezed</a></li>
				<li><a href="https://pub.dev/packages/go_router">go_router</a></li>
				<li><a href="https://pub.dev/packages/riverpod">riverpod</a></li>
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

	.mockup-phone {
		margin-top: 24px;
	}
	iframe {
		padding-top: 16px;
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
