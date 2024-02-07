import { AtSymbol } from '@steeze-ui/heroicons';
import type { IconSource } from '@steeze-ui/svelte-icon';

type Account = {
  url?: string;
  name: string;
  logo: string | IconSource;
}

const accounts: Account[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ValentinVignal',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png'
  },
  {
    name: 'StackOverflow',
    url: 'https://stackoverflow.com/users/12066144/valentin-vignal',
    logo: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/valentin-vignal',
    logo: 'https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png',
  },
  {
    name: 'X',
    url: 'https://twitter.com/VignalValentin1',
    logo: 'https://logos-world.net/wp-content/uploads/2023/07/X-Logo.png',
  },
  {
    name: 'Discord',
    url: 'https://discordapp.com/users/825997018605551647',
    logo: 'https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png',
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/user/ValentinVignal',
    logo: 'https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png',
  },
  {
    name: 'Google Play',
    url: 'https://play.google.com/store/apps/developer?id=Valentin+Vignal',
    logo: 'https://logos-world.net/wp-content/uploads/2020/12/Google-Play-Logo.png',
  },
  {
    name: 'val.vignal@live.fr',
    logo: AtSymbol,
  },
];

export const load = () => ({ accounts });
