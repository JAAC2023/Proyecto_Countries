const router = require('express').Router();

const getCountries = require('../Controllers/getCountries');
const getActivities = require('../Controllers/getActivities');
const postCountries = require('../Controllers/postCountries');
const getCountryById = require('../Controllers/getCountryById');
const postActivityHandler = require('../Handlers/postActivityHandler');
const getCountryByName = require('../Controllers/getCountryByName');

//___________________Contries_______________________
router.post('/savecountry', postCountries);
router.get('/countries', getCountries);
router.get('/countries/name', getCountryByName);
router.get('/countries/:id', getCountryById);

//___________________Activities_____________________
router.get('/activities', getActivities);
router.post('/activities', postActivityHandler);

module.exports = router;
