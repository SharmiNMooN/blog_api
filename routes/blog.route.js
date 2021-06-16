const express = require('express');


const router = express.Router();


router.post('/api/v1.0.0/posts',(req,res)=>{
    const body = req.body;
    console.log(body);
    return res.send({
        message:'Your blog post is save sucessfully',
        data: body,
    });
});


module.exports = router;
