import { component$, useContextProvider, useSignal, useTask$ } from "@builder.io/qwik";
import { Projector } from "./projector";
import { searchContextId } from "./search_context_id";

export default component$(() => {

    const messageSignal = useSignal("");
    const llamaRedSignal = useSignal("black");


  useContextProvider(searchContextId,
    {
    messageSignal,
    llamaRedSignal
  })

  
  useTask$(({ track }) => {
    track(() => messageSignal.value);
    if (messageSignal.value.indexOf("llama") !== -1) {
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
      <Projector />
    </>
  );
});
