<script lang="ts">
	import { page } from '$app/stores';
	import type { Skill, SkillId } from '$lib/data/skills';
	import { GTagEvent, gtagEvent } from '$lib/services/gtag';
	import { changeUrlSkill } from '$lib/services/redirect';
	import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { beforeUpdate } from 'svelte';
	import { slide } from 'svelte/transition';

	export let skill: Skill;
	export let selected: boolean;

	let visible = false;

	let link = $page.url.toString();
	beforeUpdate(() => {
		link = changeUrlSkill($page.url, skill.id).toString();
	});

	const onSkillSelect = (): void => {
		gtagEvent({
			event: GTagEvent.SkillClick,
			data: {
				location: 'skill-page',
				selected: !selected,
				id: skill.id
			}
		});
	};
</script>

<div
	role="button"
	tabindex="0"
	class="card card-bordered shadow-xl bg-base-100 hover:ring-2 hover:ring-accent/50"
	class:ring-2={selected}
	class:ring-accent={selected}
	on:mouseenter={() => (visible = true)}
	on:mouseleave={() => (visible = false)}
>
	<a data-sveltekit-noscroll href={link} on:click={onSkillSelect}>
		<div class="card-body">
			<div class="card-title">
				<img
					src={`https://www.google.com/s2/favicons?domain=${skill.url}`}
					alt={`${skill.name} logo`}
				/>
				{skill.name}
				{#if visible}
					<button class="link-icon btn btn-square" transition:slide={{ axis: 'x' }}>
						<a href={skill.url} target="_blank" rel="noopener noreferrer">
							<Icon src={ArrowTopRightOnSquare} size="25" />
						</a>
					</button>
				{/if}
			</div>
		</div>
	</a>
</div>

<style>
	.card-title {
		position: relative;
	}

	.link-icon {
		position: absolute;
		right: 0;
	}
</style>
