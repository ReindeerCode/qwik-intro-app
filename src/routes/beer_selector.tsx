import { component$ } from "@builder.io/qwik";

export interface Beer {
  name: string;
}

export const BeerSelector = component$(() => {
  const beers: Beer[] = [{ name: "ale" }, { name: "Stout" }];

  return (
    <div>
      <select>
        {beers.map((beer) => (
          <option>{beer.name}</option>
        ))}
      </select>
    </div>
  );
});
