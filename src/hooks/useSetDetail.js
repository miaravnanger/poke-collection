import { useState, useEffect } from "react";
import { getCards } from "../api/pokemonApi";

export function useSetDetail(setId) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  useEffect(() => {
    setIsLoading(true);
    getCards(setId, page)
      .then((data) => {
        setCards(data.data);
        setTotalPages(Math.ceil(data.totalCount / 20));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Feil:", err);
        setIsLoading(false);
      });
  }, [setId, page]);

  return { cards, isLoading, page, setPage, totalPages };
}
