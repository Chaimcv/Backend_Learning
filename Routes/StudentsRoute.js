const express=require("express");
const{ createStudent,getStudentById,getStudents,deleteStudent,updateStudent }=require("../Controller/StudentController");
const StudentRouter=express.Router();

StudentRouter.post("/",createStudent);
StudentRouter.get("/",getStudents);
StudentRouter.get("/:studentid",getStudentById);
StudentRouter.put("/:studentid",updateStudent);
StudentRouter.delete("/:studentid",deleteStudent);


module.exports=StudentRouter;
