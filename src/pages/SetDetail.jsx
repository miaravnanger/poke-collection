import { useParams } from "react-router-dom";
import { getCards } from "../api/pokemonApi";
import { useState, useEffect } from "react";

export default function SetDetail() {
const {setId} = useParams()

const [cards, setCards] = useState([]);

useEffect(() => {
  getCards(setId).then((data) => {
    console.log(data);
    setCards(data);
  })
  .catch((err) => console.log("Feil:", err));
}, [setId]);

  return (
    <>
    <ul>
      {cards.map((cards) => (
        <li key={cards.id}>
          <img
            src={cards.images.small}
            alt={cards.name}
          />
        </li>
      ))}
    </ul>
    </>
  );
}