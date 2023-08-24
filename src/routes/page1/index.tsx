import { component$,  } from '@builder.io/qwik';


export default component$(() => {

  // onInput$={console.log('keyup')}

  return (
    <div>
      This is Page 1
      <hr />
      <input
        type="text"
        placeholder="Type your search"
        onKeyUp$={() => console.log(KeyboardEvent)}
      />
      <hr />
      <div>You typed: </div>
    </div>
  );
});