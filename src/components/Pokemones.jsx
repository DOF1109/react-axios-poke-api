import axios from "axios"
import { useEffect, useState } from "react"

const Pokemones = () => {
  const [poke, setPoke] = useState({
    name: '',
    img: ''
  })
  const [pokeArray, setPokeArray] = useState([])
  const url = 'https://pokeapi.co/api/v2/type/3'

  useEffect(() => {
    axios(url)
      .then( resp => {
        console.log(resp.data.pokemon);
        setPokeArray(resp.data.pokemon)
        console.log(pokeArray);
      })
  }, [])

  return (
    <>
      <h1>Pokes</h1>
    </>
  )
}

export default Pokemones