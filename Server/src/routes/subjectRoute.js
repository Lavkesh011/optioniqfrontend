import express from "express";
import { createSubjectController, deleteSubjectController, getAllSubjectController, getSingleSubjectController, subjectPhotoController, updateSubjectController } from "../controller/subjectController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

 import formidable from "express-formidable";
const router = express.Router();
      
// create subject
router.post(
  "/create-subject",
  requireSignIn,
  isAdmin,
  formidable(),
 createSubjectController, 
 
);

//  update subject
router.put(
  "/update-subject/:id",
  requireSignIn,
  isAdmin,
  updateSubjectController
);

//get photo
router.get("/subject-photo/:pid", subjectPhotoController);

//getAll subject
router.get(
  "/getallsubject",   
  getAllSubjectController)

  //getsingle subject
router.get(
  "/getsinglesubject/:slug",
  getSingleSubjectController)

  // delete subject
router.delete(
  "/deletesubject/:id",
   requireSignIn,
  isAdmin,
  deleteSubjectController)


  export default router;