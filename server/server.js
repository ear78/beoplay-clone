var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var config = require('./config.json');
// var corsOptions = {
//     origin: 'http://localhost:3000'
// }

var app = module.exports = express();

var db = massive.connectSync({
    db: "personal_project"
});

app.set('db', db);

app.use(cors());
app.use(bodyParser.json());


app.use(express.static("../public"));


// app.get('/hello', function(req,res,next){
//     res.status(200).json({hello: 'Joshua, would you like to play thermonuclear war?'});
// })

var productsCtrl = require('./controllers/productsCtrl.js');

app.get('/api/products', productsCtrl.getAllProducts);
app.get('/api/products/:id', productsCtrl.getIdProducts);





app.listen(config.port, function(){
    console.log('Shiz on port', config.port);
})
