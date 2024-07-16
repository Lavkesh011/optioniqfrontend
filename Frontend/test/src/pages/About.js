import Layout from "../components/Layout/Layout";
import React from "react";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            “OptionIQ” is a web application designed to enhance learning through quiz-based assessments. 
            It allows users to find and take quizzes categorized by subjects such as Mathematics, Science, and English.
             The platform features user registration, profile management, and an interactive quiz interface with multiple question types and immediate feedback.
              Users can track their progress with performance reports. Admin tools enable educators to create and manage quizzes and monitor user activity. 
              OptionIQ's responsive design ensures accessibility across devices, providing a seamless and engaging educational experience for students, educators, and self-learners alike.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
