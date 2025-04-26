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
			<LogoTitle src="https://period-ik.web.app//favicon.png" title="Periodik" />
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>A Flutter application to find the periodicity of some events based on the instances.</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/periodik"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a href="https://period-ik.web.app" target="_blank" rel="noopener noreferrer">
					<button class="btn btn-neutral">Demo</button>
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=com.valentinvignal.periodik"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Play store</button>
				</a>
			</div>
			<div class="mockup-phone border-primary">
				<div class="camera"></div>
				<div class="display">
					<iframe src="https://period-ik.web.app/" title="periodik" height="600"></iframe>
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
