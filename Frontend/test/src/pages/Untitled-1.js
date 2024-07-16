// import Layout from "../../components/Layout/Layout.js";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Modal } from "antd";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";

 

     
 

    
 
 
 





// const StartTest = () => {
//   const { slug  } = useParams(); // Get slug parameter from URL
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [score, setScore] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [attemptedQuestions, setAttemptedQuestions] = useState([]);
//   const [testTime, setTestTime] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [testSubmitted, setTestSubmitted] = useState(false);
   


//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTimeLeft => {
//         if (prevTimeLeft > 0) {
//           return prevTimeLeft - 1;
//         } else {
//           // Automatically submit test when time runs out
//           handleSubmitTest();
//           return 0;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const getAllQuestionsByTest = async (slug ) => {
//     try {
//       const { data } = await axios.get(`/api/v1/questions/question-test/${slug}`);
//       if (data?.success) {
//         setQuestions(data?.questions);
//         setTestTime(data.questions.length * 40);
//         setTimeLeft(data.questions.length * 40);
       
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong in getting questions");
//     }
//   };

//     useEffect(() => {
//     const storedSlug = localStorage.getItem('slug');
//     const initialSlug = storedSlug || slug;
//     getAllQuestionsByTest(initialSlug);
//     // Store the initial slug in localStorage
//     localStorage.setItem('slug', initialSlug);
//   }, [slug]);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };



//   const handleNextQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const correctOption = currentQuestion.options[currentQuestion.correct_ans_index - 1];
//     if (selectedOption === correctOption) {
//       setScore(prevScore => prevScore + 2);
//     }

//     setSelectedOption('');
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//       setTimeLeft(prevTimeLeft => prevTimeLeft - 40);
//     }
//     setAttemptedQuestions(prevAttempted => [...prevAttempted, currentQuestionIndex]);
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(prevIndex => prevIndex - 1);
//     }
//   };

//   const handleSubmitTest = () => {
//     setShowModal(true);
//     setTestSubmitted(true); // Set testSubmitted to true
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <Layout>
//       <div className="testpage">
//         <div className="row">
//           <div className="col-9">
//             <div className="form-container2">
//               <div className="question-container">
//                 {currentQuestion ? (
//                   <div>
//                     <h3>Question</h3>
//                     <h2> {currentQuestion.question}</h2>
//                     <ul className="options-list">
//                       {currentQuestion.options.map((option, index) => (
//                         <li key={index}>
//                           <label>
//                             <button
//                               className={selectedOption === option ? "option-button selected" : "option-button"}
//                               onClick={() => handleOptionSelect(option)}
//                             >
//                               {` ${String.fromCharCode(65 + index)})`}  {option}
//                             </button>
//                           </label>
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="dprebt">
//                       <button onClick={handlePrevQuestion}>Previous</button>
//                       <button disabled={!selectedOption} onClick={handleNextQuestion}>Next</button>
//                     </div>
//                   </div>
//                 ) : (
//                   <p>Loading...</p>
//                 )}
//               </div>
//               <Modal
//                 visible={showModal}
//                 onCancel={closeModal}
//                 className="custom-modal" // Custom class for modal
//                 footer={null}
//               >
//                 <p style={{ fontSize: '34px', fontFamily: 'Arial Black, sans-serif' }}>Test Result</p>
//                 <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>Your score is: {score}/{questions.length * 2}</p>
//                 <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>You attended {attemptedQuestions.length} questions.</p>
//               </Modal>
//             </div>
//           </div>
//           <div className="col-3">
//             <div className="test-time">
//               {` Total time of test = ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`} </div>
//             <div className="form-container1">
//               <div className="index-buttons">
//                 {questions.map((_, index) => (
//                   <button
//                     key={index}
//                     className={
//                       currentQuestionIndex === index
//                         ? "current-question"
//                         : attemptedQuestions.includes(index)
//                         ? "attended-question"
//                         : currentQuestionIndex < index
//                           ? "remaining-question"
//                           : "unattended-question" // Add unattended-question class
//                     }
//                     onClick={() => setCurrentQuestionIndex(index)}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="dsubtest">
//               {!testSubmitted && (
//                 <button className="submittestbut" onClick={handleSubmitTest}>Submit Test</button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default StartTest;




 

// const StartTest = () => {
//   const { slug } = useParams(); // Get slug parameter from URL
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [score, setScore] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [attemptedQuestions, setAttemptedQuestions] = useState([]);
//   const [testTime, setTestTime] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [testSubmitted, setTestSubmitted] = useState(false);
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTimeLeft => {
//         if (prevTimeLeft > 0) {
//           return prevTimeLeft - 1;
//         } else {
//           // Automatically submit test when time runs out
//           handleSubmitTest();
//           return 0;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const getAllQuestionsByTest = async (slug) => {
//     try {
//       const { data } = await axios.get(`/api/v1/questions/question-test/${slug}`);
//       if (data?.success) {
//         setQuestions(data?.questions);
//         setTestTime(data.questions.length * 40);
//         setTimeLeft(data.questions.length * 40);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong in getting questions");
//     }
//   };

//   useEffect(() => {
//     const storedSlug = localStorage.getItem('slug');
//     const initialSlug = storedSlug || slug;
//     getAllQuestionsByTest(initialSlug);
//     // Store the initial slug in localStorage
//     localStorage.setItem('slug', initialSlug);
//   }, [slug]);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };
 
//   const handleNextQuestion = () => {
  
//     const currentQuestion = questions[currentQuestionIndex];
//     const correctOption = currentQuestion.options[currentQuestion.correct_ans_index - 1];
    
//     if (selectedOption === correctOption) {
//       setScore(prevScore => prevScore + 2);
//     }

//     setSelectedOption('');
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//       setTimeLeft(prevTimeLeft => prevTimeLeft - 40);
//     }
//     setAttemptedQuestions(prevAttempted => [...prevAttempted, currentQuestionIndex]);
 
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(prevIndex => prevIndex - 1);
//     }
//   };

//   const handleSubmitTest = () => {
//     setShowModal(true);
//     setTestSubmitted(true); // Set testSubmitted to true
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <Layout>
//       <div className="testpage">
//         <div className="row">
//           <div className="col-9">
//             <div className="form-container2">
//               <div className="question-container">
//                 {currentQuestion ? (
//                   <div>
//                     <h3>Question</h3>
//                     <h2>{currentQuestion.question}</h2>
//                     <ul className="options-list">
//                       {currentQuestion.options.map((option, index) => (
//                         <li key={index}>
//                           <label>
//                             <button
//                               className={selectedOption === option ? "option-button selected" : "option-button"}
//                               onClick={() => handleOptionSelect(option)}
//                             >
//                               {` ${String.fromCharCode(65 + index)})`} {option}
//                             </button>
//                           </label>
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="dprebt">
//                       <button onClick={handlePrevQuestion}>Previous</button>
//                       <button onClick={handleNextQuestion}>Next</button>
//                     </div>
//                   </div>
//                 ) : (
//                   <p>Loading...</p>
//                 )}
//               </div>
//               <Modal
//                 visible={showModal}
//                 onCancel={closeModal}
//                 className="custom-modal" // Custom class for modal
//                 footer={null}
//               >
//                 <p style={{ fontSize: '34px', fontFamily: 'Arial Black, sans-serif' }}>Test Result</p>
//                 <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>Your score is: {score}/{questions.length * 2}</p>
//                 <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>You attended {attemptedQuestions.length} questions.</p>
//               </Modal>
//             </div>
//           </div>
//           <div className="col-3">
//             <div className="test-time">
//               {`Total time of test = ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`} </div>
//             <div className="form-container1">
//               <div className="index-buttons">
//                 {questions.map((_, index) => (
//                   <button
//                     key={index}
//                     className={
//                       currentQuestionIndex === index ? "current-question"
//                         : attemptedQuestions.includes(index) ? "attended-question"
//                         : currentQuestionIndex < index ? "remaining-question"
//                         : "unattended-question" // Add unattended-question class
//                     }
//                     onClick={() => setCurrentQuestionIndex(index)}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="dsubtest">
//               {!testSubmitted && (
//                 <button className="submittestbut" onClick={handleSubmitTest}>Submit Test</button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default StartTest;


 

// const StartTest = () => {
//   const { slug } = useParams(); // Get slug parameter from URL
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState({});
//   const [score, setScore] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [attemptedQuestions, setAttemptedQuestions] = useState([]);
//   const [testTime, setTestTime] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [testSubmitted, setTestSubmitted] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTimeLeft => {
//         if (prevTimeLeft > 0) {
//           return prevTimeLeft - 1;
//         } else {
//           // Automatically submit test when time runs out
//           handleSubmitTest();
//           return 0;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const getAllQuestionsByTest = async (slug) => {
//     try {
//       const { data } = await axios.get(`/api/v1/questions/question-test/${slug}`);
//       if (data?.success) {
//         setQuestions(data?.questions);
//         setTestTime(data.questions.length * 40);
//         setTimeLeft(data.questions.length * 40);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong in getting questions");
//     }
//   };

//   useEffect(() => {
//     const storedSlug = localStorage.getItem('slug');
//     const initialSlug = storedSlug || slug;
//     getAllQuestionsByTest(initialSlug);
//     // Store the initial slug in localStorage
//     localStorage.setItem('slug', initialSlug);
//   }, [slug]);

//   const handleOptionSelect = (option) => {
//     setSelectedOption({ ...selectedOption, [currentQuestionIndex]: option });
    
//   };

//   const handleNextQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const correctOption = currentQuestion.options[currentQuestion.correct_ans_index - 1];
//     if (selectedOption[currentQuestionIndex] === correctOption) {
//       setScore(prevScore => prevScore + 2);
//     }

//     setSelectedOption('');
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//       setTimeLeft(prevTimeLeft => prevTimeLeft - 40);
//     }
//     setAttemptedQuestions(prevAttempted => [...prevAttempted, currentQuestionIndex]);
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(prevIndex => prevIndex - 1);
//     }
//   };

//   const handleSubmitTest = () => {
//     // Show a confirmation modal before submitting the test
//     setShowModal(true);
//     // Set testSubmitted state to true only if the user confirms
//     // This gives the user an option to cancel the submission
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <Layout>
//       <div className="testpage">
//         <div className="row">
//           <div className="col-9">
//             <div className="form-container2">
//               <div className="question-container">
//                 {currentQuestion ? (
//                   <div>
//                     <h3>Question</h3>
//                     <h2>{currentQuestion.question}</h2>
//                     <ul className="options-list">
//                       {currentQuestion.options.map((option, index) => (
//                         <li key={index}>
//                           <label>
//                             <button
//                               className={selectedOption[currentQuestionIndex] === option ? "option-button selected" : "option-button"}
//                               onClick={() => handleOptionSelect(option)}
//                             >
//                               {` ${String.fromCharCode(65 + index)})`} {option}
//                             </button>
//                           </label>
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="dprebt">
//                       <button onClick={handlePrevQuestion}>Previous</button>
//                       <button onClick={handleNextQuestion}>Next</button>
//                     </div>
//                   </div>
//                 ) : (
//                   <p>Loading...</p>
//                 )}
//               </div>
//               <Modal
//                 visible={showModal}
//                 onCancel={closeModal}
//                 className="custom-modal" // Custom class for modal
//                 footer={null}
//               >
//                 <p style={{ fontSize: '34px', fontFamily: 'Arial Black, sans-serif' }}>Test Result</p>
//                 <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>Your score is: {score}/{questions.length * 2}</p>
//                 <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>You attended {attemptedQuestions.length} questions.</p>
//               </Modal>
//             </div>
//           </div>
//           <div className="col-3">
//             <div className="test-time">
//               {`Total time of test = ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`} </div>
//             <div className="form-container1">
//               <div className="index-buttons">
//                 {questions.map((_, index) => (
//                   <button
//                     key={index}
//                     className={
//                       currentQuestionIndex === index ? "current-question"
//                         : attemptedQuestions.includes(index) ? "attended-question"
//                         : currentQuestionIndex < index ? "remaining-question"
//                         : "unattended-question" // Add unattended-question class
//                     }
//                     onClick={() => setCurrentQuestionIndex(index)}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="dsubtest">
//               {!testSubmitted && (
//                 <button className="submittestbut" onClick={handleSubmitTest}>Submit Test</button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default StartTest;

 
 

 
// const StartTest = () => {
//   const { slug } = useParams(); // Get slug parameter from URL
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState({});
//   const [score, setScore] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [attemptedQuestions, setAttemptedQuestions] = useState([]);
//   const [testTime, setTestTime] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [testSubmitted, setTestSubmitted] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTimeLeft => {
//         if (prevTimeLeft > 0) {
//           return prevTimeLeft - 1;
//         } else {
//           // Automatically submit test when time runs out
//           handleSubmitTest();
//           return 0;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const getAllQuestionsByTest = async (slug) => {
//     try {
//       const { data } = await axios.get(`/api/v1/questions/question-test/${slug}`);
//       if (data?.success) {
//         setQuestions(data?.questions);
//         setTestTime(data.questions.length * 40);
//         setTimeLeft(data.questions.length * 40);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong in getting questions");
//     }
//   };

//   useEffect(() => {
//     const storedSlug = localStorage.getItem('slug');
//     const initialSlug = storedSlug || slug;
//     getAllQuestionsByTest(initialSlug);
//     // Store the initial slug in localStorage
//     localStorage.setItem('slug', initialSlug);
//   }, [slug]);

//   const handleOptionSelect = (option) => {
//     setSelectedOption({ ...selectedOption, [currentQuestionIndex]: option });
//   };

//   // const handleNextQuestion = () => {
//   //   const currentQuestion = questions[currentQuestionIndex];
//   //   const correctOption = currentQuestion.options[currentQuestion.correct_ans_index - 1];
//   //   if (selectedOption[currentQuestionIndex] === correctOption) {
//   //     setScore(prevScore => prevScore + 2);
//   //   }

//   //   setSelectedOption({});
//   //   if (currentQuestionIndex < questions.length - 1) {
//   //     setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//   //     setTimeLeft(prevTimeLeft => prevTimeLeft - 40);
//   //   }
//   //   setAttemptedQuestions(prevAttempted => [...prevAttempted, currentQuestionIndex]);
//   // };
//   const handleNextQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const correctOption = currentQuestion.options[currentQuestion.correct_ans_index - 1];
    
//     // Check if there's a selected option for the current question
//     const selectedOptionForCurrentQuestion = selectedOption[currentQuestionIndex];
//     if (selectedOptionForCurrentQuestion === correctOption) {
//       setScore(prevScore => prevScore + 2);
//     }

//     // Remove setSelectedOption({}) from here

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//       setTimeLeft(prevTimeLeft => prevTimeLeft - 40);
//     }
//     setAttemptedQuestions(prevAttempted => [...prevAttempted, currentQuestionIndex]);
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(prevIndex => prevIndex - 1);
//     }
//   };

//   const handleSubmitTest = () => {
//     // Show a confirmation modal before submitting the test
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <Layout>
//       <div className="testpage">
//         <div className="row">
//           <div className="col-9">
//             <div className="form-container2">
//               <div className="question-container">
//                 {currentQuestion ? (
//                   <div>
//                     <h3>Question</h3>
//                     <h2>{currentQuestion.question}</h2>
//                     <ul className="options-list">
//                       {currentQuestion.options.map((option, index) => (
//                         <li key={index}>
//                           <label>
//                             <button
//                               className={selectedOption[currentQuestionIndex] === option ? "option-button selected" : "option-button"}
//                               onClick={() => handleOptionSelect(option)}
//                             >
//                               {` ${String.fromCharCode(65 + index)})`} {option}
//                             </button>
//                           </label>
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="dprebt">
//                       <button onClick={handlePrevQuestion}>Previous</button>
//                       <button onClick={handleNextQuestion}>Next</button>
//                     </div>
//                   </div>
//                 ) : (
//                   <p>Loading...</p>
//                 )}
//               </div>
//               <Modal
//                 visible={showModal}
//                 onCancel={closeModal}
//                 className="custom-modal" // Custom class for modal
//                 footer={null}
//               >
//                 <p style={{ fontSize: '34px', fontFamily: 'Arial Black, sans-serif' }}>Test Result</p>
//                 <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>Your score is: {score}/{questions.length * 2}</p>
//                 <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>You attended {attemptedQuestions.length} questions.</p>
//               </Modal>
//             </div>
//           </div>
//           <div className="col-3">
//             <div className="test-time">
//               {`Total time of test = ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`} </div>
//             <div className="form-container1">
//               <div className="index-buttons">
//                 {questions.map((_, index) => (
//                   <button
//                     key={index}
//                     className={
//                       currentQuestionIndex === index ? "current-question"
//                         : attemptedQuestions.includes(index) ? "attended-question"
//                         : currentQuestionIndex < index ? "remaining-question"
//                         : "unattended-question" // Add unattended-question class
//                     }
//                     onClick={() => setCurrentQuestionIndex(index)}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="dsubtest">
//               {!testSubmitted && (
//                 <button className="submittestbut" onClick={handleSubmitTest}>Submit Test</button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default StartTest;

