const {Schema,model} = require('mongoose');

const contactusSchema = new Schema({
    username:{type:String,required:true},
    email:{type:String, required:true},
    message:{type:String,required:true}
},{timestamps:true});

module.exports = model('Contactus',contactusSchema);