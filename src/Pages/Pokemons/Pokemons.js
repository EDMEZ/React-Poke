import { useParams } from "react-router-dom";
import { useEffect } from "react";

export function Pokemons(){
    const { PokemonsId } = useParams();

    useEffect(()=>{

    })
   
    return(
        <h1>Pagina do {PokemonsId}</h1>
    )
}