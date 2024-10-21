<script lang="ts">
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [SkillId.Flutter, SkillId.Dart];

	const vscodeSkills = [SkillId.VSCode, SkillId.TypeScript];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			Themed color palette
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>
				A dart builder to create theme classes from a <code>.yaml</code> file.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/themed_color_palette"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a
					href="https://pub.dev/packages/themed_color_palette"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">pub.dev</button>
				</a>
			</div>
		</article>
		<div class="sub-title">
			<article class="prose">
				<h2>themed-color-palette-vscode-extension</h2>
			</article>
			<div class="w-4"></div>
			<Skills skillIds={vscodeSkills} />
		</div>
		<article class="prose">
			<p>
				A VSCode extension written in TypeScript to lint a <code>.theme.yaml</code> file used for
				<code>themed_color_palette</code>.
			</p>

			<div class="actions">
				<a
					href="https://github.com/ValentinVignal/themed-color-palette-vscode-extension"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">GitHub</button>
				</a>
				<a
					href="https://marketplace.visualstudio.com/items?itemName=valentin-vignal.themed-color-palette-vscode-extension"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="btn btn-neutral">Extension</button>
				</a>
			</div>
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

	.sub-title {
		display: flex;
		align-self: center;
	}
</style>
