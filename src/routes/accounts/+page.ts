type Account = {
  url: string;
  name: string;
}

const accounts: Account[] = [
  {
    name: 'GitHub',
    'url': 'https://github.com/ValentinVignal',
  },
  {
    name: 'StackOverflow',
    url: 'https://stackoverflow.com/users/12066144/valentin-vignal'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/valentin-vignal'
  },
  {
    name: 'Twitter',
    'url': 'https://twitter.com/VignalValentin1',
  },
  {
    name: 'Discord',
    url: 'https://discordapp.com/users/825997018605551647',
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/user/ValentinVignalDev',
  },
  {
    name: 'Google Play',
    url: 'https://play.google.com/store/apps/developer?id=Valentin+Vignal',
  },
];

export const load = () => ({ accounts });
