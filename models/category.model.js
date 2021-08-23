const mongoose = require("mongoose");
const {Schema} = mongoose;

const categorySchema = new Schema({

    name: Schema.Types.String,
    slug: Schema.Types.String

});

const categoryModel= mongoose.model("category",categorySchema);
module.exports = categoryModel;