//  1   first we have to create a connection setup then get url fr localhost ten we del that get 

const express = require('express');
// here we are requiring routers
const studentRouter = require("./routers/student");
//here we are requiring db connection 
require("./db/conn");
const app = express();
app.use(studentRouter);
//here we have required students
//after this step we will go to poastman and we will creae there anew collection
//after this i have to go postman select students go to bpdy the raw then json
//and create an json document  in postman


const Student= require("./model/students");
//step 5 implementation
app.use(express.json());
const port = 8001;
// ist step creating a new router
//const router =new express.Router();
// 2 step we need to define the router
//router.get("/waleed", (req, res)=>
//{
   // res.send("hello from router");
//})
//step 3 we have to register our router 



//2 setp now we have th create new student so for this we have to connetc with mongo db so now we create conn.js


app.listen(port, ()=>
{
    console.log(`connection is setup ${port}`);
})