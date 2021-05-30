const express = require('express');
const app = express();

const port = 5000;

app.get('/', (request,response)=>{
    return response.send({
        message: "HELLO WORLD",
    });
});



app.listen(port, ()=> {
    console.log(`Server Is Running At http://localhost:${port}`);
});
