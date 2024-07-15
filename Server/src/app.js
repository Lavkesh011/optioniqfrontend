import authRoute from "./routes/authRoute.js";
import colors from "colors";
import connectDB from "./confing/db.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import historyRoute from "./routes/historyRoute.js";
import morgan from "morgan";
import questionRoute from "./routes/questionRoute.js";
import subjectRoute from "./routes/subjectRoute.js";
import testRoute from "./routes/testRoute.js";

  

 //rest object
const app = express();
 
 
 //configure env
dotenv.config();

//database confing
 connectDB();

 
//middelwares  
  app.use(cors());
app.use(express.json());
app.use(morgan('dev'));   
 
//routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/questions',questionRoute)
app.use('/api/v1/test',testRoute)
app.use('/api/v1/subject',subjectRoute)
app.use('/api/v1/histoy',historyRoute)
 
 

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Quiz  app</h1>");
});
  
//PORT
const PORT = process.env.PORT ;
 
//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
