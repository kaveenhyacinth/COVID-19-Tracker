const router = require('express').Router();

// Fire controller
const indexController = require("../controllers/indexController");


router.get('/', indexController.allIndex);

router.post('/index', indexController.countryIndex);

module.exports = router;