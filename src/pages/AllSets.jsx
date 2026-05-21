import { useEffect, useState } from "react";
import { getSets } from "../api/pokemonApi";


export default function AllSets() {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    getSets()
      .then((data) => {
        console.log(data);
        setSets(data);
      })
      .catch((err) => console.log("Feil:", err));
  }, []);

  return (
    <>
      <h1>All sets</h1>
      <ul>
        {sets.map((set) => (
          <li key={set.id}>{set.name}</li>
        ))}
      </ul>
    </>
  );
}
