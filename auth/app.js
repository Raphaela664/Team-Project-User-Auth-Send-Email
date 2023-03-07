const express = require('express');
const authRoutes = require('./routes/auth-routes')
const passportSetup = require('./config/passport-setup');
const app = express();

app.use('/auth',authRoutes)
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(3000,()=>{
    console.log("app listening 3000");
})