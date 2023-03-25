const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
    //option for the srategy
    callbackURL: 'http://team-project-auth2.onrender.com/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret: keys.google.clientSecret
},(accessToken,refresToken,profile,done)=>{


    localStorage.setItem('accessToken',JSON.stringify(accessToken));
    localStorage.setItem('resfresToken',JSON.stringify(refresToken));
}
)
)

