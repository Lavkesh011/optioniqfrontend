import mongoose from "mongoose";

 

const testSchema = new mongoose.Schema({
 
  number:{
    type:Number,
    require:true,
  },
  name: {
    type: String,
    required: true,
     unique: true,
  },
  subjectname: {
      type:  String,
      required: true,
    },
    subject: {
      type: mongoose.ObjectId,
      ref: 'Subjects',
      required: true,
    },
  slug: {
    type: String,
    lowercase: true,
  },
 
   
});          

export default mongoose.model("Test", testSchema);

