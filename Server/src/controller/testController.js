import fs from "fs";
import questionModels from "../models/questionModels.js";
import slugify from "slugify";
import subjectModel from "../models/subjectModel.js";
import testModel from "../models/testModel.js";

export const createTestController = async (req, res) => {
  try {
    const { number,name ,subject,subjectname} = req.body  
    
    if (!number) {
      return res.status(401).send({ message: "Number is required" });
    }
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
     if (!subjectname) {
      return res.status(401).send({ message: "subject name is required" });
    }
      if (!subject) {
      return res.status(401).send({ message: "Subject is required" });
    }
    const existingTest = await testModel.findOne({name});
    if (existingTest) {
      return res.status(200).send({
        success: false,
        message: "Test  Already Exisits",
      });
    }
    const test = await new testModel({
       number,
       name,
     subject,
     subjectname,
      slug: slugify(name)
    }).save()
    res.status(201).send({
      success: true,
      message: "new Test created",
      test,
    });
  } catch (error) {
    console.log(error);   
    res.status(500).send({
      success: false,
      error,
      message: "Errro in Test",
    });
  }
};              

 
// Delete test 
 
export const deleteTestController =async(req,res)=>
{
  try{
    const {id}= req.params
    await testModel.findByIdAndDelete(id)
      res.status(200).send({
        success:true,
        message:"Test deleted successfuly"      
      })    
  }catch(error){
    console.log(error)
    res.status(500).send({
      success:false,
      message:"Error in deleting in the test",
      error,
    })
  }
}

 

//get all test
export const getAllTestController= async(req,res)=>{

  try{
    const tests = await testModel.find({})
    res.status(200).send({
      success:true,
      message:"goted all tests",
      tests
    })

  }catch(error)
  {
    console.log(error)
    res.status(500).send({
      success:false,
      error,
      message:"Error in get all test"
    })}
}


//Tests delete by subject slug
export const  deleteTestBySubjectController = async (req, res) => {
  try {
    const subject = await subjectModel.findOne({ slug: req.params.slug });
    const test = await testModel.deleteMany({ subject }).populate("subject");
    res.status(200).send({
      success: true,
      // subject,  
      test,
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

 


// get  test by subject
export const  getTestBySubject = async (req, res) => {
  try {
    const subject = await subjectModel.findOne({ slug: req.params.slug }) 
    const test = await testModel.find({ subject }) 
    res.status(200).send({
      success: true,
       test,  
       counTotal:test.length,
      
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


 