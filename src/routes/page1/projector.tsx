import { component$, useContext } from "@builder.io/qwik";
import { searchContextId } from "./search_context_id";

export interface ProjectorProps {
  message: string;
  color: string;
}

export const Projector = component$(() => {

  const {messageSignal, llamaRedSignal} = useContext(searchContextId)
  return (
    <div>
      You typed:
      <span style={"color:" + llamaRedSignal.value}>{messageSignal.value}</span>
    </div>
  );
});
