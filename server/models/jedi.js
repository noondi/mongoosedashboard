var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 2},
 age: {type: Number, required: true},
 citizenship: {type: String, required: true, minlength: 2},
 category: {type: String, required: true, minlength: 2},
 educationalStage: {type: String, required: true, minlength: 2},
 council: {type: String, required: true, minlength: 5}, 
 weapon: {type: Number, default:0},
 criminalRecord: {type: String, required: true, minlength: 3}, 
 }, {timestamps: true});

 var Jedi = mongoose.model('Jedi', UserSchema)
