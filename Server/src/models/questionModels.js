import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
     question_no:{
      type:Number,
       required: true,
     },
     slug: {
      type: String,
      required: true,
    },
   
     question: {
      type:String,
       required: true,
     },
    
     options: [String]  ,

    correct_ans_index: {
      type:Number,
       required: true,  
    },
    test: {
      type: mongoose.ObjectId,
      ref: "Test",
      required: true,
    }, 
    
    description: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

 

export default mongoose.model("questions", questionSchema);






