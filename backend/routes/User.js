const router = require('express').Router();
let User = require('../model/user.model')

// route /user 
router.route('/show').get((req, res) => {
    //call the User schema/ database
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error :  ${err}`))
});

// posting to the user collection
router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    const newUser = new User({username, password, name});
    newUser.save()
    .then(()=>{res.json('User added:')})
    .catch((err)=> res.status(400).json(`Error - data could not be saved : ${err}`))
})


router.route('/').get((req, res)=> {
    res.send(`<form method="post" action="/user/add">
        <label> Username </label>
        <input name="username" placeholder ="username">
         <label> Password </label>
        <input name="password" type="password" placeholder ="password">
        <input name="name" type="text" placeholder ="name">
        <button type = "submit">Submit</button>
    </form>`)
    
})

module.exports = router;