import { useState, useEffect } from "react";
import axios from "axios";

const PokemonAPI = props => {
    const [pokeAnswer, setPokeAnswer] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')

            .then((response)=>{setPokeAnswer(response.data.results)})

    }, []);

    return (
        <>
            <ol>
                {pokeAnswer.map((pokemon, index) =>(
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ol>
        </>
    )
}

export default PokemonAPI;
