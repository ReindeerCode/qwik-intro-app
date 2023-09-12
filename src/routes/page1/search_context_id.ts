import type { Signal } from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";

export interface SearchContextState {
  messageSignal: Signal<string>;
  llamaRedSignal: Signal<string>;
}
export const searchContextId =
  createContextId<SearchContextState>("searchContext");
