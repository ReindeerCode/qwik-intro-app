import type { Signal } from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";

export const beerContextID = createContextId<Signal<boolean>>("beerContext");
