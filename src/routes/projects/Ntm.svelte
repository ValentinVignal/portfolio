<script lang="ts">
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const ntmSkills = [SkillId.Dart];
	const ntmPadSkills = [SkillId.Dart, SkillId.Flutter, SkillId.Riverpod, SkillId.Firebase];
	const ntmVSCodeSkills = [SkillId.VSCode];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			ntm
			<Skills skillIds={ntmSkills} />
		</div>
		<article class="prose">
			<p>
				A programming language built on top of dart inspired from <a
					href="https://www.craftinginterpreters.com/index.html"
				>
					Crafting interpreter</a
				>.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<div class="divider"></div>
		<article class="prose">
			<p>
				Ntm is composed of scanner and a parser which create an AST. The interpreter interprets the
				AST.
			</p>
			<p>
				It comes with a command line tool to interpret ntm code from a file or an interactive
				console.
			</p>

			<div class="actions">
				<a href="https://github.com/Novade/ntm" target="_blank" rel="noopener noreferrer">
					<button class="btn btn-neutral">GitHub</button>
				</a>
			</div>
		</article>
		<div class="sub-title">
			<article class="prose">
				<h2>ntm_pad</h2>
			</article>
			<div class="w-4"></div>
			<Skills skillIds={ntmPadSkills} />
		</div>
		<article class="prose">
			<p>It is a web app that allows you to write and run ntm code in your browser. Try out</p>
		</article>

		<div class="mockup-code">
			<pre data-prefix="1"><code>fun add(a, b) {'{'}</code></pre>
			<pre data-prefix="2"><code>  return a + b;</code></pre>
			<pre data-prefix="3"><code>{'}'}</code></pre>
			<pre data-prefix="4"><code>var a = 1;</code></pre>
			<pre data-prefix="5"><code>var c = add(a, 2);</code></pre>
			<pre data-prefix="6"><code>print c;</code></pre>
		</div>
		<article class="prose">
			<div class="actions">
				<a href="https://github.com/Novade/ntm_flutter" target="_blank" rel="noopener noreferrer">
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a href="https://ntm-pad.web.app" target="_blank" rel="noopener noreferrer">
					<button class="btn btn-neutral">Demo</button>
				</a>
			</div>

			<iframe src="https://ntm-pad.web.app" title="ntm_pad" height="400"></iframe>
		</article>
		<div class="sub-title">
			<article class="prose">
				<h2>ntm-vscode</h2>
			</article>
			<div class="w-4"></div>
			<Skills skillIds={ntmVSCodeSkills} />
		</div>

		<article class="prose">
			<p>A VSCode extension that allows you to highlight ntm code.</p>

			<div class="actions">
				<a href="https://github.com/Novade/ntm-vscode" target="_blank" rel="noopener noreferrer">
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a
					href="https://marketplace.visualstudio.com/items?itemName=valentin-vignal.ntm"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Extension</button>
				</a>
			</div>

			<h2>Libraries</h2>

			<ul>
				<li><a href="https://pub.dev/packages/melos">Melos</a></li>
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

	.sub-title {
		display: flex;
		align-self: center;
	}

	.collapse-title {
		z-index: 1;
		pointer-events: none;
	}
	.collapse-title a {
		pointer-events: all;
	}
</style>
