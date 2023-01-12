
import { writable } from 'svelte/store';

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export const theme = writable(Theme.Dark);

export const toggleTheme: () => void = () => {
  theme.update((t) => {
    return t === Theme.Dark ? Theme.Light : Theme.Dark;
  });
}

