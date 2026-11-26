<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
</script>

<article class="prose">
	<img src="https://artafinance.com/share_thumb.png" alt="Arta Finance" class="rounded h-16" />
	<p>
		<a href="https://artafinance.com">Arta Finance</a> is a Singapore-based fintech company that provides
		innovative financial solutions to individuals and businesses. It offers a range of services, including
		digital banking, lending, and investment products, with a focus on leveraging technology to enhance
		the customer experience.
	</p>
</article>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" checked />
	<div class="collapse-title text-xl font-medium">
		<LogoTitle src="https://artafinance.com/share_thumb.png" title="Arta Finance" />
	</div>
	<div class="collapse-content">
		<div class="mockup-browser border border-info-content m-4">
			<div class="mockup-browser-toolbar">
				<div class="input border border-info-content">https://app.artafinance.com</div>
			</div>
			<div class="wrap-iframe">
				<iframe src="https://app.artafinance.com" title="Arta Finance"></iframe>
			</div>
		</div>
		<article>
			<div class="actions">
				<a href="https://app.artafinance.com" target="_blank" rel="noopener noreferrer">
					<button class="btn btn-neutral">Web</button>
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=com.artafinance.user"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Android</button>
				</a>
				<a
					href="https://apps.apple.com/us/app/arta-finance/id1666186495"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">iOS</button>
				</a>
			</div>
		</article>
	</div>
</div>

<svelte:head>
	<title>Valentin Vignal - Arta Finance</title>
</svelte:head>
