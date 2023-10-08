const router = require("express").Router();

const getCountryById = require("../Controllers/getCountryById");
const getAllCountries = require("../Controllers/getAllCountries");
const getAllActivities = require("../Controllers/getAllActivities");
const getCountryByName = require("../Controllers/getCountryByName");
const postActivityHandler = require("../Controllers/postActivityHandler");

//___________________Contries_______________________
router.get("/countries/name", getCountryByName);
router.get("/countries/:id", getCountryById);
router.get("/countries", getAllCountries);

//___________________Activities_____________________
router.get("/activities", getAllActivities);
router.post("/activities", postActivityHandler);

module.exports = router;
