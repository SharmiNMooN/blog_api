const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : 'string',
    description : 'string',
    author : 'string',
    date : {type:Date,default:Date.now},
    status : 'string',

});
module.exports = mongoose.model('blog', blogSchema);
    
