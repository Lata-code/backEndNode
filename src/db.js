const mongoose = require('mongoose');

const dbConnect = async(req, res) => {
    try{

        await mongoose.connect('mongodb://localhost:27017/mern')
        console.log("database connected successfuly !")

    }catch(err){
       console.log(err);
       process.exit(0)
    }

}

module.exports = dbConnect;