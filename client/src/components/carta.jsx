import React from 'react'
import './carta.css';
import { Link } from 'react-router-dom';
export default function Carta({pokesrender}) {
    return (
        <div className="cardscotainer">
            {
               pokesrender && pokesrender.map(pokemon => (    
                <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} className="link cardcontainer">
                     <div class="cylon_eye"></div>             
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "normal" &&<div>
                <div  className="cartaNORMAL">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2NORMAL">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "fighting" &&<div>
                <div  className="cartaFIGHTING">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2FIGHTING">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "flying" &&<div>
                <div  className="cartaFLYING">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2FLYING">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "poison" &&<div>
                <div  className="cartaPOISON">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2POISON">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "ground" &&<div>
                <div  className="cartaGROUND">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2GROUND">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "rock" &&<div>
                <div  className="cartaROCK">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2ROCK">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "bug" &&<div>
                <div  className="cartaBUG">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2BUG">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "ghost" &&<div>
                <div  className="cartaGHOST">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2GHOST">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "fire" &&<div>
                <div  className="cartaFIRE">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2FIRE">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "water" &&<div>
                <div  className="cartaWATER">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2WATER">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "steel" &&<div>
                <div  className="cartaSTEEL">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2STEEL">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "grass" &&<div>
                <div  className="cartaGRASS">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2GRASS">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "electric" &&<div>
                <div  className="cartaELECTRIC">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2ELECTRIC">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "psychic" &&<div>
                <div  className="cartaPSYCHIC">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2PSYCHIC">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }               
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "ice" &&<div>
                <div  className="cartaICE">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2ICE">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }               
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "dragon" &&<div>
                <div  className="cartaDRAGON">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2DRAGON">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }           
                {
                !pokemon.tipos &&pokemon.types && pokemon.types[0] === "fairy" &&<div>
                <div  className="cartaFAIRY">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2FAIRY">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }
                {
                pokemon.tipos  &&<div>
                <div  className="cartaCREADO">
                <img src={pokemon.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="carta2CREADO">
                    <img src={pokemon.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }
                <div className="descripcion">
                <span className="nombre">{pokemon.name}</span>
                <span className="types">Types</span>
                <span className="pokemontypes">{pokemon.types ? pokemon.types.join(" - "):pokemon[0].types.join(" - ") }</span>
                </div>                
                </Link>
                    ))
                 }
        </div>
     )
}