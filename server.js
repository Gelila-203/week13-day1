const express = require('express');
const app = express();
const fruits = require('./models/fruits.js'); 
const Vegetables = require('./models/Vegetables.js');


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

///Middleware
app.use((req,res,next) =>{
    console.log("I run all Routes");
    next();
})

app.get('/fruits/', (req, res) => {
    res.render('Fruits/Index' , {fruits: fruits});
});

//New Fruits
app.get('fruits/new', (req,res) =>{
    res.render('Fruits/New');
})

//Post

app.post('/fruits', (req,res)=>{
    res.send("Hi");
});

app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('Fruits/Show' , {
        fruit: fruits[req.params.indexOfFruitsArray]
    });
});  

//Vegetable Routes

app.get('/Vegetables/', (req, res) => {
    res.render('Vegetable/Index', { Vegetables : Vegetables});
  });
  

//new Vegetable
  app.get('Vegetables/new', (req,res) =>{
    res.render('Vegetable/vegetables/New');
})

//Post

app.post('/Vegetables', (req,res)=>{
    res.send("Hi");
});


app.get('/Vegetables/:indexOfVegetablesArray', function(req, res){
    res.render('Vegetable/Show' , {
        Vegetable: Vegetables[req.params.indexOfVegetablesArray]
        });
    });  


app.listen(3000, () => {
    console.log('listening on port 3000');
   
});