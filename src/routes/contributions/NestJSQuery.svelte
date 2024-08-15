<script>
	import LogoTitle from '$lib/components/LogoTitle.svelte';
	import { SkillId } from '$lib/data/skills';
	import Skills from '../../lib/components/Skills.svelte';

	const skills = [
		SkillId.NestjsQuery,
		SkillId.NestJS,
		SkillId.GraphQL,
		SkillId.PostgresQL,
		SkillId.TypeScript
	];
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<div class="title">
			<LogoTitle src="https://tripss.github.io/nestjs-query/img/favicon.ico" title="Nestjs-query" />
			<Skills skillIds={skills} />
		</div>
		<article class="prose">
			<p>
				I made multiple contributions to <code>nestjs-query</code> mostly around the graphql API.
			</p>
		</article>
	</div>
	<div class="collapse-content">
		<article class="prose">
			<div class="actions">
				<div class="actions">
					<a
						href="https://tripss.github.io/nestjs-query/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button class="btn btn-neutral">Website</button>
					</a>
					<a
						href="https://github.com/TriPSs/nestjs-query/pulls?q=author%3AValentinVignal+"
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

	article {
		text-align: justify;
	}
</style>
