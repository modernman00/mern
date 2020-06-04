const router = require('express').Router();
let User = require('../model/user.model')

// route /user 
router.route('/').get((req, res) => {
    //call the User schema/ database
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error :  ${err}`))

});

// posting to the user collection

router.route('/add').post((req, res)=>{
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(()=>{res.json('User added')})
    .catch((err)=> res.status(400).json(`Error : ${err}`))

})

module.exports = router;