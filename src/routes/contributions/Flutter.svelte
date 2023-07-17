<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<LogoTitle
			src="https://storage.googleapis.com/cms-storage-bucket/4fd0db61df0567c0f352.png"
			title="Flutter"
		/>

		<article class="prose">
			<p>I made multiple contributions to the flutter framework, mostly around the theme.</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
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
</style>
