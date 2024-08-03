 const User = require('../modals/UserModel')
 const bcrypt = require('bcryptjs')

 /** 
  * @param
  * user rgistration api
  * 
 */

const register = async (req,res) =>{
    try{

        const {username,email,phone,password} = req.body;
       
        const isUserExist = await User.findOne({email:email});
        if(isUserExist) return res.status(400).json({message:"User Already register for this email id ."});
        //const hash_pass = await bcrypt.hash(password,10);
       const UserInfo =  await User.create({username,email,phone,password});
       if(UserInfo){
        return res.status(200).json({message:"User created succesfuly",result:UserInfo,userid:UserInfo._id, token: await UserInfo.generateToken()})
       }else{
        return res.status(404).json({message:"User Not created ."})

       }

    }catch(err){
        res.status(400).json({status:false,message:"server error",err:err})
    }

}

/** 
  * @param
  * user Login api
  * 
 */

const login = async (req,res) =>{
    try{

        const {email,password} = req.body;
       
        var user = await User.findOne({email});
        if(!user) return res.status(400).json({message:"Invalid Credentials ."});

       // const comparePass = await bcrypt.compare(password,user.password);

       const comparePass = await user.comparePass(password)
       
        console.log('comparePass',comparePass);
      
       if(comparePass){
        return res.status(201).json({message:"Login succesfull ! ",token: await user.generateToken()})
       }else{
        return res.status(404).json({message:"email or password  is invalid ."})

       }

    }catch(err){
        const error = {
            status:400,
            message:err.errors[0].message
        };
        next(error);
       // res.status(400).json({status:false,message:"server error",err:err})
    }

}



const allUsers = (req,res) => {
    res.status(200).send("djfkdfjkdfjkd")
}

module.exports = {
    register,
    login,
    allUsers

}