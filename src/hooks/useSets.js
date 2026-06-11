import { useEffect, useState } from "react";
import { getSets } from "../api/pokemonApi";


export function useSets() {
      const [sets, setSets] = useState([]);
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

 return [sets, isLoading]
}