import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return <>
<Test/>
  <div>Llamas Rule!</div></>;
});


export const Test = component$(() => {
  return <h1>Here is a New H1 Tag</h1>
})
