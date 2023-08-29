import { Slot, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {

const isTestText1VisableSignal = useSignal(false)

  return (
    <>
            <button onClick$={() => isTestText1VisableSignal.value = !isTestText1VisableSignal.value }>Button Text</button>
      {isTestText1VisableSignal.value ? <Test>This is an example of using QWIK's "Slot" component to do content projection.</Test> :null}
    </>
  );
});

export const Test = component$(() => {
  return (
    <>
      <h3>Here is the test text</h3>
      <Slot/>
    </>
  );
});


