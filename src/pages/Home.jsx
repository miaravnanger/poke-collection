import { useEffect, useState } from "react";
import { getSets } from "../api/pokemonApi";

export default function Home() {
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
      <h1>Pokemon Collection</h1>
      <ul>
        {sets.slice(0, 3).map((set) => (
          <li key={set.id}>
            <img src={set.images.logo} alt={set.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
