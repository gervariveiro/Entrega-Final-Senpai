const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, verifyToken } = require('../middlewares/jwt');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SenpaiMovies');
const User = mongoose.model('Users',{id:String, name:String, email:String, password:String});

//new user

router.post('/newuser', async(request,response) =>{
    const body = request.body;
    const newUser = new User();
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(body.password, salt);
    newUser.id =  body.id;
    newUser.name =  body.name;
    newUser.email =  body.email;
    newUser.password = password;
    console.log('password:', password);
    const result = await newUser.save().then ((res) => {
        return res;

    });
    response.json({result:result});
    });

//login

router.post('/login', async (request, response) => {
    const email = request.body.email;
    const user = user.find((item) => item.email === email);
    if (!user) {
      response.json({
        success: false,
        message: "El usuario no esta registrado",
      });
    } else {
      const validPassword = await bcrypt.compare(request.body.password, user.password);
      if (!validPassword) {
        response.json({
          success: false,
          message: "El password no es valido",
        })
      }
    //JTW TOken
    else {
        const token = jwt.sign(user, TOKEN_SECRET);
        response.json({
          success: true,
          message: "El usuario esta autenticado",
          token,
        })
      }
    }
  });
  
//Ver lista de usuarios
router.get('/getuser',  (req, res) => {
    User
        .find()
        .then((data) => res.json(data))
});

module.exports = router;