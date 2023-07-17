<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<LogoTitle src="https://ferrygraphql.com/img/favicon.ico" title="Ferry">
			<code>ferry</code>
		</LogoTitle>
		<article class="prose">
			<p>
				I made multiple contributions to <code>ferry</code>, one of them to allow different request
				to reuse the same shared and cached stream.
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
</style>
