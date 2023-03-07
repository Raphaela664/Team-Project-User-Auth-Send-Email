const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
    //option for the srategy
    callbackURL: '/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret: keys.google.clientSecret
},(accessToken,refresToken,profile,done)=>{


    //passport callback function
    //console.log('You better work');
    console.log(profile);
}
)
)

