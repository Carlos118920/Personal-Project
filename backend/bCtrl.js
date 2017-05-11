const app = require("./../index");
const db = app.get("db");
const config = require("./../backend/config.js")
const axios = app.get("axios");

module.exports = {
  getAll: (req, res, next) => {
    db.get_all((err, data) => {
      if(!err){
        res.status(200).send(data)
      } else {
        res.send(err);
      }
    })
  },
  getCourse: (req, res, next) => {
    db.get_course(req.params.id ,(err, data) => {
      if(!err){
        res.status(200).send(data)
      } else {
        res.send(err);
      }
    })
  },
  submitApplication: (req, res, next) => {
    db.submit_application(req.body.id, req.body.survey.why, req.body.survey.how, req.body.survey.housing, req.body.survey.financing, (err, data) => {
      if(!err){
        res.status(200).send(data)
      } else {
        res.send(err);
      }
    })
  },
  getLocationData: (req, res, next) => {
    axios.get("http://ip-api.com/json").then(function(response){
      let origin = response.data.city + "," + response.data.regionName;
      axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + origin + "&destinations=Dallas,Tx|Provo,UT|SaltLakeCity,UT&key=" + config.APIKEY).then(function (response2){
        res.status(200).send(response2.data);
      })
    })
  }
}
