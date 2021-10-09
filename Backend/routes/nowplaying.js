const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SenpaiMovies');
const Nowplaying = mongoose.model('Nowplayingmovies',{id:String, original_title:String, poster_path:String, adult:Boolean,});

//new Nowplaying movie

router.post('/newnowplaying', async(request,response) =>{
    const body = request.body;
    const newNowplaying= new Nowplaying();
    newNowplaying.id =  body.id;
    newNowplaying.original_title =  body.original_title;
    newNowplaying.poster_path =  body.poster_path;
    newNowplaying.adult =  body.adult;
    const result = await newNowplaying.save().then ((res) => {
        return res;

    });
    response.json({result:result});
    });

//get Nowplayingmovie

router.get('/getnowplaying', (req, res) => {
    Nowplaying
        .find()
        .then((data) => res.json(data))
});

module.exports = router;