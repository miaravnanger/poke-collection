import {useState, useEffect} from "react"
import {getSets} from "./api/pokemonApi"
import './App.css'

function App() {
  const [sets, setSets] = useState([])
  
  useEffect(() => {
    getSets().then(data => {
      console.log(data)
      setSets(data)
    }).catch(err => console.log("Feil:", err))
  }, [])


  return (
    <>
    <h1>Pokemon Collection</h1>
    </>
  );
}

export default App
