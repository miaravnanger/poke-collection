import axios from "axios";
const API_KEY = import.meta.env.VITE_POKEMON_API_KEY;


const BASE_URL = "https://api.pokemontcg.io/v2";


const getSets = async () => {
    const res = await axios.get(`${BASE_URL}/sets?orderBy=-releaseDate`, {
        headers: { "X-Api-Key": API_KEY}
    });
    return res.data.data
}




export {
    getSets
}