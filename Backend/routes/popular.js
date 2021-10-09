const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SenpaiMovies');
const Popular = mongoose.model('Popularmovies',{id:String, original_title:String, poster_path:String, adult:Boolean,});

//new Popular movie

router.post('/newpopular', async(request,response) =>{
    const body = request.body;
    const newPopular= new Popular();
    newPopular.id =  body.id;
    newPopular.original_title =  body.original_title;
    newPopular.poster_path =  body.poster_path;
    newPopular.adult =  body.adult;
    const result = await newPopular.save().then ((res) => {
        return res;

    });
    response.json({result:result});
    });

//get Populars

router.get('/getpopular', (req, res) => {
    Popular
        .find()
        .then((data) => res.json(data))
});

module.exports = router;