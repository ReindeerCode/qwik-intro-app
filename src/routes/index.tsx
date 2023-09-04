import { Slot, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);

  return (
    <>
      <button
        onClick$={() =>
          (isMiskoVisibleSignal.value = !isMiskoVisibleSignal.value)
        }
      >
        Button Text
      </button>
      {isMiskoVisibleSignal.value ? (
        <Misko>
          <h3>
            This is an example of using QWIK's "Slot" component to do content
            projection. And, will appear on bottom.
          </h3>
        </Misko>
      ) : null}
    </>
  );
});

export const Misko = component$(() => {
  return (
    <>
      <h3>
        This is the text contained in the Test component, and will appear on top
        because I placed the Slot tag below this text in the editor.
      </h3>
      <Slot />
    </>
  );
});

// import { Signal, Slot, component$, useSignal } from "@builder.io/qwik";

// export default component$(() => {
//   const isTestText1VisableSignal = useSignal(false);
//   const didTestTextGetSeenSignal = useSignal(false);

//   return (
//     <>
//       <button
//         onClick$={() =>
//           (isTestText1VisableSignal.value = !isTestText1VisableSignal.value)
//         }
//       >
//         Button Text
//       </button>

//       <TestTextSeer gotTestTextSignal={didTestTextGetSeenSignal}/>

//       {isTestText1VisableSignal.value ? (
//         <Test>
//           <h3>
//             This is an example of using QWIK's "Slot" component to do content
//             projection. And, will appear on bottom.
//           </h3>
//         </Test>
//       ) : null}
//     </>
//   );
// });

// interface TestTextSeerProps{
//   gotTestTextSignal: Signal<boolean>
// }

// export const TestTextSeer = component$((props: TestTextSeerProps ) => {
//   return (
//     <>
//       <button onClick$={() =>{
//         props.gotTestTextSignal.value = true
//       }}>
//         Click Me To See Text Text
//         </button>
//     </>
//   );

// export const Test = component$(() => {
//   return (
//     <>
//       <h3>
//         This is the text contained in the Test component, and will appear on top because I placed the Slot tag below this text in the editor.
//       </h3>
//       <Slot />
//     </>
//   );
// });
