import { createStore } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

const queryAtom = atomWithQuery<{ a: 3 }>(() => ({
  queryKey: [`/api/players/3`],
}));

const s = createStore().get(queryAtom);

s.data;
