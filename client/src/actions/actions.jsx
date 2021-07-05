import axios from 'axios'
import {SET_POKES,SET_DETAIL,BUSCARPOKE,BUSCARVACIO,FILTRARPOKE,BUSCARPOKEEXACT} from './nombreaction'

export function getPokes(){
    return (dispatch)=>{
        Promise.all([axios.get('http://localhost:3001/pokemons'),axios.get('http://localhost:3001/types')])
        .then(response=>{
           dispatch({ type: SET_POKES, payload:{
               pokes:response[0].data,
                tipos:response[1].data
           }})
        }) 
    }
}

export function getpoke(id){
    return (dispatch)=>{
        axios.get('http://localhost:3001/pokemons/'+id)
        .then(response=>{
            dispatch({type:SET_DETAIL,payload:response.data})
        })
    }
}
export function clearpoke(){
    return{type:SET_DETAIL,payload:undefined}
}
export function buscarpoke(nombre){
    return{
        type:BUSCARPOKE,
        payload:nombre
    }
}
export function buscarvacio(){
    return{
        type:BUSCARVACIO
    }
}
export function filtrarpoke(orden){
    return{
        type:FILTRARPOKE,
        payload:orden
    }
}
export function buscarpokeexact(namee){
    return(dispatch)=>{
        axios.get('http://localhost:3001/pokemons?namee=' + namee)
        .then(response=>{
            dispatch({type:BUSCARPOKEEXACT,payload:response.data})
        })
    }
}