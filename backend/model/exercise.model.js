const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    weight: {
        type: Number,
        required: true,
        trim: true,
        minlength: 1
    },
    duration: {
        type: Number,
        // required: true,
        trim: true,
        minlength: 1
    },
    bodyType: {
        type: String,
        // required: true,
        trim: true,
        // minlength: 1
    },
    date: {
        type: Date,
        // required: true,
        trim: true,
        // minlength: 1
    },
    picture: {
        image: Buffer,
        name: String
    },

    pictureType: {
        type: String

    },

    user: {
        type: String,
        // required: true,
        trim: true,
        // minlength: 1
    }
},
    {
        timestamps: true,
    }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;