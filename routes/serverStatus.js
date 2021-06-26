var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/serverStatus', async(req,res,next)=> {
  //process uptime gives time in seconds 
  const time = Math.floor(process.uptime())
  PORT = process.env.PORT
  startTime = JSON.stringify(time)+ 's';
  res.status(200).json({status:`running on port ${PORT}`,started:startTime})
});

module.exports = router;
