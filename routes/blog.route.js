const express = require('express');


const router = express.Router();
const blogModel = require('../models/blog.model.js');

//api for data save
router.post('/api/v1.0.0/posts',async(req,res)=>{
    const body = req.body;
    console.log(body);
    const blog = await blogModel.create(body);
    return res.send({
        message:'Your blog post is save sucessfully',
        data: blog,
    });
});
//api for get list a veiw
router.get('/api/v1.0.0/posts', async(req,res)=>{
    try {
        let {page = 1, limit = 5 } = req.query;
        const skip = (page -  1) * limit;
        console.log(`page: ${page}, limt: ${limit}, skip: ${skip}`);
        const blogList = await blogModel.find().skip(skip).limit(Number(limit))
        const count = await blogModel.countDocuments();


        return res.send({
            message:'Blog List get sucessfully',
            count: count,
            data: blogList,
        });
    } catch(e) {
        return res.send({
            message: 'an error occured',
            data: e
        })
    }
    
});
//api for single list veiw details
    router.get('/api/v1.0.0/posts/:id',(req,res)=>{
        return res.send({
            message: 'blog view list'
        });

    });
   // api for update or modify
    router.patch('/api/v1.0.0/posts/:id',(req,res)=>{

    });
    //api for delete post
    router.delete('/api/v1.0.0/posts/:id',(req,res)=>{

    });


module.exports = router;