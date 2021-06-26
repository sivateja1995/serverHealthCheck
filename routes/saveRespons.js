const express = require('express');
const Router = express.Router();
const Blog = require('../routes/saveRespons');

Router.post('/api/saveResponse',async  (req,res,next)=>{
    try{
        console.log(req.body['name'])
        let Result = await  Blog.insert({'name':req.body['name']})
        res.status(201).json({'message':"submitted successfully"});
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }

})

module.exports = Router;