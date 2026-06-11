import CardItem from "./CardItem";

export default function CardGrid({ cards, isLoading, ownedCards, setOwnedCards }) {
  if (cards.length === 0) {
    return (
      <>
        <div className="flex justify-center items-center h-20 mt-4">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 m-10">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex justify-center items-center h-32">
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-start pt-20 bg-black/50 z-10 min-h-64">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 m-8">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            ownedCards={ownedCards}
            setOwnedCards={setOwnedCards}
          />
        ))}
      </div>
    </div>
  );
}
