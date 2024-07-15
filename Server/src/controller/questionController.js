import questionModels from "../models/questionModels.js";
import slugify from "slugify";
import subjectModel from "../models/subjectModel.js";
import testModel from "../models/testModel.js";

export const createQuestionController = async (req, res) => {
  try {
    const { question_no, question,slug, description, options, test, correct_ans_index} =   
      req.body;
    
    //validation
        switch (true) {
         case ! question_no:
        return res.status(500).send({ error: "Test question_no is Required" }); 
        case ! question:
        return res.status(500).send({ error: "Name is Required" });
        case !description:
        return res.status(500).send({ error: "Description is Required" });
        case !  options:
        return res.status(500).send({ error: "Option is Required" });  
        case ! correct_ans_index:
        return res.status(500).send({ error: "correct-ans-index is Required" });
        case ! test:
        return res.status(500).send({ error: "Test category is Required" });
       
      
    }
    const questions = await new questionModels({
       ...req.body,
       slug: slugify(question)
    }).save()
    res.status(201).send({
      success: true,
      message: "Question Created Successfully",
      questions,
    });  
} catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,               
      message: "Error in crearing Question",
      
    });
  }
};

// get question by test
export const  getQuestionsByTest = async (req, res) => {
  try {
    const test = await testModel.findOne({ slug: req.params.slug });
    const questions = await questionModels.find({ test })    //.populate("test");
    res.status(200).send({
      success: true,
      test,  
      questions,
     counTotal:questions.length,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false, 
      error,
      message: "Error While Getting products",
    });
  }
};

//question delete by test slug
export const  deleteQuestionsController = async (req, res) => {
  try {
    const test = await testModel.findOne({ id: req.params.Id });
    const questions = await questionModels.deleteMany({ test }).populate("test");
    res.status(200).send({
      success: true,
      test,  
      questions,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "Error While Getting products",
    });
  }
};

 