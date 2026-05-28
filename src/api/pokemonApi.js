import axios from "axios";
const API_KEY = import.meta.env.VITE_POKEMON_API_KEY;

const BASE_URL = "https://api.pokemontcg.io/v2";

const getSets = async () => {
  const cached = localStorage.getItem("sets");
  if (cached) return JSON.parse(cached);
  const res = await axios.get(`${BASE_URL}/sets?orderBy=-releaseDate`, {
    headers: { "X-Api-Key": API_KEY },
  });
  localStorage.setItem("sets", JSON.stringify(res.data.data));
  return res.data.data;
};

const getSetsById = async (setId) => {
  const cached = localStorage.getItem(`set_${setId}`);
  if (cached) return JSON.parse(cached);
  const res = await axios.get(`${BASE_URL}/sets/${setId}`, {
    headers: { "X-Api-Key": API_KEY },
  });
  localStorage.setItem(`set_${setId}`, JSON.stringify(res.data.data));
  return res.data.data;
};
const getCards = async (setId, page = 1) => {
  const cached = localStorage.getItem(`cards_${setId}_${page}`);
  if (cached) return JSON.parse(cached);
  const res = await axios.get(
    `${BASE_URL}/cards?q=set.id:${setId}&page=${page}&pageSize=20`,
    {
      headers: { "X-Api-Key": API_KEY },
    },
  );
  localStorage.setItem(`cards_${setId}_${page}`, JSON.stringify(res.data));
  return res.data;
};


export { getSets, getSetsById, getCards };
