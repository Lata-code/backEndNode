 const useData = (req,res) => {
    try{

        const userdata = req.user;
        res.status(200).json({userdata})

    }catch(err){
        console.log('userdata',err);
    }

}

module.exports = {useData};