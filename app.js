const express = require('express');
const app = express();

const indexRoute = require('./routes/index');
const port = 5000;
const blogRoute = require('./routes/blog.route.js');

const db = require('./config/db.js');

db.connectDB().then(con => {
    console.log('databse is connected....');
});


app.use(express.json());
app.use(express.urlencoded({ extends: true}));


app.get('/', (request,response)=>{
    return response.send({
        message: "WELCOME TO BLOG API",
    });
});


app.use("/",indexRoute);

app.use("/",blogRoute);


app.listen(port, ()=> {
    console.log(`Server Is Running At http://localhost:${port}`);
});
