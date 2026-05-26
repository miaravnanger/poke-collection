import { useEffect, useState } from "react";
import { getSets } from "../api/pokemonApi";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const openSet = (set) => {
    navigate(`/set/${set.id}`)
  }
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
      <div className="flex flex-col mt-25 w-fit mx-auto items-start rounded-xl overflow-hidden border-2 pt-15 pb-20 pr-5">
        <h5 className="text-l md:text-3xl mb-7 ml-13 rounded-xl overflow-hidden border-2 p-3">
          Recent drops
        </h5>
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          {sets.slice(0, 3).map((set) => (
            <div key={set.id}>
              <img
                className="transition-transform duration-200 hover:scale-105"
                src={set.images.logo}
                alt={set.name}
                onClick={() => openSet(set)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
        <button
          className="transition-transform duration-200 hover:opacity-60 mt-4 text-l md:text-3xl mb-7 ml-15  rounded-xl overflow-hidden border-2 p-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/sets")}
        >
          More
        </button>
      </div>
    </>
  );
}
