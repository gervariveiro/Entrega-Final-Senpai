const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SenpaiMovies');
const Upcoming = mongoose.model('Upcomingmovies',{id:String, original_title:String, poster_path:String, adult:Boolean,});

//new Upcoming movie

router.post('/newupcoming', async(request,response) =>{
    const body = request.body;
    const newUpcoming= new Upcoming();
    newUpcoming.id =  body.id;
    newUpcoming.original_title =  body.original_title;
    newUpcoming.poster_path =  body.poster_path;
    newUpcoming.adult =  body.adult;
    const result = await newUpcoming.save().then ((res) => {
        return res;

    });
    response.json({result:result});
    });

//get movies

router.get('/getupcoming', (req, res) => {
    Upcoming
        .find()
        .then((data) => res.json(data))
});

module.exports = router;