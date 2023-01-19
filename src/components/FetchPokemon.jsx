import React, {useState} from 'react'
import axios from 'axios'

const FetchPokemon = () => {
    
    const [pokemons, setPokemons] = useState([]);

    const axiosPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset12790&limit=1279") 
            .then( res => {
                console.log(res);
                setPokemons(res.data.results);
            })
            .catch ( err => {
                console.log(err);
            })
    }
    
    return (
        <div className='container ms-auto'>
            <button className="btn btn-primary" onClick={ axiosPokemon }>Fetch Pokemon!</button>
            <div className='container'>
                <ul>
                    {
                        pokemons ? 
                            pokemons.map( (item, idx) => {
                                return (
                                <div idx={ idx }>
                                    <li>{ item.name }</li>
                                </div>
                            )}) :
                            console.log("no pokemon found")
                    }
                </ul>
            </div>
        </div>
    )
}

export default FetchPokemon