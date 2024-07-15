import fs from "fs";
import slugify from "slugify";
import subjectModel from "../models/subjectModel.js";

 
 

 export const createSubjectController = async(req,res)=>
{
    try {
        const  { name,slug} =
          req.fields;
        const { photo } = req.files;
        //balidation
        switch (true) {
          case !name:
            return res.status(500).send({ error: "Name is Required" });
          case !photo && photo.size > 1000000:
            return res
              .status(500)
              .send({ error: "photo is Required and should be less then 1mb" });
        }
    
        const subjects = new subjectModel({ ...req.fields,slug: slugify(name) });
        if (photo) {
          subjects.photo.data = fs.readFileSync(photo.path);
          subjects.photo.contentType = photo.type;
        }
        await subjects.save();
        res.status(201).send({
          success: true,
          message: "Product Created Successfully",
          subjects,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error in creating product",
        });
      }
}


//update subject
export const updateSubjectController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const subject = await subjectModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "Subject Updated Successfully",
      subject,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating subject",
    });
  }
};

//get all subject
export const getAllSubjectController = async(req,res)=>
{
  try{
    const subject =await subjectModel.find({})
    .select("-photo")
    .limit(12).sort({ createdAt: -1 });
    res.status(200).send({
      success:true,
      message:"goted all subject",
      counTotal:subject.length,
      subject 
    })

  }catch(error)
  {
    console.log(error)
    res.status(500).send({
      success:false,
      error,
      message:"Error in get all subject"
    })}
}

//get subject photo
export const subjectPhotoController = async(req,res)=>{

  try {
    const subject = await subjectModel.findById(req.params.pid).select("photo");
    if (subject.photo.data) {
      res.set("Content-type", subject.photo.contentType);
      return res.status(200).send(subject.photo.data); 
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
}

//get single subject
export const  getSingleSubjectController = async(req,res)=>
{
  try{
 
    const subject =await subjectModel.findOne({slug:req.params.slug})
    res.status(200).send({
      success:true,
      message:"goted single subject",
      subject 
    })

  }catch(error)
  {
    console.log(error)
    res.status(500).send({
      success:false,
      error,
      message:"Error in get single subject"
    })}
}

//delete subject
export const deleteSubjectController =async(req,res)=>
{
  try{
    const {id}= req.params
    await subjectModel.findByIdAndDelete(id)
      res.status(200).send({
        success:true,
        message:"Subject deleted successfuly"      
      })    
  }catch(error){
    console.log(error)
    res.status(500).send({
      success:false,
      message:"Error in deleting in the subject",
      error,
    })
  }
}



 