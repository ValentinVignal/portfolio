<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';
	const skills = [SkillId.Kotlin, SkillId.SQLite, SkillId.JetpackCompose, SkillId.Android];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<LogoTitle
				src="https://play-lh.googleusercontent.com/jfiL0RHqP0td5nyFcigXBPSdbTsa5s0iras4S8F-7NEGN6pFaKcLdNGZWTVoO5XEeSQ"
				title="NotificationBlocker"
			/>
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>An android application to manage your notifications</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/NotificationBlocker"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=com.valentinvignal.notificationblocker"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Play store</button>
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
</style>
