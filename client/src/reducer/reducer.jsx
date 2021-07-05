import {SET_POKES,FILTRARPOKE,BUSCARPOKEEXACT,SET_DETAIL,BUSCARPOKE,BUSCARVACIO} from '../actions/nombreaction'

const initialState={
    pokes:undefined,
    detail:undefined,
    pokescopia:undefined,
    pokescopia2:undefined,
    tipos:undefined,
}
function reducer(state=initialState,action){
    switch(action.type){
        case SET_POKES:{
            return{
                ...state,
                tipos:action.payload.tipos,
                pokes:action.payload.pokes,
                pokescopia:action.payload.pokes,
                pokescopia2:action.payload.pokes,                
            }
        }
        case SET_DETAIL:{
            return{
                ...state,
                detail:action.payload,
            }
        }
        case BUSCARVACIO:{
            return{
                ...state,
                pokescopia:action.payload,
                pokes:action.payload
            }
        }
        case BUSCARPOKE:{
            return{
                ...state,
                pokescopia:state.pokes.filter(poke=>poke.name.toUpperCase().includes(action.payload.toUpperCase()))
            }
        }
        case BUSCARPOKEEXACT:{
            return{
                ...state,
                pokes:action.payload,
                pokescopia:action.payload,
            }
        }
        case FILTRARPOKE:{
            if(action.payload === "default"){
                return{
                    ...state,
                    pokescopia:[...state.pokescopia2]
                }
            }
            if(action.payload === "creados"){
                return{
                    ...state,
                    pokescopia:state.pokes.filter(poke=>isNaN(poke.id))
                }
            }
            if(action.payload === "oficiales"){
                return{
                    ...state,
                    pokescopia:state.pokes.filter(poke=>!isNaN(poke.id))
                }
            }
            if(action.payload === "A-Z"){
                return{
                    ...state,
                    pokescopia:state.pokes.sort((a,b)=>{if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
                    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                    return 0})
                }
            }
            if(action.payload === "Z-A"){
                return{
                    ...state,
                    pokescopia:state.pokes.sort((a,b)=>{if(a.name.toLowerCase() < b.name.toLowerCase()) return 1
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
                    return 0})
                }
            }
            if(action.payload === "fuerzaasc"){
                return{
                    ...state,
                    pokescopia:state.pokes.sort((a,b)=>{if(a.attack < b.attack) return 1
                    if(a.attack > b.attack) return -1
                    return 0})
                }
            }
            if(action.payload === "default2"){
                return{
                    ...state,
                    pokescopia:state.pokes.sort((a,b)=>{if(a.id > b.id) return 1
                    if(a.id < b.id) return -1
                    return 0})
                }
            }
            if(action.payload === "fuerzadesc"){
                return{
                    ...state,
                    pokescopia:state.pokes.sort((a,b)=>{if(a.attack > b.attack) return 1
                    if(a.attack < b.attack) return -1
                    return 0})
                }
            }
            return{
                ...state,
                pokescopia:[...state.pokes.filter(pokemon=>pokemon.types.includes(action.payload))]
                
            }
        }
        default:{
            return state
        }
    }
}

export default reducer;