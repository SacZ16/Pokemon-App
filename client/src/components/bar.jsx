import React from 'react'
import { Link } from 'react-router-dom';
import './bar.css';

function Bar({}) {
    return (
        <div>
            <div class="cajalogo">
                <ul class="nav3">
                    <li><a class="navliaa">aAAAAA</a>
                        <ul>
                            <li><Link class="liink"to={"/"}><button class="nav2liLink">Landing</button></Link></li>
                            <li><Link class="liink"to={"/1"}><button class="nav2liLink">Home</button></Link></li>
                            <li><Link class="liink"to={"/pokemons/add"}><button class="nav2liLink">Add pokemon</button></Link></li>
            
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default (Bar)