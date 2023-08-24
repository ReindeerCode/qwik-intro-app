import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <Test />
      <div>Llamas Rule!</div>
      <HelloButton />
    </>
  );
});

export const Test = component$(() => {
  return <h1>Here is a New H1 Tag</h1>;
});

export const HelloButton = component$(() => {
  return <button onClick$={() => console.log("Hello")}>Click Me, Now!</button>;
});
