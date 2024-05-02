<script lang="ts">
	import { base } from '$app/paths';
	import ProfilePicture from '$lib/assets/images/profile-picture.jpg?enhanced';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import {
		BuildingLibrary,
		BuildingOffice,
		CodeBracket,
		CommandLine,
		DocumentText,
		Hashtag,
		Home,
		User
	} from '@steeze-ui/heroicons';
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
				<enhanced:img src={ProfilePicture} alt="Profile" class="image" sizes="min(100px, 100vw)" />
			</a>
			<ul class="menu w-80 text-base-content bg-base-200">
				<DrawerItem href="/" text="Home" icon={Home} />
				<DrawerItem href="/education" text="Education" icon={BuildingLibrary} />
				<DrawerItem href="/work-experience" text="Work experience" icon={BuildingOffice} />
				<DrawerItem href="/projects" text="Projects" icon={CommandLine} />
				<DrawerItem href="/contributions" text="Contributions" icon={CodeBracket} />
				<DrawerItem href="/skills" text="Skills" icon={Hashtag} />
				<DrawerItem href="/accounts" text="Accounts" icon={User} />
				<DrawerItem href="/resume" text="My Resume" icon={DocumentText} />
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
	.image {
		max-width: 200px;
		border-radius: 50%;
		aspect-ratio: 1;
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
		padding: 16px 0px;
	}

	.theme-switcher {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-left: 8px;
		padding-right: 8px;
		padding-bottom: 16px;
	}

	.drawer-content {
		height: 100vh;
	}
</style>
