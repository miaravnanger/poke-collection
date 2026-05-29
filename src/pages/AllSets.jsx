import { useEffect, useState } from "react";
import { getSets } from "../api/pokemonApi";
import { useNavigate } from "react-router-dom";

export default function AllSets() {
  const [sets, setSets] = useState([]);
  const navigate = useNavigate();
  const openSet = (set) => navigate(`/set/${set.id}`);

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
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 m-10">
        {sets.map((set) => (
          <div key={set.id}>
            <img
              className="transition-transform duration-200 hover:scale-105 w-full aspect-video object-contain max-w-37.5 mx-auto"
              src={set.images.logo}
              alt={set.name}
              onClick={() => openSet(set)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
