const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRouters = require('./routes/users');
const upcomingRouters = require('./routes/upcoming');
const nowplayingRouters = require('./routes/nowplaying');
const popularRouters = require('./routes/popular');
//const pruebaRouters = require('./routes/prueba');


const app = express();
const PORT = process.env.PORT || 5001;

//setup
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// CORS 
app.use(cors());

// Routes
app.get('/', (request, response) => {
  response.render('home',{})
})

app.use('/users', userRouters);
app.use('/upcoming', upcomingRouters);
app.use('/nowplaying', nowplayingRouters);
app.use('/popular', popularRouters);
//app.use('/prueba', pruebaRouters);


//error
app.get('*', function(request, response){
    response.render('error',{
      code: '404',
      error: 'Página no encontrada'
    })
  });

//server working
  app.listen(PORT, () => {
    console.log('El server esta trabajando');
  });