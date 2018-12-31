var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function (req, res, next) {

  request({
    uri: 'http://surveyjs.io/api/MySurveys/getActive',
    qs: {
      accessKey: 'a791ca62357f470d913d88d353e351e0',
      ownerId: 'keyops'
    }
  }, function (error, response, body) {
    console.log(error, response);
  }).pipe(res);

});

module.exports = router;