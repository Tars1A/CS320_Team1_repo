const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');


// user scehma
const User = require('../CS320_Team1_repo/backend/models/user');

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// register handle
router.post('/register', (req, res) => {
    const {firstName, email, password, password2 } = req.body;
    let errors = [];

    // check required fields
    if(!firstName || !email || !password || !password2) {
        errors.push({msg: 'Please fill in all fields'});
    }

    // check passwords match
    if (password !== password2) {
        errors.push({msg: 'Password do not match'});
    }

    // check password length
    if (password.length< 6){
        errors.push({msg: 'Password should be at least 6 characters'});
    }

    if(errors.length >0) {
        res.render('register', {
            errors,
            firstName,
            email,
            password,
            password2
        });
    }else{
        // validation passed
        User.findOne({email: email})
        .then(user => {
            if(user) {
              // user exist
              errors.push({msg: 'Email is already registered'});
              res.render('register', {
                errors,
                firstName,
                email,
                password,
                password2
            });  
            } else {
                const newUser = new User({
                    firstName,
                    email,
                    password
                });

                // encrypt password
                bcrypt.genSalt(10, (error, salt) => bcrypt.hash(newUser.password, salt, (err, hash)=> {
                    if(err) throw err;
                    // set password to hashed
                    newUser.password = hash;
                    // save user
                    newUser.save().then(user=>{
                        req.flash('success_msg', 'You are registered and can log in.');
                        res.redirect('/users/login');
                    }).catch(err=>console.log(err));
                }))
            }
        })
        }

});


// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});


//logout handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;