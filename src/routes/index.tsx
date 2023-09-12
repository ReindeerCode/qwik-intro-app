import {
  Slot,
  component$,
  useContext,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { beerContextID } from "./beer_context_id";
import { BeerSelector } from "./beer_selector";

export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);
  const didHeGetABeerSignal = useSignal(false);

  useContextProvider(beerContextID, didHeGetABeerSignal);

  useTask$(({ track }) => {
    track(() => didHeGetABeerSignal.value);

    if (didHeGetABeerSignal.value) {
      isMiskoVisibleSignal.value = true;
    }
  });
  return (
    <>
      <BeerGiver />

      {isMiskoVisibleSignal.value ? (
        <Misko>
          <h5>
            This is an example of using QWIK's "Slot" component to do content
            projection. And, will appear on bottom.
          </h5>
        </Misko>
      ) : null}
    </>
  );
});

export const BeerGiver = component$(() => {
  const gotBeerSignal = useContext(beerContextID);
  return (
    <>
      <hr />

      <button
        onClick$={() => {
          gotBeerSignal.value = true;
        }}
      >
        Give Misko A Beer
      </button>
    </>
  );
});

export const Misko = component$(() => {
  return (
    <>
      <h5>
        This is the text contained in the Test component, and will appear on top
        because I placed the Slot tag below this text in the editor.
      </h5>
      <Slot />
      <BeerSelector />
    </>
  );
});
