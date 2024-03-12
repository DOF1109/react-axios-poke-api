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
        setPoke({
          name: resp.data.name,
          img: resp.data.sprites.front_default
        })
        console.log('Cambiamos poke!')
      })
      .catch(error => console.error('Ocurrió un eror:\n' + error))
  }

  return (
    <>
      {poke.img === ''?
        'Loading...' :
        <>
          <h2>{poke.name}</h2>
          <img src={poke.img} alt={poke.name} width='200' />
          <button onClick={handleChangePoke}>Cambiar Poke!</button>
        </>}
    </>
  );
};

export default Pokemon;
