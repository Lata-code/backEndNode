const {z} = require('zod');


const signupSchema = z.object({
    username:z.string({required_error:"name is required ."}).trim().min(3,{message:"name must be atleast three character."}).max(200,{message:"name should not be greater than 200 characters."}),
    phone:z.string({required_error : "phone is required ."}).trim().min(10,{message:"phone must be contain atleast 10 characters ."}).max(20,{message:"phone must not be long more than 20 characters."}),
    email:z.string({ required_error : "email is required ."}).email({message:"Invalid email address ."}).trim(),
    password:z.string({required_error : "password is required ."}).trim().min(4,{message:"password must be contain atleast 4 characters."}).max(12,{message:"password must not be long than 12 chararters."})
   
})

const signinSchema = z.object({
    email:z.string({ required_error : "email is required ."}).email({message:"Invalid email address ."}).trim(),
    password:z.string({required_error : "password is required ."}).trim().min(4,{message:"password must be contain atleast 4 characters."}).max(12,{message:"password must not be long than 12 chararters."})
   
})

const contactusSchema = z.object({
    username:z.string({required_error:"username is required."}).trim().min(4,{message:"username must be contain atleast 4 characters."}).max(20,{message:"username must not be more than 20 characters."}),
    email:z.string({required_error:"email is required"}).email({message:"Invalid email address."}).trim(),
    message:z.string({required_error:"message is required"}).trim().min(10,{message:"message must be contains atleast 10 characters."}).max(100,{message:"message must not be contain more than 100 characters."})
})

module.exports = {
    signupSchema,
     signinSchema,
     contactusSchema
};