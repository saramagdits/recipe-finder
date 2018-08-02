// Experiments with Recipe Puppy
//http://www.recipepuppy.com/about/api/
//ENVIRONMENT CONFIGURATION
const PORT = 3000;

//REQUIREMENTS
var express = require('express'),
    app = express();

//CONFIGURATION
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

//STATIC RESOURCE CONFIGURATION
app.use(express.static("public"));

//ROUTE CONFIGURATION
const indexRoutes = require('./routes/index.js');
app.use(indexRoutes);

//LISTENER
app.listen(PORT, function(){
    console.log("Server successfully started.......");
});



