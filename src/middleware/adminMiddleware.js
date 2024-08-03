const adminMiddleware = async (req, res,next) => {
    try{

        const isAdmin = req.user.isAdmin;
        if(!isAdmin) return res.status(404).json({message:"Access Denied. User is not a admin."})
        next()

    }catch(err){
        next(err)
    }
}

module.exports = adminMiddleware;