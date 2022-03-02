const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../auth');

router.get('/', (req, res) => res.render('welcome'));

// dashboard
router.get('/dashboard', ensureAuthenticated,(req, res) => res.render('dashboard', {
    name: req.user.firstName
}));

module.exports = router;