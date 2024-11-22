const express = require('express');
const router = express.Router();

//parses incoming json to native js objects
router.use(express.json());

//parses URL encoded strings
router.use(express.urlencoded());

//render the view
router.get('/', (req, res) => {
    res.render("home");

});

module.exports = router;