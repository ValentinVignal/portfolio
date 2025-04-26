export const enum ThemeId {
	default = 'default',
	dark = 'dark',
	light = 'light',
	halloween = 'halloween',
	forest = 'forest',
	dracula = 'dracula',
	night = 'night',
	sunset = 'sunset',
	black = 'black'
}

export const options: [ThemeId, string][] = [
	[ThemeId.default, 'Default'],
	[ThemeId.dark, 'Dark'],
	[ThemeId.light, 'Light'],
	[ThemeId.halloween, 'Halloween'],
	[ThemeId.forest, 'Forest'],
	[ThemeId.dracula, 'Dracula'],
	[ThemeId.night, 'Night'],
	[ThemeId.sunset, 'Sunset'],
	[ThemeId.black, 'Black']
];
