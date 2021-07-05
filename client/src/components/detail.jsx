import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getpoke,clearpoke } from '../actions/actions'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Bar from './bar'
import './carta.css';
import './detail.css'
export function Detail(){
    const dispatch= useDispatch();
    const pokedetail= useSelector(state=>state.detail)

    const {id} = useParams()
    useEffect(()=>{
        dispatch(getpoke(id))
        return()=>{
            dispatch(clearpoke())
        }
    },[dispatch,id])
    return(
        <div>
            {pokedetail === undefined && <h1> cargando...</h1>}
            {typeof pokedetail === "object"&& (
                <div class="cajacontenedora">                    
                    <Bar class="carta_bar2"></Bar>
                    <div class="cajaname2"></div>
                    <div class="cajaname">
                    <h1 class="cajanametexto">{pokedetail[0] &&  <h1 class="cajanametexto">{pokedetail[0].name}</h1>}{pokedetail && <h1 class="cajanametexto">{pokedetail.name}</h1>}</h1>
                    </div>
                    <div></div>
                    <div class="cajafondo"></div>
                    <h2 class="cajaid">{pokedetail[0]? pokedetail[0].id :pokedetail.id}</h2>
                    <div class="cajastats">
                    <h3>HP:{pokedetail[0] && <h3>{pokedetail[0].hp}</h3>}{pokedetail && <h3>{pokedetail.hp}</h3>}</h3>
                    <h3>Attack:{pokedetail[0] && <h3>{pokedetail[0].attack}</h3>}{pokedetail && <h3>{pokedetail.attack}</h3>}</h3>
                    <h3>Defense:{pokedetail[0] && <h3>{pokedetail[0].defense}</h3>}{pokedetail && <h3>{pokedetail.defense}</h3>}</h3>
                    <h3>Speed:{pokedetail[0] && <h3>{pokedetail[0].speed}</h3>}{pokedetail && <h3>{pokedetail.speed}</h3>}</h3>
                    </div>
                    <div class="cajastats2">
                    <h3>weight:{pokedetail[0] && <h3>{pokedetail[0].weight}</h3>}{pokedetail && <h3>{pokedetail.weight}</h3>}</h3>
                    <h3>height:{pokedetail[0] && <h3>{pokedetail[0].height}</h3>}{pokedetail && <h3>{pokedetail.height}</h3>}</h3>
                    <h3>type:{pokedetail[0] && <h3>{pokedetail[0].types[0]}</h3>}{pokedetail.tipos && <h3>{pokedetail.tipos[0].name}</h3>}</h3>
                    <h3>type:{pokedetail[0] && <h3>{pokedetail[0].types[1]}</h3>}{pokedetail.tipos && <h3>{pokedetail.tipos[1].name}</h3>}</h3>
                    </div>
                    <Link className="link">
                    {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "normal" &&<div>
                <div  className="cajaimagenNORMAL">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2NORMAL">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "fighting" &&<div>
                <div  className="cajaimagenFIGHTING">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2FIGHTING">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "flying" &&<div>
                <div  className="cajaimagenFLYING">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2FLYING">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "poison" &&<div>
                <div  className="cajaimagenPOISON">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2POISON">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "ground" &&<div>
                <div  className="cajaimagenGROUND">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2GROUND">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "rock" &&<div>
                <div  className="cajaimagenROCK">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2ROCK">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "bug" &&<div>
                <div  className="cajaimagenBUG">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2BUG">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "ghost" &&<div>
                <div  className="cajaimagenGHOST">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2GHOST">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "fire" &&<div>
                <div  className="cajaimagenFIRE">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2FIRE">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "water" &&<div>
                <div  className="cajaimagenWATER">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2WATER">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "steel" &&<div>
                <div  className="cajaimagenSTEEL">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2STEEL">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "grass" &&<div>
                <div  className="cajaimagenGRASS">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2GRASS">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "electric" &&<div>
                <div  className="cajaimagenELECTRIC">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2ELECTRIC">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "psychic" &&<div>
                <div  className="cajaimagenPSYCHIC">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2PSYCHIC">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }               
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "ice" &&<div>
                <div  className="cajaimagenICE">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2ICE">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }               
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "dragon" &&<div>
                <div  className="cajaimagenDRAGON">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2DRAGON">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }           
                {pokedetail[0] &&
                pokedetail[0].types[0] && pokedetail[0].types[0] === "fairy" &&<div>
                <div  className="cajaimagenFAIRY">
                <img src={pokedetail[0].imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2FAIRY">
                    <img src={pokedetail[0].imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }
                {
                    pokedetail.tipos  &&<div>
                <div  className="cajaimagenCREADO">
                <img src={pokedetail.imga} className="cartaimagen"></img>                    
            </div> 
                <div  className="cajaimagen2CREADO">
                    <img src={pokedetail.imgashiny} className="cartaimagen2"></img>                    
                </div>
                </div>
                }                    
                </Link >
                </div>                
            )}
        </div>
    )
}
export default Detail