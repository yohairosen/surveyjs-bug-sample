var express = require('express');
var router = express.Router();
var request = require('request');
// http://surveyjs.io/api/MySurveys/getActive?accessKey=b4a00480f27c438596d828bc42da477a
/* GET users listing. */
router.get('/', function (req, res, next) {

  request({
    uri: 'http://surveyjs.io/api/MySurveys/getActive',
    qs: {
      accessKey: 'b4a00480f27c438596d828bc42da477a',
      ownerId: 'keyops'
    }
  }, function (error, response, body) {
    console.log(error, response);

    if(error)
     return  res.send(error);

    
    res.send(response);
  })

});

module.exports = router;