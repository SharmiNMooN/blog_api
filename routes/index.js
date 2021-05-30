const express = require('express');

const router = express.Router();


router.get('/api/sharmin',(request,response)=>{
   return response.send({
       message: 'hellow from sharmin'
   });
});

module.exports = router;