const { Router } = require('express');
const axios = require ('axios').default;
const {Pokemon,Tipo} = require('../db');
const {v4:uuid} = require ('uuid') 
const cors = require('cors')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(cors())
router.get("/pokemons",async (req,res)=>{
     let namee = req.query.namee
    var pokemonesbusqueda=[]
    var pokemonesresultado=[] 
    let pokemonesapi = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")
    let pokemonesprimero = pokemonesapi.data.results
    let pokedb= await Pokemon.findAll({include:Tipo})
    for(let i =0;i<pokedb.length;i++){
        pokemonesresultado.push(pokedb[i])
        if(namee){
            if(pokedb[i].name === namee){
                pokemonesbusqueda.push(pokedb[i])
            }
        }
    }
    for(let i =0;i<pokemonesprimero.length;i++){
        let pokemonessegundo= await axios.get(pokemonesprimero[i].url)
         if(namee){
             if(pokemonessegundo.data.name === namee)
             pokemonesbusqueda.push({
                 name:pokemonessegundo.data.name,
                 id:pokemonessegundo.data.id,
                 hp:pokemonessegundo.data.stats[0].base_stat,
                 attack:pokemonessegundo.data.stats[1].base_stat,
                 defense:pokemonessegundo.data.stats[2].base_stat,
                 speed:pokemonessegundo.data.stats[3].base_stat,
                 imga:pokemonessegundo.data.sprites.versions['generation-v']['black-white'].animated.front_default,
                 imgashiny:pokemonessegundo.data.sprites.versions['generation-v']['black-white'].animated.front_shiny,
                 types:pokemonessegundo.data.types.map(types=>types.type.name)
             })
         }else{
             console.log("no")
         }
        pokemonesresultado.push({
            name:pokemonessegundo.data.name,
            id:pokemonessegundo.data.id,
            weight:pokemonessegundo.data.weight,
            height:pokemonessegundo.data.height,
            hp:pokemonessegundo.data.stats[0].base_stat,
            attack:pokemonessegundo.data.stats[1].base_stat,
            defense:pokemonessegundo.data.stats[2].base_stat,
            speed:pokemonessegundo.data.stats[3].base_stat,
            imga:pokemonessegundo.data.sprites.versions['generation-v']['black-white'].animated.front_default,
            imgashiny:pokemonessegundo.data.sprites.versions['generation-v']['black-white'].animated.front_shiny,
            types:pokemonessegundo.data.types.map(types=>types.type.name)
        })
    }
     if(namee){
         res.json(pokemonesbusqueda)
     }else{
    res.json(pokemonesresultado)
}

})

router.get('/pokemons/:id', async (req,res)=>{
    id= req.params.id
    try{
        const poke= await Pokemon.findByPk(id,{include:Tipo})
        if(poke){
            res.json(poke)
        }
    }catch(error){        
            const respuesta =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const pokeid=[]
             let pokee = respuesta.data
        pokeid.push({
            name:pokee.name,
            id:pokee.id,
            weight:pokee.weight,
            height:pokee.height,
            hp:pokee.stats[0].base_stat,
            attack:pokee.stats[1].base_stat,
            defense:pokee.stats[2].base_stat,
            speed:pokee.stats[3].base_stat,
            imga:pokee.sprites.versions['generation-v']['black-white'].animated.front_default,
            imgashiny:pokee.sprites.versions['generation-v']['black-white'].animated.front_shiny,
            types:pokee.types.map(types=>types.type.name)
        })    
    res.json(pokeid)        
    }
})


router.get('/types', async (req,res)=>{
    const typesdb= await axios.get('https://pokeapi.co/api/v2/type')
    const typescreate = await Promise.all(typesdb.data.results.map(g=>{
        return Tipo.findOrCreate({where:{name:g.name}})
    }))
    res.json(typescreate)
})


router.post('/pokemons', async(req,res)=>{
    let {name,hp,attack,defense,speed,imgashiny,imga,t1,t2,weight,height} = req.body;
    const pokemoncrea= await Pokemon.create({
        id:uuid(),
        name,
        weight:weight||"0",
        height:height||"0",
        hp:hp||"0",
        attack:attack||"0",
        defense:defense||"0",
        speed:speed||"0",
        types:[t1,t2],
        imga:imga||"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
        imgashiny:imgashiny||"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/132.gif",
    })
    if(t2==="normal"){t2=1}
    if(t2==="fighting"){t2=2}
    if(t2==="flying"){t2=3}
    if(t2==="poison"){t2=4}
    if(t2==="ground"){t2=5}
    if(t2==="rock"){t2=6}
    if(t2==="bug"){t2=7}
    if(t2==="ghost"){t2=8}
    if(t2==="steel"){t2=9}
    if(t2==="fire"){t2=10}
    if(t2==="water"){t2=11}
    if(t2==="grass"){t2=12}
    if(t2==="electric"){t2=13}
    if(t2==="psychic"){t2=14}
    if(t2==="ice"){t2=15}
    if(t2==="dragon"){t2=16}
    if(t2==="dark"){t2=17}
    if(t2==="fairy"){t2=18}
    if(t2==="unknown"){t2=19}
    if(t2==="shadow"){t2=20}
    if(t1==="normal"){t1=1}
    if(t1==="fighting"){t1=2}
    if(t1==="flying"){t1=3}
    if(t1==="poison"){t1=4}
    if(t1==="ground"){t1=5}
    if(t1==="rock"){t1=6}
    if(t1==="bug"){t1=7}
    if(t1==="ghost"){t1=8}
    if(t1==="steel"){t1=9}
    if(t1==="fire"){t1=10}
    if(t1==="water"){t1=11}
    if(t1==="grass"){t1=12}
    if(t1==="electric"){t1=13}
    if(t1==="psychic"){t1=14}
    if(t1==="ice"){t1=15}
    if(t1==="dragon"){t1=16}
    if(t1==="dark"){t1=17}
    if(t1==="fairy"){t1=18}
    if(t1==="unknown"){t1=19}
    if(t1==="shadow"){t1=20}
    let types=[t1,t2]
    let typos;
    if(types.length){
        typos= await Promise.all(types.map(type => Tipo.findByPk(type)))        
    }
    if(typos){await pokemoncrea.setTipos(typos)}
    res.status(200).json(pokemoncrea)
})
module.exports = router;
