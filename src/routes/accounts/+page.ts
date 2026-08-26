import { AtSymbol } from '@steeze-ui/heroicons';
import type { IconSource } from '@steeze-ui/svelte-icon';

type Account = {
	url?: string;
	name: string;
	logo: string | IconSource;
};

const accounts: Account[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/ValentinVignal',
		logo: 'https://favicon.run/favicon?domain=github.com&sz=256'
	},
	{
		name: 'StackOverflow',
		url: 'https://stackoverflow.com/users/12066144/valentin-vignal',
		logo: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico'
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/valentin-vignal',
		logo: 'https://favicon.run/favicon?domain=linkedin.com&sz=256'
	},
	{
		name: 'X',
		url: 'https://twitter.com/VignalValentin1',
		logo: 'https://favicon.run/favicon?domain=x.com&sz=256'
	},
	{
		name: 'Discord',
		url: 'https://discordapp.com/users/825997018605551647',
		logo: 'https://favicon.run/favicon?domain=discord.com&sz=256'
	},
	{
		name: 'Reddit',
		url: 'https://www.reddit.com/user/ValentinVignal',
		logo: 'https://favicon.run/favicon?domain=reddit.com&sz=256'
	},
	{
		name: 'Google Play',
		url: 'https://play.google.com/store/apps/developer?id=Valentin+Vignal',
		logo: 'https://favicon.run/favicon?domain=play.google.com&sz=256'
	},
	{
		name: 'val.vignal@live.fr',
		logo: AtSymbol
	}
];

export const load = () => ({ accounts });
