import mongoose from "mongoose";

const testHistorySchema = new mongoose.Schema(
  {
     user: {
      type: mongoose.ObjectId,
      ref: "Users",
      required: true,
    }, 
 
    test: {
       type: String,
      required: true,
    },
 
    totalmarks:{
      type:Number,
      require:true
    },
    marks:{
      type:Number,
       required: true,
     }
    
  },
  { timestamps: true }
);

 

export default mongoose.model("testhistory", testHistorySchema);