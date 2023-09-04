// as part of an exercise, I added the Slot in the below Projector component. They had me revert the component to the pre exercise condition at the end of the exercise, but I wanted to keep the change and notes somewhere so I created this copy file and a copy of the index file.

import { Slot, component$ } from "@builder.io/qwik";

export interface ProjectorProps {
    message: string;
}

export const Projector = component$((props:ProjectorProps) => {
    return <div><Slot/> {props.message}</div>;
})