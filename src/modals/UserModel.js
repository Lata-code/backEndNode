const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config();



const UserSchema = mongoose.Schema({
    username:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,default:false},

},{timestamp:true});

UserSchema.pre('save', async function(){
    console.log('pre method', this)
    const user = this;

    if(!user.isModified('password')){
        next();
    }

    try{

        const saltround = await bcrypt.genSalt(10);
        const hash_pass = await bcrypt.hash(user.password,saltround);
        user.password = hash_pass;

    }catch(err){
        next(err)
    }

})

// compare password 
UserSchema.methods.comparePass =  async function(pass){
    try{

        console.log('pre bcr', this,pass)
        return bcrypt.compare(pass,this.password)

    }catch(err){
        console.log(err)
    }
}


UserSchema.methods.generateToken = function() {
    try{

        return jwt.sign({
            userid:this._id.toString(),
            email:this.email
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:'30d'
        }
    )

    }catch(err){
        console.error('generatetoken',err)
    }
}





module.exports = mongoose.model('User',UserSchema);