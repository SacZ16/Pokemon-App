import React from 'react'
import Carta from './carta'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { filtrarpoke, getPokes } from '../actions/actions';
import Search from './buscador'
import Bar from './bar'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './home.css';

function Home({page}) {
    const dispatch = useDispatch();
  var pokemoness= useSelector (state=> state.pokescopia)
  var tipos= useSelector (state=> state.tipos)
  var pokesToRender 
  
  useEffect(()=>{
    dispatch(getPokes())
  },[dispatch])

  
    var itemsInPage = 12
    return (
        <div class="contenedormayor">  
            <Search class="carta_bar"></Search>
            <Bar class="carta_bar"></Bar>            
            <div class="cajacarta">
                <div class="cards-container">       
                    {pokemoness &&
                    (pokesToRender = pokemoness.slice(itemsInPage * (page - 1), (itemsInPage * (page - 1)) + itemsInPage)) &&
                    <Carta pokesrender={pokesToRender}></Carta>}
                </div>  
                <div >
                    {pokesToRender && !pokesToRender.length && <div class="texto">No se encontraron pokemones, Presiona en <button class="textodefault" onClick={()=>{dispatch(filtrarpoke("default"))}}>Default</button> para volver</div> }        
                    <div className='previous1'>
                         {pokesToRender && pokesToRender.length  && pokesToRender[0].id !== pokemoness[0].id ? <NavLink class='prueba' to={`/${parseInt(page) - 1}`}>{'Previous'}</NavLink>:<h1 class="noseve">no se ve nada</h1>}
                    </div>
                </div>
                <div >
                    <div className='next1'>
                        {pokesToRender && pokesToRender.length  && pokesToRender[pokesToRender.length - 1].id !== pokemoness[pokemoness.length - 1].id ? <NavLink class='prueba' to={`/${parseInt(page) + 1}`}>{'Next'}</NavLink>:<h1 class="noseve">no se ve nada</h1>}
                    </div>
                </div>
                <div >
                    <div className='previous2'>                
                        {pokesToRender && pokesToRender.length  && pokesToRender[0].id !== pokemoness[0].id ? <NavLink class='prueba' to={`/${parseInt(page) - 1}`}>{'Previous'}</NavLink>:<h1 class="noseve">no se ve nada</h1>}
                    </div>
                </div>
                <div >
                    <div className='next2'>
                        {pokesToRender && pokesToRender.length  && pokesToRender[pokesToRender.length - 1].id !== pokemoness[pokemoness.length - 1].id ? <NavLink class='prueba' to={`/${parseInt(page) + 1}`}>{'Next'}</NavLink>:<h1 class="noseve">no se ve nada</h1>}
                    </div>
                </div>
            </div>
            <div class="carta_bar">
                <ul class="nav">
                    <li><a class="navlia"> FILTRO</a>
                        <ul>
                            <li><button  onClick={()=>{dispatch(filtrarpoke("default"))}}>default</button></li>
                            <li><button onClick={()=>{dispatch(filtrarpoke("creados"))}}>creados</button></li>
                            <li><button  onClick={()=>{dispatch(filtrarpoke("oficiales"))}}>oficiales</button></li>
                            {
                            tipos && tipos.map(ti=>{
                            return <li><Link to={'/1'}><button onClick={()=>{dispatch(filtrarpoke(ti[0].name))}}>{ti[0].name}</button></Link></li>
                            })
                            }
                        </ul>
                    </li>
                </ul>        
            </div >
            <div class="carta_bar">
                <ul class="nav2">
                    <li><a class="navlia"> ORDEN</a>
                        <ul>
                            <li><Link class="liink"to={"/1"}onClick={()=>{dispatch(filtrarpoke("default2"))}}><button class="nav2liLink">default</button></Link></li>
                            <li><Link class="liink"to={"/1"}onClick={()=>{dispatch(filtrarpoke("A-Z"))}}><button class="nav2liLink">A-Z</button></Link></li>
                            <li><Link class="liink"to={"/1"}onClick={()=>{dispatch(filtrarpoke("Z-A"))}}><button class="nav2liLink">Z-A</button></Link></li>
                            <li><Link class="liink"to={"/1"}onClick={()=>{dispatch(filtrarpoke("fuerzaasc"))}}><button class="nav2liLink">FUERZA🡱</button></Link></li>
                            <li><Link class="liink"to={"/1"}onClick={()=>{dispatch(filtrarpoke("fuerzadesc"))}}><button class="nav2liLink">FUERZA🡳</button></Link></li>
                        </ul>
                    </li>
                </ul>        
            </div >           
        </div>
    )
}



export default (Home)