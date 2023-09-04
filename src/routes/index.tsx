import { Slot, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const isTestText1VisableSignal = useSignal(false);

  return (
    <>
      <button
        onClick$={() =>
          (isTestText1VisableSignal.value = !isTestText1VisableSignal.value)
        }
      >
        Button Text
      </button>
      {isTestText1VisableSignal.value ? (
        <Test>
          <h3>
            This is an example of using QWIK's "Slot" component to do content
            projection. And, will appear on bottom. 
          </h3>
        </Test>
      ) : null}
    </>
  );
});

export const Test = component$(() => {
  return (
    <>
      <h3>
        This is the text contained in the Test component, and will appear on top because I placed the Slot tag below this text in the editor.
      </h3>
      <Slot />
    </>
  );
});
