// Fire unirest sdk
const unirest = require("unirest");
const covid19 = require("covid19-api");

// Load dotenv
require("dotenv").config();

// Get info from .env
const url = process.env.END_POINT;
const api = process.env.API_KEY;
const host = process.env.HOST;


const allIndex = (req, res) => {
  covid19
    .getReports()
    .then((data) => {
      console.log(data);
      res.status(200).render('index', {data : data[0][0]});
      // res.status(200).json(data[0][0]);
    })
    .catch((err) => res.status(400).render('error', {msg: "Sorry! We'll be back soon"}))
    .catch((err) => res.status(404).render('error', {msg: "it's 404 time, Stay Home! Stay Safe!"}));
};


const countryIndex = (req, res) => {

    var country = req.body.country;

    country = country.replace(/ /g, "-");

    covid19
      .getReportsByCountries(country)
      .then((data) => {
        console.log(data);
        res.status(200).render('country', {data : data[0][0]});
        // res.status(200).json(data[0][0]);
      })
      .catch((err) => res.status(400).render('error', {msg: "Oopz! We couldn't find what you are looking for..."}));
  };

module.exports = {
  allIndex,
  countryIndex
};
