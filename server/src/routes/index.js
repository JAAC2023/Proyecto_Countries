const router = require('express').Router();

const downloadCountry = require('../Controllers/downloadCountry');

//const router = Router();

router.get('/loadcountry', downloadCountry)

module.exports = router;
