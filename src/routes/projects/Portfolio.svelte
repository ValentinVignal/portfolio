<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		Portfolio
		<article class="prose">
			<p>My portfolio website made with SvelteKit.</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/portfolio"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a
					href="https://valentinvignal.github.io/portfolio"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Demo</button>
				</a>
			</div>
			<h2>Libraries</h2>
			<ul>
				<li><a href="https://daisyui.com">daisyUI</a></li>
				<li><a href="https://tailwindcss.com/">tailwindcss</a></li>
				<li><a href="https://www.npmjs.com/package/svelte-hero-icons">svelte-hero-icons</a></li>
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
</style>
