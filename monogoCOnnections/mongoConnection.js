const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL,{
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
},console.log('connection is created'))