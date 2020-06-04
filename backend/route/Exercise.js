const router = require('express').Router();
let Exercise = require('../model/exercise.model')

// route /user 
router.route('/').get((req, res) => {
    //call the User schema/ database
    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error :  ${err}`))

});

// posting to the user collection

router.route('/add').post((req, res)=>{
    const username = req.body.username;

    const newExe = new Exercise({username});

    newExe.save()
    .then(()=>{res.json('User added')})
    .catch((err)=> res.status(400).json(`Error : ${err}`))

})

module.exports = router;