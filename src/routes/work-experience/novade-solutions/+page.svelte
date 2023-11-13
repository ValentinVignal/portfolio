<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
</script>

<article class="prose">
	<img
		src="https://www.novade.net/wp-content/uploads/2022/02/Novade-Solutions-Logo.png"
		alt="Novade"
		class="rounded h-16"
	/>
	<p>
		<a href="https://www.novade.net/">Novade Solutions</a>
		is a Singaporean company that provides a cloud-based platform for construction and real estate companies
		to manage their quality, safety and maintenance processes. I joined the company in 2019 as a software
		engineer and was promoted to senior software engineer in 2020.
	</p>

	<p>
		The project I worked on is a mobile (<a
			href="https://play.google.com/store/apps/details?id=net.novade.lite">Android</a
		>
		and <a href="https://apps.apple.com/sg/app/novade-lite-field-management/id1579805253">iOS</a>)
		and <a href="https://lite.novade.net/">web</a> application that allows construction and real
		estate companies to manage their work. The front end (web and mobile) are developed using
		<a href="https://flutter.dev/">Flutter</a>. The backend runs using
		<a href="https://www.typescriptlang.org/">TypeScript</a>
		and
		<a href="https://nodejs.org/en">node.js</a>
		using <a href="https://nestjs.com/">Nestjs</a> and <a href="https://typeorm.io/">TypeORM</a> to
		connect to a <a href="https://www.postgresql.org/">PostgreSQL</a> database. The API mostly uses
		<a href="https://graphql.org/">GraphQL</a> .
	</p>
</article>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" checked />
	<div class="collapse-title text-xl font-medium">
		<LogoTitle src="https://lite.novade.net/icons/favicon.png" title="Novade Lite" />
	</div>
	<div class="collapse-content">
		<div class="mockup-browser border border-info-content m-4">
			<div class="mockup-browser-toolbar">
				<div class="input border border-info-content">https://lite.novade.net/</div>
			</div>
			<div class="wrap-iframe">
				<iframe src="https://lite.novade.net" title="NovadeLite" />
			</div>
		</div>
		<article>
			<div class="actions">
				<a href="https://lite.novade.net" target="_blank" rel="noopener noreferrer">
					<button class="btn btn-neutral">Web</button>
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=net.novade.lite"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Android</button>
				</a>
				<a
					href="https://apps.apple.com/sg/app/novade-lite-field-management/id1579805253"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">iOS</button>
				</a>
			</div>
		</article>
	</div>
</div>

<article class="prose">
	<p>
		I joined the project in 2021 around 1 year after it started and work on it for 3 years. I worked
		on it as a senior full stack developer designing and implementing the technical solutions. I
		spent the most time on the front end of the web application which was the most complex part of
		the project.
	</p>

	<h3>Some achievements</h3>

	<ul>
		<li>
			Re-organized the front-end code base into a mono repo using <a
				href="https://melos.invertase.dev/"><code>melos</code></a
			>. It reduced the average time of the build runner from 40+minutes to around 2 minutes. It
			increased the caching performances and reduced the build and deployment time on the pipeline
			was reduced by 50%.
		</li>
		<li>
			Organized and architected the mobile and web routing system using <a
				href="https://pub.dev/packages/go_router"><code>go_router</code></a
			>.
		</li>
		<li>
			Revamped and standardized the state management solution using <a
				href="https://pub.dev/packages/riverpod"><code>riverpod</code></a
			> which increased the overall speed and performances.
		</li>
		<li>
			Revamped and re-designed the entire mobile and web application to use <a
				href="https://docs.flutter.dev/cookbook/design/themes">Flutter's theme</a
			>.
		</li>
		<li>
			Implemented a code generation tool to manage and use text localizations in a safe way which
			prevented numerous of recurring bugs.
		</li>
		<li>
			Implemented the main and most used and complex feature of the application: the form template
			builder. Similar to Google forms, it allow the user to define a form's structure and then
			create and fill several instances of it.
		</li>
		<li>Set up the frontend CI pipelines to ensure code style and tests success.</li>
		<li>
			Implemented the front end part of the in-app payment feature using <a
				href="https://stripe.com/">Stripe</a
			>.
		</li>
		<li>
			Kick started the use of <a href="https://docs.flutter.dev/testing">Flutter tests</a> which helped
			to prevent numerous bugs.
		</li>
	</ul>
</article>

<svelte:head>
	<title>Valentin Vignal - Novade</title>
</svelte:head>

<style>
	article {
		text-align: justify;
	}

	.wrap-iframe {
		height: calc(600px * 0.75);
		width: calc(100% / 0.75);
	}

	.wrap-iframe > iframe {
		zoom: 0.75;
		height: calc(600px / 0.75);
		width: 100%;
		transform: scale(0.75);
		transform-origin: 0 0;
	}

	.collapse {
		margin: 16px 0px;
	}
</style>
