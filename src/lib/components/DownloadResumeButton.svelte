<script lang="ts">
	import { ArrowDownTray } from '@steeze-ui/heroicons';
	import Resume from '$lib/assets/ValentinVignal.pdf';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { GTagEvent, gtagEvent } from '$lib/services/gtag';

	const handleClick = (): void => {
		gtagEvent({
			event: GTagEvent.DownloadResume
		});
	};
</script>

<a
	class="btn btn-square"
	download="ValentinVignal.pdf"
	target="_blank"
	href={Resume}
	title="Download my resume"
	on:click={handleClick}
>
	<Icon src={ArrowDownTray} size="24" />
</a>
