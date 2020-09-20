const express = require('express');
const cakeRouter = express.Router()

const Cake = require('../Models/Cake');

cakeRouter.get('/', async(req, res) => {
    try{
        const cakes = await Cake.find()
        res.json(cakes)
    }catch(err){
        res.json({message: err})
    }
})

cakeRouter.get('/:label', async(req, res) => {

    try{
        const cake = await Cake.find({label: req.body.label})
        res.json(cake)
    }catch(err){
        res.json({message: err})
    }
})

cakeRouter.post('/', async(req, res) => {
    console.log(req.body)
    const { label, calories } = req.body;
    const newCake = new Cake({
        label: label, calories: calories, image: "https://www.edamam.com/web-img/482/482417e9943411f0e7db4be74a7b5114.jpg"
    })

    try{
        const savedCake= await newCake.save()
        res.json(savedCake)
    }catch(err){
        res.json({message: err})
    }
})
module.exports = cakeRouter 