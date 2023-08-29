import { Slot, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {

const isTestText1Visable = useSignal(false)

  return (
    <>
            <button onClick$={() => isTestText1Visable.value = !isTestText1Visable.value }>Button Text</button>
      {isTestText1Visable.value ? <Test /> :null}
    </>
  );
});

export const Test = component$(() => {
  return (
    <>
      <h3>Here is the test text</h3>
      
    </>
  );
});


