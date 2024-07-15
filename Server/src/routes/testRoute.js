import express from "express";
import { createTestController, deleteTestBySubjectController, deleteTestController, getAllTestController, getTestBySubject } from "../controller/testController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

//import formidable from "express-formidable";

 

const router = express.Router();


// create category
router.post( 
  "/create-test", 
  requireSignIn,
  isAdmin,  //formidable(),
  createTestController
);


//getAll subject
router.get(
  "/getalltest",
  getAllTestController)

  
  // delete test
router.delete(
  "/deletetest/:id",
   requireSignIn,
  isAdmin,
  deleteTestController)

 //get tests by subject
router.get(
  "/gettestbysubject/:slug",
   requireSignIn,
 
  getTestBySubject)
 
  
 //delete tests by subject
router.delete(
  "/deletetestbysubject/:slug",
   requireSignIn,
  isAdmin,
  deleteTestBySubjectController)
 
 
 

export default router;