const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const passportSetup = require('./passport/passport-setup');
//require('./passport/passport-setup')(passport);
const keys = require('./passport/keys');
const authRoutes = require('./auth/routes');
const courses = require('./db/course-model');
const enrolls = require('./db/enroll-model');
const payController = require('./controllers/paymentController');
const request = require('request');

const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// app.use(cookieSession({
//     maxAge: 24*60*60*1000,
//     keys: [keys.session.cookieKey]
// }));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongodb.dbURL, () => {
    console.log('connected to mongodb');
});
mongoose.Promise = global.Promise;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/courses/:input', (req, res, next) => {
    courses.findOne({type : req.params.input}).then((course) =>{
        if(course){
            res.send(course);
        } else{
            console.log('error');
        }
        next();
    });
});

app.get('/enroll/:input', (req, res, next) =>{
    enrolls.findOne({title: req.params.input}).then((enroll) =>{
        if(enroll){
            res.send(enroll);
        }else{
            console.log('error');
        }
        next();
    })
})

router.post('/payment/payumoney', payController.payuMoneyPayment );

router.post('/payment/payumoney/response', payController.payuMoneyPaymentResponse);


app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log('App listening to port' + PORT);
    
    
});