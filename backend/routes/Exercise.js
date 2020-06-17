const router = require('express').Router();
let Exercise = require('../model/exercise.model')

// route /user
router.route('/show').get((req, res) => {
    //call the User schema/ database
    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error :  ${err}`))
});

// route /user
router.route('/show/:id').get((req, res) => {
    //call the User schema/ database
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error :  ${err}`))
});


// route /user
router.route('/delete/:id').delete((req, res) => {
    //call the User schema/ database
    Exercise.findByIdAndDelete(req.params.id)
        .then((exe) => res.json(`${exe.id} deleted`))
        .catch(err => res.status(400).json(`Error :  ${err}`))
});

// route /user UPDATE
router.route('/update/:id').post((req, res) => {
    //call the User schema/ database
    Exercise.findById(req.params.id)
        .then((exe) => {
            exe.first_name = req.body.first_name
            exe.last_name = req.body.last_name;
            exe.weight = req.body.weight;
            exe.duration = req.body.duration;
            exe.bodyType = req.body.bodyType;
            exe.date = req.body.date;
            exe.user = req.body.user;

            exe.save()
            .then(()=> res.json(`${exe.id} has been updated`))
            .catch((err)=> res.json(`Error:  ${err}`))
        })
        .catch(err => res.status(400).json(`Error :  ${err}`))
});


// posting to the user collection

router.route('/add').post((req, res) => {

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const weight = req.body.weight;
    const duration = req.body.duration;
    const bodyType = req.body.bodyType;
    const date = req.body.date;
    const user = req.body.user;

    const newExe = new Exercise({ first_name, last_name, weight, duration, bodyType, date, user });
    newExe.save()
        .then(() => { res.json('User added: <a href="/exercise/show">Show users </a>') })
        .catch((err) => res.status(400).json(`Error : ${err}`))
})


module.exports = router;