const express = require('express');  // nodejs framework
const cors = require('cors'); // allow for cross origin data api 
require('dotenv').config(); // environment variable
const mongoose = require('mongoose'); // mongodb 

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())

const uri = process.env.ATLAS_URL;

mongoose.connect(uri, {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Mongo database connection is established");
})

const routerExercise  = require('./route/Exercise');
const routerUser = require('./route/User');

app.use('/user', routerUser);
app.use('/exercise', routerExercise);


app.listen(port, ()=> {

    console.log(`Server is running on Port ${port}`);
    
})
