import axios from "axios"
import { useEffect, useState } from "react"

const Pokemones = () => {
  const [poke, setPoke] = useState({
    name: '',
    img: ''
  })
  const [pokeArray, setPokeArray] = useState([])
  const url = 'https://pokeapi.co/api/v2/type/3'

  const changePokemon = () => {
    setPoke({ 
      name: pokeArray[0].pokemon.name, 
      img : pokeArray[0].pokemon.url
    })
  }

  useEffect(() => {
    axios(url)
      .then( resp => {
        setPokeArray(resp.data.pokemon)
        changePokemon()
      })
      .catch(error => console.error('Ocurrió un eror:\n' + error))
  }, [])

  return (
    <>
      {poke.name === '' ?
        'Loading...' :
        <>
          <h2>{poke.name}</h2>
          <img src={poke.img} alt={poke.name} />
          <button onClick={changePokemon}>Cambiar Pokemon!</button>
        </>
      }
    </>
  )
}

export default Pokemones