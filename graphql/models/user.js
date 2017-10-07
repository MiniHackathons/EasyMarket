var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    email: {type:String, unique:true},
    name: String,
    lastname: String,
    city: String,
    cellphone: String,
    createdAt:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('User',userSchema);