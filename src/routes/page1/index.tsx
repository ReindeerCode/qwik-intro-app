import { Slot, component$, useSignal } from "@builder.io/qwik";
import { Projector } from "./projector";

export default component$(() => {
  const messageSignal = useSignal("");

  return (
    <div>
      This is Page 1
      <hr />
      <input
        type="text"
        placeholder="Type your search"
        onInput$={(event) => {
          messageSignal.value = (event.target as HTMLInputElement).value;
        }}
      />
      <hr />
      <Projector message={messageSignal.value} >
      Your message is:
      </Projector>
    </div>
  );
});

//You originally thought the assignment was to simply have the "You typed:" message appear after test is entered into the input box, and to do this with a new component. I was supposed to create that component in a separate file and pass it into this file, and have it so the users input is shown after the "You typed:" message.

// Below is your original solution, corrected code is above

// export default component$(() => {
//   const isProjectorVisibleSignal = useSignal(false);

//   return (
//     <div>
//       This is Page 1
//       <hr />
//       <input
//         type="text"
//         placeholder="Type your search"
//         onInput$={() => {
//           isProjectorVisibleSignal.value = !isProjectorVisibleSignal.value;
//         }}
//       />
//       {isProjectorVisibleSignal.value ? <Projector /> : null}
//       <hr />
//     </div>
//   );
// });

// export const Projector = component$(() => {
//   return <div>You typed: </div>;
// });
