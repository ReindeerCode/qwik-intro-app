import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Projector } from "./projector";

export default component$(() => {
  const messageSignal = useSignal("");
  const llamaRedSignal = useSignal("black");
  
  useTask$(({ track }) => {
    track(() => messageSignal.value);
    if (messageSignal.value.indexOf("llama" || "Llama" || "LLAMA") !== -1) {
      llamaRedSignal.value = "red";
    } else {
      llamaRedSignal.value = "black";
    }
  });

  return (
    <>
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
      <Projector message={messageSignal.value} color={llamaRedSignal.value} />
    </>
  );
});
