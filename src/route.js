const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const  RoomController = require('./controllers/RoomController');


const route = express.Router();

route.get('/', (req,res)=> res.render('home' , {page:"enter-room"}));
route.get('/create-pass', (req,res)=> res.render('home',  {page:"create-pass"}));
route.get('/room/:room', (req,res)=> res.render('room'));
//Formato que o formulario tem que passar de dentro da modal 
route.post('/question/:room/:question/:action', QuestionController.index);
route.post('/create-room', RoomController.create);



module.exports = route;
/** estou dispónibilizando esse route para outros terem acesso */