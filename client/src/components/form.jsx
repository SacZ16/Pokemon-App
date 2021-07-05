import React, { useState } from "react";
import Bar from './bar'
import "./form.css"
const axios = require ('axios');    

export function Form(){
    const [input,setInput]= useState({
        t1:1,
        t2:1,        
        name:"",
        weight:"",
        height:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
    })
    const handleSubmit= function(e){      
        e.preventDefault();
        async function agregar(){
            const add= await axios.post('http://localhost:3001/pokemons', input)
        }agregar()
        setInput({
            t1:1,
            t2:1, 
            name:"",
            weight:"",
            height:"",
            hp:"",
            attack:"",
            defense:"",
            speed:"",
        })
        alert("pokemon agregado")
}    
    const handleInputChange=function(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return (
            <div>
                <div class="a"> a</div>
                    <div class="carta_bar3">
                        <Bar ></Bar>
                    </div>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                    <div class="cajamayorform">
                        <div >
                            <div >
                                <div >
                                    <label class="cajanombref">Nombre:</label>
                                    <input class="cajanombrei"  placeholder="NOMBRE" autoComplete='off' type='text' name='name' required onChange={handleInputChange}  />                    
                                </div>
                                <div>
                                    <div class="cajahpattack">
                                        <div class="cajahpf">
                                            <label >Hp:</label>
                                            <input class="cajahpi" placeholder="HP" autoComplete='off' type='number' min="0" max="100"  required name='hp' onChange={handleInputChange}  />
                                        </div>
                                        <div class="cajaattackf">
                                            <label >Attack:</label>
                                            <input  class="cajahpi"  placeholder="ATTACK" autoComplete='off' type='number' min="0" max="100"  required name='attack' onChange={handleInputChange}  />
                                        </div>
                                    </div>
                                    <div class="cajahpattack">
                                        <div >
                                            <label >Defense:</label>
                                            <input class="cajahpi" placeholder="DEFENSE" autoComplete='off' type='number' min="0" max="100"  required name='defense' onChange={handleInputChange}  />
                                        </div>
                                        <div class="cajaspeedf">
                                            <label >Speed:</label>
                                            <input class="cajahpi" placeholder="SPEED" autoComplete='off' type='number' min="0" max="100"  required name='speed' onChange={handleInputChange}  />
                                        </div>
                                    </div>
                                    <div class="cajahpattack">
                                        <div class="cajaweightf">
                                            <label >Weight:</label>
                                            <input class="cajahpi" placeholder="WEIGHT" autoComplete='off' type='number' min="0" max="1000" required name='weight' onChange={handleInputChange}  />
                                        </div>
                                        <div>
                                            <label >Height:</label>
                                            <input class="cajahpi" placeholder="HEIGHT" autoComplete='off' type='number'  min="0" max="1000" required name='height' onChange={handleInputChange}  />
                                        </div>
                                    </div>
                                    <div class="selec">                    
                                        <select required  name="t1" id="" onChange={handleInputChange}>
                                            <option value={"NORMAL"} >TYPE1</option>
                                            <option value={"normal"} >NORMAL</option>
                                            <option value={"fighting"} >FIGHTING</option>
                                            <option value={"flying"} >FLYING</option>
                                            <option value={"poison"} >POISON</option>
                                            <option value={"ground"} >GROUND</option>
                                            <option value={"rock"} >ROCK</option>
                                            <option value={"bug"} >BUG</option>
                                            <option value={"ghost"} >GHOST</option>
                                            <option value={"steel"} >STEEL</option>
                                            <option value={"fire"} >FIRE</option>
                                            <option value={"water"} >WATER</option>
                                            <option value={"grass"} >GRASS</option>
                                            <option value={"electric"} >ELECTRIC</option>
                                            <option value={"psychic"} >PSYCHIC</option>
                                            <option value={"ice"} >ICE</option>
                                            <option value={"dragon"} >DRAGON</option>
                                            <option value={"dark"} >DARK</option>
                                            <option value={"fairy"} >FAIRY</option>
                                            <option value={"unknown"} >UNKNOWN</option>
                                            <option value={"shadow"} >SHADOW</option>
                                        </select> 
                                        <select required  name="t2" id="" onChange={handleInputChange}>
                                            <option value={"NORMAL"} >TYPE2</option>
                                            <option value={"normal"} >NORMAL</option>
                                            <option value={"fighting"} >FIGHTING</option>
                                            <option value={"flying"} >FLYING</option>
                                            <option value={"poison"} >POISON</option>
                                            <option value={"ground"} >GROUND</option>
                                            <option value={"rock"} >ROCK</option>
                                            <option value={"bug"} >BUG</option>
                                            <option value={"ghost"} >GHOST</option>
                                            <option value={"steel"} >STEEL</option>
                                            <option value={"fire"} >FIRE</option>
                                            <option value={"water"} >WATER</option>
                                            <option value={"grass"} >GRASS</option>
                                            <option value={"electric"} >ELECTRIC</option>
                                            <option value={"psychic"} >PSYCHIC</option>
                                            <option value={"ice"} >ICE</option>
                                            <option value={"dragon"} >DRAGON</option>
                                            <option value={"dark"} >DARK</option>
                                            <option value={"fairy"} >FAIRY</option>
                                            <option value={"unknown"} >UNKNOWN</option>
                                            <option value={"shadow"} >SHADOW</option>
                                        </select>   
                                    </div>
                                </div>
                                <div>
                                    <input class="button" type='submit' value='Submit' id='submitbutton'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            )
}
export default Form