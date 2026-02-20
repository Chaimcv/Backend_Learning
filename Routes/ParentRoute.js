const express=require("express");
const { createParent, getParents, getParentById, updateParent, deleteParent,ParentLogin } = require("../Controller/ParentController");
const ParentRouter=express.Router();

ParentRouter.post("/",createParent);
ParentRouter.get("/",getParents);
ParentRouter.get("/:teachersid",getParentById);
ParentRouter.put("/:teacherid",updateParent);
ParentRouter.delete("/:teacherid",deleteParent);
ParentRouter.post("/login",ParentLogin);

module.exports=ParentRouter;