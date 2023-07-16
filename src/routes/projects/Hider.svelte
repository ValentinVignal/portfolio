<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<img src="https://hider-c122b.web.app/favicon.png" alt="Hider" class="h-8" />
			Hider
		</div>
		<article class="prose">
			<p>A Flutter application using firebase to store encrypted notes.</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a href="https://github.com/ValentinVignal/hider" target="_blank" rel="noopener noreferrer">
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a href="https://hider-c122b.web.app" target="_blank" rel="noopener noreferrer">
					<button class="btn btn-neutral">Demo</button>
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=com.valentinvignal.hider"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Play store</button>
				</a>
			</div>

			<h2>Libraries</h2>
			<ul>
				<li><a href="https://pub.dev/packages/built_value">built_value</a></li>
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

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	img {
		size: 25px;
		margin-right: 8px;
	}
</style>
