import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {

  const isProjectorVisibleSignal = useSignal(false)
    

  return (
    <div>
      This is Page 1
      <hr />
      <input
        type="text"
        placeholder="Type your search"
        onInput$={() => {
          isProjectorVisibleSignal.value = !isProjectorVisibleSignal.value;
        }}
      />
      {isProjectorVisibleSignal.value ? <Projector /> : <TestText />}
      <hr />
    </div>
  );
});

export const Projector = component$(() => {
  return <div>You typed:  </div>;
});

export const TestText = component$(() => {
  return <div>Test Text will DISPLAY</div>
})

// export default component$(() => {
//   const Exersize4Signal = useSignal(false);
//   Exersize4Signal.value;

//   return (
//     <div>
//       This is Page 1
//       <hr />
//       <input
//         type="text"
//         placeholder="Type your search"
//         onKeyUp$={(event) => console.log(event.key)}
//       />
//       <hr />
//       <Projector />
//     </div>
//   );
// });
