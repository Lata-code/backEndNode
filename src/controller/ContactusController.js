const contactusModel = require('../modals/contactusModel');

const Contactus = async (req, res) => {
try{
    
 const contactusInfo  = await contactusModel.create(req.body);

 if(!contactusInfo) return res.status(400).json({success:false,message:"message not sent."});

  res.status(200).json({success:true,message:"message sent successfuly !"});


}catch(err){
    res.status(400).json({success:false,message:err})
}
}

module.exports = Contactus;