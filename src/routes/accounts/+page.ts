type Account = {
  url: string;
  name: string;
  icon: string;
}

const accounts: Account[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ValentinVignal',
    icon: 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png'
  },
  {
    name: 'StackOverflow',
    url: 'https://stackoverflow.com/users/12066144/valentin-vignal',
    icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/valentin-vignal',
    icon: 'https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/VignalValentin1',
    icon: 'https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png',
  },
  {
    name: 'Discord',
    url: 'https://discordapp.com/users/825997018605551647',
    icon: 'https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png',
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/user/ValentinVignalDev',
    icon: 'https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png',
  },
  {
    name: 'Google Play',
    url: 'https://play.google.com/store/apps/developer?id=Valentin+Vignal',
    icon: 'https://logos-world.net/wp-content/uploads/2020/12/Google-Play-Logo.png',
  },
];

export const load = () => ({ accounts });
