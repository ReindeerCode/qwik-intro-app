import type { Signal} from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";


export interface SearchContextState{
 messageSignal: Signal<string>
 colorSignal: Signal<boolean>
}
export const searchContextID = createContextId('searchContext')