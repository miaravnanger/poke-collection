import { useParams } from "react-router-dom";
import { getCards, getSetsById } from "../api/pokemonApi";
import { useState, useEffect } from "react";


export default function SetDetail() {
const {setId} = useParams()

const [cards, setCards] = useState([]);

const [sets, setSets] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  getCards(setId).then((data) => {
    console.log(data);
    setCards(data);
     setIsLoading(false);
  })
    .catch((err) => {
      console.log("Feil:", err);
      setIsLoading(false);
    });
}, [setId]);

useEffect(() => {
  getSetsById(setId)
    .then((data) => {
      console.log(data);
      setSets(data);
    })
    .catch((err) => console.log("Feil:", err));
}, [setId]);

  return (
    <>
      <div className="flex flex-col items-center">
        <img src={sets.images?.logo} alt={sets.name} />
      </div>
      {isLoading ? (
        <>
          <div className="flex justify-center items-center h-20 mt-4">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 m-10">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="flex justify-center items-center h-32">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 m-10">
          {cards.map((cards) => (
            <div key={cards.id}>
              <img
                src={cards.images.small}
                alt={cards.name}
                className="transition-transform duration-200 hover:scale-105"
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}