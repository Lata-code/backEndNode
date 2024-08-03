const User = require('../modals/UserModel')
const Contactus = require('../modals/contactusModel')
const getUsers = async (req,res) => {
    try{

        const allUsers  = await User.find({},{password:0})
        if(!allUsers || allUsers.length == 0 ) return res.status(404).json({message:"No Users Found ."});

        res.status(200).json({allUsers})

    }catch(err){
        next(err)
    }

}

/**
 * 
 * get all contacts data 
 * @param {*} res 
 * @returns 
 */
const getContacts = async (req,res) => {
    try{

        const contacts  = await Contactus.find()
        if(!contacts || contacts.length == 0 ) return res.status(404).json({message:"No Contacts Found ."});

        res.status(200).json(contacts)

    }catch(err){
        next(err)
    }

}

/**
 * delete contact api
 */

const deleteContacts = async(req,res,next) =>{
    try{

        const id = req.params.id;

        const deleteContact = await Contactus.deleteOne({_id:id});

        if(!deleteContact) return res.status(400).json({message:"Contact is not deleted . "})
       return res.status(200).json({success:true,message:"Contacts deleted successfully ."})

    }catch(err){
        next(err)
    }
}




/**
 * 
 * delete user by id
 * @param {*} res 
 * @returns 
 */
const deleteUserById = async (req,res) => {
    try{

        const userid = req.params.id; console.log('userid',userid)
        const contacts  = await User.deleteOne({_id:userid});
        if(!contacts || contacts.length == 0 ) return res.status(404).json({message:"User not Deleted !"});

        res.status(200).json({message:"User deleted successfuly"});

    }catch(err){
        next(err)
    }

}

/**
 * 
 * Get single user detail  
 * @param {*} res 
 * @returns 
 */
const getUserById = async (req,res) => {
    try{

        const id = req.params.id
        const data  = await User.findOne({_id:id})
        if(!data) return res.status(404).json({message:"No User Found  for this id .."});

        res.status(200).json(data)

    }catch(err){
        next(err)
    }

}

/**
 * 
 * update user detail logic  
 * @param {*} res 
 * @returns 
 */
const updateUserById = async (req,res,next) => {
    try{

        const id = req.params.id;
        const user_detail = req.body;
        const updatedData  = await User.updateOne({_id:id},{$set: user_detail})
        if(!updatedData) return res.status(404).json({message:"User Not Updated .."});

        return res.status(200).json(updatedData)

    }catch(err){
        next(err)
    }

}

module.exports = { 
     getUsers ,
     getContacts,
     getUserById,
     deleteUserById,
     updateUserById,
     deleteContacts
}