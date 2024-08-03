const validate = (schema) => async (req, res,next) =>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }catch(err){
        // const errmsg = err.errors.map((msg)=>{
        //     return msg.message;
        // })
        // res.status(400).json({message:errmsg})

       const status = 422;
       const message = err.errors[0].message;
       const error = { status,message }
       next(error);
        //res.status(400).json({message:errmsg})
    }
}

module.exports = validate;