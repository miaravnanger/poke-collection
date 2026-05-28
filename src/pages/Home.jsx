import { useEffect, useState } from "react";
import { getSets } from "../api/pokemonApi";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const openSet = (set) => {
    navigate(`/set/${set.id}`);
  };
  const [sets, setSets] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSets()
      .then((data) => {
        console.log(data);
        setSets(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Feil:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col mt-25 w-fit mx-auto items-start rounded-xl overflow-hidden border-2 pt-15 pb-20 px-13 max-w-225">
        <h5 className="text-l md:text-3xl mb-7 w-full rounded-xl overflow-hidden border-2 p-3">
          Recent drops
        </h5>
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          {isLoading ? (
            <div className="flex gap-24 w-150 justify-center py-6">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            sets.slice(0, 3).map((set) => (
              <div key={set.id}>
                <img
                  className="transition-transform duration-200 hover:scale-105 w-full"
                  src={set.images.logo}
                  alt={set.name}
                  onClick={() => openSet(set)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))
          )}
        </div>
        <button
          className="transition-transform duration-200 hover:opacity-60 mt-4 text-l md:text-3xl mb-7 w-full rounded-xl overflow-hidden border-2 p-3 text-left"
          style={{ cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          More
        </button>
        {menuOpen && (
          <div className="bg-amber-50 text-black w-full ">
            {sets.slice(3, 13).map((set) => (
              <div
                className="transition-transform duration-200 hover:opacity-60 "
                key={set.id}
                onClick={() => openSet(set)}
                style={{ cursor: "pointer" }}
              >
                {set.name}
              </div>
            ))}
            <div className="w-full flex ">
              <button
                className="transition-transform duration-200 hover:opacity-60 mt-4 text-m md:text-2xl mb-7 rounded-xl overflow-hidden border-2 p-3 bg-blue-950 text-amber-50 text-right"
                onClick={() => navigate("/sets")}
                style={{ cursor: "pointer" }}
              >
                See all
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
