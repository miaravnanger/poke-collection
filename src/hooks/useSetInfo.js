import { useState, useEffect } from "react";
import { getSetsById } from "../api/pokemonApi";

export function useSetInfo(setId) {
  const [setInfo, setSetInfo] = useState({});

  useEffect(() => {
    getSetsById(setId)
      .then((data) => {
        setSetInfo(data);
      })
      .catch((err) => console.log("Feil:", err));
  }, [setId]);

  return setInfo;
}
