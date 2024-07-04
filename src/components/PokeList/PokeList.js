import { Button } from "@mui/material"
import { Link } from "react-router-dom"
export function PokeList({pokemons = []}){
    return (
       <> 
       <ul>
            {pokemons.map((pokemons, index) => 
                <li key={index}>
                    <Link to={`/Pokemons/${pokemons}`}>
                        {pokemons} 
                    </Link>
                </li>
                
            )}
        </ul>
        <Button variant="contained">Adicionar</Button>    
        </>   
    )
}