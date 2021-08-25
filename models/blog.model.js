const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : 'string',
    description : 'string',
    author : 'string',
    date : {type:Date,default:Date.now},
    status : 'string',
    
    category_id : mongoose.Types.ObjectId,

});

module.exports = mongoose.model('blog', blogSchema);

    
