<script>
	import md from '$lib/assets/markdown/md.md?raw';
	import Bullets from '$lib/components/Bullets.svelte';
	import RainbowText from '$lib/components/RainbowText.svelte';
	import SubHeading from '$lib/components/SubHeading.svelte';
	import TextBox from '$lib/components/TextBox.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<RainbowText text={'Rainbow'} />
<TextBox text="text box" emoji="emoji" />
<SubHeading text="Sub heading" />
<Bullets
	items={[
		{ emoji: 'e1', text: 't1' },
		{ emoji: 'e2', text: 't2' }
	]}
/>

<p>{md}</p>
