const app = require("./../index");
const db = app.get("db");

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
  }
}
