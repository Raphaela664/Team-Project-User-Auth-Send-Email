const passport = require('passport');
const router = require('express').Router();

router.get('/login', (req, res)=>{
    res.render('login');
})

router.get('/logout', (req,res)=>{
    res.send('logging out');
})
//auth with google
router.get('/google',passport.authenticate('google',{
    scope: ['profile']
}));

//callback app for google redirect

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('You are logged in');
})


module.exports = router;
