<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
</script>

<article class="prose">
	<img
		src="https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Prudential-plc-1986.svg/1920px-Prudential-plc-1986.svg.png"
		alt="Prudential plc"
		class="rounded h-16"
	/>
	<p>
		<a href="https://www.prudentialplc.com/">Prudential plc</a> is a multinational insurance and asset
		management company. It provides loans to professional and working people.
	</p>

	<h2 class="mt-4">PruServices Project</h2>

	<p class="text-sm">
		PruServices is Prudential's customer-facing application designed to help users manage their
		insurance policies efficiently. It provides features such as policy tracking, claims submission,
		premium payments, and personalized recommendations, ensuring a seamless and user-friendly
		experience.
	</p>
</article>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" checked />
	<div class="collapse-title text-xl font-medium">
		<LogoTitle
			src="https://pruservices.prudential.com.sg/app/icons/Icon-512.png"
			title="PruServices"
		/>
	</div>
	<div class="collapse-content">
		<div class="mockup-browser border border-info-content m-4">
			<div class="mockup-browser-toolbar">
				<div class="input border border-info-content">
					https://pruservices.prudential.com.sg/app
				</div>
			</div>
			<div class="wrap-iframe">
				<iframe src="https://pruservices.prudential.com.sg/app" title="PruServices"></iframe>
			</div>
		</div>
		<article>
			<div class="actions">
				<a
					href="https://pruservices.prudential.com.sg/app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Web</button>
				</a>
			</div>
		</article>
	</div>
</div>

<article class="prose">
	<p class="text-sm mt-2">
		<strong>Tools and technologies:</strong>
		<span class="text-xs"
			>Flutter, Dart, TypeScript, GraphQL, Node.js, NestJS, REST, Socket.io, Mixpanel, Firebase,
			Sentry, Git, Bash</span
		>.
	</p>

	<ul class="list-disc pl-6 mt-3">
		<li>
			Designed and implemented the architecture and structure for Flutter projects and packages.
		</li>
		<li>
			Managed and maintained package dependencies and Flutter SDK versions to ensure compatibility
			and stability.
		</li>
		<li>Led a team of 5 developers to deliver high-quality software solutions.</li>
		<li>
			Spearheaded the Design Language System (DLS) initiative, establishing consistent UI/UX
			standards across multiple projects.
		</li>
		<li>
			Mentored junior developers through code reviews and knowledge-sharing sessions, promoting
			continuous learning and development.
		</li>
		<li>
			Delivered technical training sessions and workshops on Flutter best practices and advanced
			development techniques.
		</li>
		<li>
			Established automated CI/CD pipelines to streamline testing, building, and deployment
			workflows.
		</li>
	</ul>
</article>

<svelte:head>
	<title>Valentin Vignal - Prudential plc</title>
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
