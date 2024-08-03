const Service = require('../modals/Services')
const service = async (req,res) => {
    try{
        const service = await Service.find();
        res.status(200).json({status:true,message:"services data",result:service})

    }catch(err){
        res.status(500).json({status:false,message:err})
        
    }
}

module.exports = {service}