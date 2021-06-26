import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
 name:{
     type:string
 }  
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;