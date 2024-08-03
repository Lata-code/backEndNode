const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors')
const router = require('./src/router/User');
const contactusRouter = require('./src/router/contactUs');
const authuser = require('./src/router/AuthUser')
const service = require('./src/router/Service')
const admin = require('./src/router/Admin')

const dbConnect = require('./src/db')
const errorMiddleware = require('./src/middleware/errorMiddleware');
const PORT = process.env.PORT;

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))

console.log("indexxx",PORT)
app.use(express.json())

app.use('/api',router)
app.use('/api',contactusRouter)
app.use('/api',authuser)
app.use('/api',service)
app.use('/api/admin',admin)
app.use(errorMiddleware)

dbConnect().then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running on http://localhost:5000");
    
    })
});