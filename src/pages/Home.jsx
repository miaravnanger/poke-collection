import { useState } from "react";
import { useSets } from "../hooks/useSets";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [sets, isLoading] = useSets()
  const navigate = useNavigate();
  const openSet = (set) => {
    navigate(`/set/${set.id}`);
  };
  const [menuOpen, setMenuOpen] = useState(false);

 

  return (
    <>
      <div
        className="flex flex-col mt-8 sm:mt-25 w-fit mx-auto items-start rounded-xl pt-15 pb-20 px-13 max-w-225 backdrop-blur-[2px] bg-white/8 border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
      >
        <h5 className="text-l md:text-3xl mb-7 w-full rounded-xl overflow-hidden border-2 p-3">
          Recent drops
        </h5>
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          {isLoading ? (
            <div className="flex gap-8 md:gap-24 w-full justify-center py-6">
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
