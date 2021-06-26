const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    sessionId:{type:Number},
    res:[{_id:false,queId:Number,resNo:Number}]
})

const responseModel = mongoose.model("responseModel",schema);
module.exports  =  responseModel;