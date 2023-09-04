import {
  Signal,
  Slot,
  component$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";

export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);
  const didHeGetABeerSignal = useSignal(false);

  useTask$(({ track }) => {
    track(() => didHeGetABeerSignal.value);

    if (didHeGetABeerSignal.value) {
      isMiskoVisibleSignal.value = true;
    }
  });
  return (
    <>
      {/* <button
        onClick$={() =>
          (isMiskoVisibleSignal.value = !isMiskoVisibleSignal.value)
        }
      >
        Button Text
      </button> */}

      <BeerGiver gotBeerSignal={didHeGetABeerSignal} />
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

interface BeerGiverProps {
  gotBeerSignal: Signal<boolean>;
}

export const BeerGiver = component$((props: BeerGiverProps) => {
  return (
    <>
      <button
        onClick$={() => {
          props.gotBeerSignal.value = true;
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
