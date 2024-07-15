import express from "express";
import { createQuestionController, deleteQuestionsController, getQuestionsByTest } from "../controller/questionController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

 

 

const router = express.Router();  
  
//routes
router.post(
  "/create-question",
 requireSignIn,
 isAdmin,
   
 createQuestionController
  
);


 


 
//delete question
router.delete("/deleteQuestions/:slug",requireSignIn,
 isAdmin,deleteQuestionsController);

//get question by test
router.get("/question-test/:slug", requireSignIn,getQuestionsByTest);

 


export default router;  