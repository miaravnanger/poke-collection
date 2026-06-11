export function toggleCard(setOwnedCards, cardId) {
  setOwnedCards((prev) => {
    const updated = new Set(prev);
    if (updated.has(cardId)) {
      updated.delete(cardId);
    } else {
      updated.add(cardId);
    }
    localStorage.setItem("ownedCards", JSON.stringify([...updated]));
    return updated;
  });
}
