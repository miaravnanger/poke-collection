import { useState } from "react";

export function useOwnedCards() {
    const [ownedCards, setOwnedCards] = useState(() => {
      const saved = localStorage.getItem("ownedCards");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    });

return [ownedCards, setOwnedCards];
}


