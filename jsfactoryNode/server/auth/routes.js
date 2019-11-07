const express = require ('express');
const app = express.Router();
const User = require('../db/user-model');
const passport = require('passport');
const passportStrategy = require('../passport/passport-setup');
const jwt = require('jsonwebtoken');
const keys = require('../passport/keys');


app.use(passport.initialize());


app.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

app.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    const token = jwt.sign(req.user, keys.secret, {
        expiresIn: 10080 //seconds
    });
     res.redirect('http:localhost:3000/home');
    //res.redirect('http://localhost:3000/authToken?token=JWT'+ token);
    console.log('redirect url');
});


// app.post('/logout', (req, res) =>{
//     if(req.user) {
//         req.session.destroy();
//         res.clearCookie('connect.sid');
//         return res.couType msg:'Logging out'});
//     }else {
//         return res.json({msg:'User doesn\'t exist'});
//     }
// });

app.get('/logout', (req, res) =>{
    res.logout();
    res.send('success');
});

module.exports = app;