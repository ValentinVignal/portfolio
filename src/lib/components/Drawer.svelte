<script lang="ts">
	import { base } from '$app/paths';
	import ProfilePicture from '$lib/assets/images/profile-picture.jpg';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import DrawerItem from './DrawerItem.svelte';
</script>

<div class="drawer md:drawer-open">
	<input id="drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-start">
		<slot />
	</div>
	<div class="drawer-side z-10">
		<label for="drawer" class="drawer-overlay" />

		<div class="drawer-side-content bg-base-200">
			<a href="{base}/" class="profile-picture">
				<img src={ProfilePicture} alt="Profile" />
			</a>
			<ul class="menu w-80 text-base-content bg-base-200">
				<li>
					<DrawerItem href="/" text="Home" />
				</li>
				<li>
					<DrawerItem href="/education" text="Education" />
				</li>
				<li>
					<DrawerItem href="/work-experience" text="Work experience" />
				</li>
				<li>
					<DrawerItem href="/projects" text="Projects" />
				</li>
				<li>
					<DrawerItem href="/contributions" text="Contributions" />
				</li>
				<li>
					<DrawerItem href="/skills" text="Skills" />
				</li>
				<li>
					<DrawerItem href="/accounts" text="Accounts" />
				</li>
			</ul>
			<div class="bg-base-200">
				<div class="divider" />
				<div class="theme-switcher">
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		align-self: center;
		border-radius: 50%;
		aspect-ratio: 1;
		height: 100%;
		object-fit: cover;
	}
	.profile-picture {
		max-height: 200px;
		height: 25%;
		min-height: 100px;
		margin-top: 16px;
		justify-content: center;
		display: flex;
	}

	.drawer-side-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-width: 200px;
		height: 100%;
		/* overflow-y: auto; */
		padding: 16px 0px;
	}

	.theme-switcher {
		display: flex;
		justify-content: center;
		padding-left: 8px;
		padding-right: 8px;
		padding-bottom: 16px;
	}
</style>
