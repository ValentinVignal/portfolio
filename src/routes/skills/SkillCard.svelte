<script lang="ts">
	import { building } from '$app/environment';
	import { page } from '$app/state';
	import type { Skill } from '$lib/data/skills';
	import { GTagEvent, gtagEvent } from '$lib/services/gtag';
	import { changeUrlSkill } from '$lib/services/redirect';
	import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const { skill, selected } = $props<{ skill: Skill; selected: boolean }>();

	let visible = $state(false);

	// This is because page.url.searchParams cannot be used in the server-side
	// rendering
	let link = $derived.by(() => (building ? '' : changeUrlSkill(page.url, skill.id).toString()));

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
	onmouseenter={() => (visible = true)}
	onmouseleave={() => (visible = false)}
>
	<div
		class="card card-bordered shadow-xl bg-base-300 hover:ring-2 hover:ring-accent/50"
		class:ring-2={selected}
		class:ring-accent={selected}
	>
		<a data-sveltekit-noscroll href={link} onclick={onSkillSelect}>
			<div class="card-body">
				<div class="card-title">
					<img
						src={`https://www.google.com/s2/favicons?domain=${skill.url}`}
						alt={`${skill.name} logo`}
					/>
					{skill.name}
				</div>
			</div>
		</a>
		{#if visible}
			<button class="link-icon btn btn-square m-4" transition:slide={{ axis: 'x' }}>
				<a href={skill.url} target="_blank" rel="noopener noreferrer">
					<Icon src={ArrowTopRightOnSquare} size="25" />
				</a>
			</button>
		{/if}
	</div>
</div>

<style>
	.card-title {
		position: relative;
	}

	.card {
		align-items: center;
		display: flex;
		flex-direction: row;
	}

	.link-icon {
		position: absolute;
		right: 0;
	}
</style>
