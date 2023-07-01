<script lang="ts">
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

		<ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
			<img src={ProfilePicture} alt="Profile" />
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
			<div class="divider" />
			<ThemeSwitcher />
		</ul>
	</div>
</div>

<style>
	img {
		width: 200px;
		height: 200px;
		align-self: center;
		border-radius: 50%;
		object-fit: cover;
	}
</style>
