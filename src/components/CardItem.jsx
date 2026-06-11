import { toggleCard } from "../utils/cardUtils";

export default function CardItem({ card, ownedCards, setOwnedCards }) {
  return (
    <div className="relative">
      <img
        src={card.images.small}
        alt={card.name}
        onClick={() => toggleCard(setOwnedCards, card.id)}
        className="transition-transform duration-200 hover:scale-105"
        style={{ cursor: "pointer" }}
      />
      <input
        type="checkbox"
        checked={ownedCards.has(card.id)}
        onChange={() => toggleCard(setOwnedCards, card.id)}
        style={{ cursor: "pointer" }}
        className="absolute bottom-2 right-2 w-5 h-5"
      />
    </div>
  );
}
