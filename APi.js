const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
dotenv.config();

mongoose.connect(process.env.MongoURL).then(()=>{
    console.log('Connection on DB Stable!');
}).catch((e)=>{
    console.log(e);
});

app.use('/api/user', userRoute);
app.use(express.json());

app.listen(process.env.Port || 5000,()=>{
    console.log('Backend server is On!');
});