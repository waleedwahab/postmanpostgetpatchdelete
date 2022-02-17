const express = require ("express");
const router = new express.Router();

//we also have to require student schema page
const Student= require("../model/students");
router.post("/students",(req, res)=>
{
   //now i have to fetch data from postman that we created in json form
   console.log(req.body);
   const user = new Student(req.body);
   
   //   step 5 but this will just output this  [] not correct result for hti we defone xprs json i.e express.json() 
   //now we have to store this data in database mongoose  so wehave saved this data in in user const variable we will call it
   //. save methods alsoreturn promises so we use then if successful it show oour data
   // if not it will show us error
   user.save().then(()=>
   {
       res.status(201).send(user);
   }).catch ((e)=>
   {
       res.status(400).send(e);
   })

    
});
router.post("/std",(req,res)=>
{
    res.send("hello ");
})

// here we use postman for docuent creation with defined schema in student js//
//now  we have to use get method for reading data
router.get("/students", async(req, res )=>
{
    try{
        //for this we hae to go postman and click on student registartion add new request

               const studentData         = await Student.find();
               res.send(studentData);

     }
    catch(e)
    {
res.send(e);
    }

})
router.get("/students/:id", async(req ,res)=>
{
try
{
    //params is used for getting data form url
    // we have to create a new request for this in postman 
const _id = req.params.id;
   const studentData =await Student.findById(_id);
   res.send(studentData);
   //if there is error in studentdata we set consition for this
   if (!studentData)
   {
       return res.status(404).send();

   }
else
{
    res.send(studentData)
}


/*
console.log(req.params.id);
res.send(req.params.id);*/
}
catch(e)
{
    res.status(500).send(e);
}
});

//update Students by id  we will use patch method
router.patch("/students/:id", async(req,res)=>
{
    // we have to create a new request fro update it is mendetory to create a new requst for every request in postman
try{
const _id = req.params.id;
//if we donot write new true the data we updated will not show in postman by first send click 
//for this we use new:true;
// if this this findbyIdupdate will throw error  then we have to use findandmodify false in connection file
         const updateStudents =await Student.findByIdAndUpdate(_id, req.body,{new :true});
   res.send(updateStudents);
}
catch(e)
{
res.status(404).send(e);
}


}) 
// delete student by  id
router.delete("/students/:id", async(req, res)=>
{
try{
    //const _id = req.params.id;
    //we have to create a delete req in postman for this
      const deleteStudent= await  Student.findByIdAndDelete(req.params.id);
      
      if(!req.params.id)
      {
          return res.status(400).send();
      }
res.send(deleteStudent);
}
catch(er)
{
   res.status(500).send(er)  ;
}
})

//we have to export router tp App.js file
module.exports=router;