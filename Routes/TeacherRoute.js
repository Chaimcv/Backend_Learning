const express=require("express");
const { createTeacher } = require("../Controller/TeacherController");
const TeacherRouter=express.Router();

TeacherRouter.post("/",createTeacher);


module.exports=TeacherRouter;