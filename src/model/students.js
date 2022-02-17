//const express = require("express");
const mongoose = require("mongoose");
const validator= require("validator");
//now we have to create a schema
const studentSchema = new mongoose .Schema(
    {
        name:String,
         email:String,
         
         adress:String,

    }
)
//now we will create new collections
//will capital
const Student = new mongoose.model("Student",studentSchema);
//we wiil have nedd of schema in Appjs so we will export it there
module.exports=Student;