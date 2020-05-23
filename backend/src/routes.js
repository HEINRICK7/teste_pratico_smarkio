const express = require('express');
const connection = require('./database/connection')
const routes = express.Router();

/* Ordem das 5 últimas pesquizas */
routes.get('/cities', async(req, res)=> {
    const cities = await connection('cities')
    .select('*')
    .orderBy('id', "desc")
    .limit(5);

    return res.json(cities);
});

/**Ordem por mais pesquizadas */
routes.get('/cities/top_5', async(req, res)=> {
    const cities = await connection('cities')
    .select('city')
    .count('*')
    .from('cities')
    .groupBy('city')
    .orderBy( 2 , 'desc')
    .limit(5);

    return res.json(cities);
});

routes.post('/cities', async (req, res)=>{
    const {city, country, temperature, humidity, description } = req.body;

    await connection('cities').insert({
        city,
        country,
        temperature,
        humidity,
        description,
    })

    return res.json({message: 'dados salvos com sucesso...'});
});

module.exports = routes;