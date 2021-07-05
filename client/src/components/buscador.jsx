import React from 'react'
import { connect } from 'react-redux'
import {buscarpokeexact} from '../actions/actions'
import { useState } from 'react'
import './buscador.css'

function Search({buscarpokeexact}){

    function onChange(e){
        setInput(
            e.target.value            
            )
        }   

        const [input,setInput]= useState()
        const handleSubmit= function(e){      
            e.preventDefault();
            buscarpokeexact(input)
            setInput()
        }

    return(
        <div >
            <div >
                <form class="cajabuscadori" onSubmit={(e)=>handleSubmit(e)}>
                    <input id="searchInput" type="text" onChange={onChange}  placeholder="Search your poke" ></input>
                    <button type='submit' value='Submit'>Buscar</button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps= (dispatch) =>{
    return{
        buscarpokeexact: (name) => dispatch(buscarpokeexact(name))
    }
}
export default connect(null, mapDispatchToProps)(Search)