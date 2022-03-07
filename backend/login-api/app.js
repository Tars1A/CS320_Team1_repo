const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const app = express(); // express server

require('./passport')(passport);





// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// bodyparser
app.use(express.urlencoded({extended: false}));

// express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

  // passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  // connect flash
  app.use(flash());

  // global vars
  app.use((req,res,next)=>{
      res.locals.success_msg = req.flash('success_msg');
      res.locals.error_msg = req.flash('error_msg');
      res.locals.error = req.flash('error');
      next();
  })


// routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

// database config
const connection_url = 'mongodb+srv://team1:team1project@cluster0.ba40p.mongodb.net/UKGEmpDb?retryWrites=true&w=majority';

mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected...'))
    .catch((error) => console.log(error.message));

app.listen(PORT, console.log(`Server running on port ${PORT}`));