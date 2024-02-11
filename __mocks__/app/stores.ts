import type { Subscriber } from "svelte/store";

const pageStoreMock = {
  subscribe: (fn: Subscriber<unknown>) => {
    fn({
      url: {
        pathname: 'url',
      }
    });
    return {
      unsubscribe: () => { }
    }
  }

};

export const page = pageStoreMock;
