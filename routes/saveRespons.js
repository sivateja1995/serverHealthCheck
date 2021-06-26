const { json } = require("express");
const express = require("express");
const router = new express.Router();
const responseModel = require("../models/userRespons");

router.post("/api/saveResponse", async (req, res) => {
  try {
    const Result = new responseModel({
      sessionId: Math.floor(new Date() / 1000),
      res: req.body["res"],
    });

    await Result.save();
    res.status(200).json(Result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

keyResponses=[{queId:1,resNo:3},{queId:2,resNo:2},{queId:3,resNo:4},{queId:4,resNo:1},{queId:5,resNo:1}]

//api for getting the results and saving the data
router.get("/api/showscore", async (req, res) => {
  try {
        let sessionId = parseInt(req.query.sessionId);
        let responses = await responseModel.find({ sessionId: sessionId });
        let score = 0;
        console.log('responses',responses[0]['res'])
        responses[0]['res'].filter((res, i) => {
            keyResponses.filter((key, j) => {
                if (res["queId"] == key["queId"]) {
                    if (res["resNo"] == key["resNo"]) {
                        score = score + 1;
                    }
                }
            });
        });
        res.status(500).json({'your responses':responses[0]['res'], score:score})
    }     catch (err) {
            console.log(err)
            res.status(500).send(err);
        }
});
module.exports = router;
