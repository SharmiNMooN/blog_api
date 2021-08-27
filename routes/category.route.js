const express = require("express");
const router = express.Router();
const categoryModel = require("../models/category.model");

//api for create category
// POST: /api/v1.0.0/categories

router.post('/api/v1.0.0/categories',async(req,res)=>{

    const payload = req.body;

    if(!payload.name){
        return res.status(400).send({
            success: false,
            message:'category name is required'
        }) 
    }
    const slug = payload.name.trim().split(' ').join('-');
    // software development
    // ['software', 'development']
    //software-development
    
    const category = await categoryModel.create({

        name: payload.name,
        slug: slug
        
    });
    return res.send({

        message: 'category is created',
        data: category
    })

});




//api for get categories
// GET: /api/v1.0.0/categories



//api for get category
//GET: /api/v1.0.0/categories/:id




//api for upadate category
// PATCH: //api/v1.0.0/categories/:id




// api for delete category
// DELETE: //api/v1.0.0/categories/:id

module.exports = router;
