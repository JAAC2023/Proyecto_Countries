const router = require('express').Router();

const getCountry = require('../Controllers/getCountry');
const saveApiCountry = require('../Controllers/saveApiCountry');
const getCountryById = require('../Controllers/getCountryById');
const getCountryByName = require('../Controllers/getCountryByName');

router.get('/countries', getCountry);
router.get('/countries/name', getCountryByName);
router.get('/countries/:id', getCountryById);
router.post('/savecountry', saveApiCountry);

module.exports = router;
