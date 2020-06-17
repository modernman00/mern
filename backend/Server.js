const express = require('express');  // nodejs framework
const cors = require('cors'); // allow for cross origin data api 
require('dotenv').config(); // environment variable
const mongoose = require('mongoose'); // mongodb 
const routerExercise  = require('./routes/Exercise'); // router - import
const routerUser = require('./routes/User');  // router
const app = express(); // create an express application
const port = process.env.PORT || 5000;  // port 


app.use(express.urlencoded({ extended: false }))


// time to connect to the database
const uri = process.env.ATLAS_URL;
mongoose.connect(uri, {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true
});

//init gfs
let gfs

const connection = mongoose.connection;
connection.once('open', ()=>{
 
    console.log("Mongo database connection is established");
})

//CALL THE EXPRESS APPLICATION
app.use(cors());
app.use(express.json())   // going to allow us to pass json
app.use('/user', routerUser);  //now let us use the file that we imported
app.use('/exercise', routerExercise);

// home page
app.get('/', (req, res)=>{
    res.send(`<h2> WELCOME TO THE HOME PAGE`)  
})

// app needs to listen
app.listen(port, ()=> {
    console.log(`Server is running on Port ${port}`);    
})
