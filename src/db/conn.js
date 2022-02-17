const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students-api3",{
    
//useCreateIndex:true,
useNewUrlParser: true,
    useUnifiedTopology: true,  
    //useFindAndModify:false,
}).then(()=>
{
  console.log("connection is successful") ; 
}
).catch((e)=>
{
console.log("no connection");
});
//we have created connection but now we have to check connection that it is 
//working or not for that to run thi we have to require this connection in our express App which is app.js
