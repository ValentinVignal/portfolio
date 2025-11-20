<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="checkbox" checked />
	<div class="collapse-title text-xl font-medium">Music</div>
	<div class="collapse-content">
		<table class="table">
			<tbody>
				{#each data.music as music (music.name)}
					<tr>
						<td class="w-20">
							<div class="avatar">
								<div class="mask mask-squircle h-16 w-16">
									<img src={music.logo} alt={music.name} />
								</div>
							</div>
						</td>
						<td>
							<div class="flex flex-col text-xl font-bold">{music.name}</div>
						</td>
						<td>
							<a href={music.youtube}>
								<img
									class="h-16 w-full object-contain"
									src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png
"
									alt="Youtube {music.name}"
								/></a
							>
						</td>
						<td>
							<a href={music.spotify}>
								<img
									class="h-16 w-full object-contain"
									src="https://logos-world.net/wp-content/uploads/2020/10/Spotify-Logo.png"
									alt="Spotify {music.name}"
								/>
							</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<svelte:head>
	<title>Valentin Vignal - Hobbies</title>
</svelte:head>
