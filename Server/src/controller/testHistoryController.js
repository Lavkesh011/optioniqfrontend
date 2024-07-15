import testHistory from "../models/testHistoryModel.js";

 import userModel from "../models/userModel.js";

// export const testHistoryController = async(req,res)=>
// {
//     try {
//         const  {  user, test, marks,   totalmaks} =req.body;
        
//         //balidation
//         switch (true) {
//           case !user:
//             return res.status(500).send({ error: "user is Required" });
//          case !test:
//             return res.status(500).send({ error: "test is Required" });
     
//         case !   totalmaks:
//         return res.status(500).send({ error: "Total markes is Required" }); 
//         case !marks:
//             return res.status(500).send({ error: "Markes is Required" });
           
//         }
    

//         const History =   new testHistory({ user, test, marks, totalmaks });
         
//         await History.save();
//         res.status(201).send({
//           success: true,
//           message: "History is saved  Successfully",
//           History,
//         });
//       } catch (error) {
//         console.log(error);
//         res.status(500).send({
//           success: false,
//           error,
//           message: "Error in saving History",
//         });
//       }
// }

 

export const testHistoryController = async (req, res) => {
  try {
    const { user, test, marks, totalmarks } = req.body;

    // Validation
    switch (true) {
      case !user:
        return res.status(400).send({ error: "User is required" });
      case !test:
        return res.status(400).send({ error: "Test is required" });
      case !totalmarks:
        return res.status(400).send({ error: "Total marks is required" });
      case !marks:
        return res.status(400).send({ error: "Marks is required" });
    }

    // Check if a history object already exists for the user and test
    const existingHistory = await testHistory.findOne({ user, test });

    if (existingHistory) {
      // If history exists, update it instead of creating a new one
      existingHistory.marks = marks;
      existingHistory.totalmarks = totalmarks;
      await existingHistory.save();

      return res.status(200).send({
        success: true,
        message: "Result updated successfully",
        History: existingHistory,
      });
    } else {
      // If history doesn't exist, create a new one
      const newHistory = new testHistory({ user, test, marks, totalmarks });
      await newHistory.save();

      return res.status(201).send({
        success: true,
        message: "Result saved successfully",
        History: newHistory,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in saving Result",
    });
  }
};



export const getHistoryByUser =async(req,res)=>{
 try {
    const user= await userModel.findOne({ _id: req.params._id});
    const testhistories = await testHistory.find({ user })     
    res.status(200).send({
      success: true,
       testhistories,
     counTotal:testhistories.length,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "Error While Getting Result ",
    });
  }

}