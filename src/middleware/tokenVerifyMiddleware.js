const jwt = require('jsonwebtoken')
const User = require('../modals/UserModel')

const VerifyToken = async (req, res, next)=>{
    const token = req.header('Authorization');

    if(!token) return res.status(400).json({message:"Unauthorized HTTP, Toked not provided ."})
    
        const jwtToken = token.replace('Bearer','').trim()
        const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({email:isVerified.email}).select({password:0});
        req.user = userData;
        req.token = token;
        req.userid = userData._id
        console.log('userData', userData)
        
        next()
}

module.exports = VerifyToken;