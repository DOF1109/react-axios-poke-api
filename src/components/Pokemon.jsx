import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = () => {
  const [poke, setPoke] = useState({
    name: '',
    img: ''
  })
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

  useEffect(() => {
    handleChangePoke()
  }, [])

  const handleChangePoke = () => {
    axios(url)
      .then(resp => {
        console.log(resp.data)
        setPoke({...poke}, poke.name = resp.data.name)
        setPoke({...poke}, poke.img = resp.data.sprites.front_default)
        console.log('Cambiamos poke!')
      })
  }

  return (
    <>
      {poke.img === ''?
        'Loading...' :
        <>
          <h2>{poke.name}</h2>
          <img src={poke.img} alt={poke.name} width='300' />
          <button onClick={handleChangePoke}>Cambiar Poke!</button>
        </>}
    </>
  );
};

export default Pokemon;
