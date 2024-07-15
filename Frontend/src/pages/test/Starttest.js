import  BgVideo  from "../../img/bgkkk.mp4";
import Layout from "../../components/Layout/Layout.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "antd";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";

// import Layout from "../../components/Layout/Layout.js";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Modal } from "antd";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useAuth } from "../../context/auth";

//  import  BgVideo  from "../../img/bgkkk.mp4";

 
 

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
//   const [auth] = useAuth();
//   const [user, setUser] = useState('');
//   const [test, setTest] = useState('');
//   const [marks, setMarks] = useState('');
//   const [totalmarks, setTotalmaks] = useState('');
//   const [modalVisibleTime, setModalVisibleTime] = useState(0);
//   const [isResultSaved, setIsResultSaved] = useState(false); // New state to track if result is saved

//   useEffect(() => {
//     // Load test data from local storage if available
//     const storedData = localStorage.getItem('testData');
//     const isModalShown = localStorage.getItem('isModalShown');

//     if (storedData && !isModalShown) {
//       const { selectedOption, currentQuestionIndex, score, attemptedQuestions } = JSON.parse(storedData);
//       setSelectedOption(selectedOption);
//       setCurrentQuestionIndex(currentQuestionIndex);
//       setScore(score);
//       setAttemptedQuestions(attemptedQuestions);
//       setShowModal(true);
//     } else {
//       getAllQuestionsByTest(slug);
//     }
//   }, [slug]);

//   // Effect to set the flag when the modal is shown
//   useEffect(() => {
//     if (showModal) {
//       localStorage.setItem('isModalShown', 'true');
//     }
//   }, [showModal]);

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
//       if (data?.success && data?.questions.length > 0) {
//         setQuestions(data?.questions);
//         setTestTime(data.questions.length * 40);
//         setTimeLeft(data.questions.length * 40);
//       } else {
//         toast.error("No questions found for this test");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong in getting questions");
//     }
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption({ ...selectedOption, [currentQuestionIndex]: option });
//   };

//   const handleNextQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const correctOption = currentQuestion.options[currentQuestion.correct_ans_index - 1];
     
//     const selectedOptionForCurrentQuestion = selectedOption[currentQuestionIndex];
//     if (selectedOptionForCurrentQuestion === correctOption) {
//       setScore(prevScore => prevScore + 2);
//     }

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

//   const saveResult = async () => {
//     try {
//       const userData = auth?.user;
//       const testSlug = slug;
//       const testScore = score;
//       const totalQuestions = questions.length;

//       const res = await axios.post('/api/v1/histoy/save-history', {
//         user: userData?._id,
//         test: testSlug,
//         marks: testScore,
//         totalmarks: totalQuestions * 2
//       });

//       if (res.data.success) {
//         toast.success(res.data.message);
//         setIsResultSaved(true); // Set the flag to true when result is saved
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong");
//     }
//   };

//   const handleSubmitTest = async () => {
//     if (questions.length === 0 || attemptedQuestions.length === 0) {
//       return;
//     }
  
//     saveResult();
//     setShowModal(true);
//     setModalVisibleTime(Date.now() + 15000);
//   };

//   const handleCancelModal = () => {
//     setShowModal(false);
//     localStorage.removeItem('testData');
//     localStorage.removeItem('isModalShown');
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const handleConfirmModal = () => {
//     setShowModal(false);
//   };

//   const currentQuestion = questions[currentQuestionIndex];

  

//   useEffect(() => {
//     return () => {
//       localStorage.setItem('testData', JSON.stringify({
//         selectedOption,
//         currentQuestionIndex,
//         score,
//         attemptedQuestions
//       }));
//     };
//   }, [selectedOption, currentQuestionIndex, score, attemptedQuestions]);

//   return (
//     <Layout><video autoPlay loop muted className="bg-video">
//           <source src={ BgVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       <div className="testpage">
//         <div className="row">
//           <div className="col-9"> 
//             <div className="form-container2"> 
//              <h3>Question : {currentQuestionIndex+1}</h3>
//               <div className="question-container">
//                 {currentQuestion ? (
//                   <div>
                   
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
                 
//                     {isResultSaved && <h4 class="questionDescription scrollable-container ">{currentQuestion.description}</h4> }
                 
//                       <button className="dprebt" onClick={handlePrevQuestion}>Previous</button>
//                       <button className="dprebt" onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
                   
//                   </div>
//                 ) : (
//                   <p>Loading...</p>
//                 )}
//               </div>
//               <Modal
//                 visible={showModal}
//                 onCancel={closeModal}
//                 className="custom-modal"
//                 footer={null}
//               >
//                 <p style={{ fontSize: '34px', fontFamily: 'Arial Black, sans-serif' }}>Test Result</p>
//                 <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>Your score is: {score}/{questions.length * 2}</p>
//                 <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>You attended {attemptedQuestions.length} questions.</p>
//                 <div>
//                   <button onClick={handleConfirmModal}>Resume</button>
//                   <button onClick={handleCancelModal}>Cancel Test</button>
//                 </div>
//               </Modal>
//             </div>
//           </div>
//           <div className="col-3">
            
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






 











 
 

const StartTest = () => {
  const { slug } = useParams(); // Get slug parameter from URL
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState({});
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);
  const [testTime, setTestTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [auth] = useAuth();
  const [user, setUser] = useState('');
  const [test, setTest] = useState('');
  const [marks, setMarks] = useState('');
  const [totalmarks, setTotalmaks] = useState('');
  const [modalVisibleTime, setModalVisibleTime] = useState(0);
  const [isResultSaved, setIsResultSaved] = useState(false); // New state to track if result is saved

  useEffect(() => {
    // Load test data from local storage if available
    const storedData = localStorage.getItem('testData');
    const isModalShown = localStorage.getItem('isModalShown');

    if (storedData && !isModalShown) {
      const { selectedOption, currentQuestionIndex, score, attemptedQuestions } = JSON.parse(storedData);
      setSelectedOption(selectedOption);
      setCurrentQuestionIndex(currentQuestionIndex);
      setScore(score);
      setAttemptedQuestions(attemptedQuestions);
      setShowModal(true);
    } else {
      getAllQuestionsByTest(slug);
    }
  }, [slug]);

  // Effect to set the flag when the modal is shown
  useEffect(() => {
    if (showModal) {
      localStorage.setItem('isModalShown', 'true');
    }
  }, [showModal]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft > 0) {
          return prevTimeLeft - 1;
        } else {
          // Automatically submit test when time runs out
          handleSubmitTest();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getAllQuestionsByTest = async (slug) => {
    try {
      const { data } = await axios.get(`https://optioniqbackend.onrender.com/api/v1/questions/question-test/${slug}`);
      if (data?.success && data?.questions.length > 0) {
        setQuestions(data?.questions);
        setTestTime(data.questions.length * 40);
        setTimeLeft(data.questions.length * 40);
      } else {
        toast.error("No questions found for this test");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting questions");
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption({ ...selectedOption, [currentQuestionIndex]: option });
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctOption = currentQuestion.options[currentQuestion.correct_ans_index - 1];
     
    const selectedOptionForCurrentQuestion = selectedOption[currentQuestionIndex];
    if (selectedOptionForCurrentQuestion === correctOption) {
      setScore(prevScore => prevScore + 2);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setTimeLeft(prevTimeLeft => prevTimeLeft - 40);
    }
    setAttemptedQuestions(prevAttempted => [...prevAttempted, currentQuestionIndex]);
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const saveResult = async () => {
    try {
      const userData = auth?.user;
      const testSlug = slug;
      const testScore = score;
      const totalQuestions = questions.length;

      const res = await axios.post('https://optioniqbackend.onrender.com/api/v1/histoy/save-history', {
        user: userData?._id,
        test: testSlug,
        marks: testScore,
        totalmarks: totalQuestions * 2
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setIsResultSaved(true); // Set the flag to true when result is saved
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const handleSubmitTest = async () => {
    if (questions.length === 0 || attemptedQuestions.length === 0) {
      return;
    }
  
    saveResult();
    setShowModal(true);
    setModalVisibleTime(Date.now() + 15000);
  };

  const handleCancelModal = () => {
    setShowModal(false);
    localStorage.removeItem('testData');
    localStorage.removeItem('isModalShown');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleConfirmModal = () => {
    setShowModal(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
 

  useEffect(() => {
    return () => {
      localStorage.setItem('testData', JSON.stringify({
        selectedOption,
        currentQuestionIndex,
        score,
        attemptedQuestions
      }));
    };
  }, [selectedOption, currentQuestionIndex, score, attemptedQuestions]);

  return (
    <Layout><video autoPlay loop muted className="bg-video">
          <source src={ BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="testpage">
        <div className="row">
          <div className="col-9"> 
            <div className="form-container2"> 
             <h3>Question : {currentQuestionIndex+1}</h3>
              <div className="question-container">
                {currentQuestion ? (
                  <div>
                   
                    <h2>{currentQuestion.question}</h2>
                    <ul className="options-list">
                      {currentQuestion.options.map((option, index) => (
                        <li key={index}>
                          <label>
                            <button
                              className={selectedOption[currentQuestionIndex] === option ? "option-button selected" : "option-button"}
                              onClick={() => handleOptionSelect(option)}
                            >
                              {` ${String.fromCharCode(65 + index)})`} {option}
                            </button>
                          </label>
                        </li>
                      ))}

                    </ul>
                 
                    {isResultSaved && <h4 class="questionDescription scrollable-container ">{currentQuestion.description}</h4> }
                 
                      <button className="dprebt" onClick={handlePrevQuestion}>Previous</button>
                      <button className="dprebt" onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
                   
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              <Modal
                visible={showModal}
                onCancel={closeModal}
                className="custom-modal"
                footer={null}
              >
                <p style={{ fontSize: '34px', fontFamily: 'Arial Black, sans-serif' }}>Test Result</p>
                <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>Your score is: {score}/{questions.length * 2}</p>
                <p style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>You attended {attemptedQuestions.length} questions.</p>
                <div>
                  <button onClick={handleConfirmModal}>Resume</button>
                  <button onClick={handleCancelModal}>Cancel Test</button>
                </div>
              </Modal>
            </div>
          </div>
          <div className="col-3">
            <div className="test-time">
              {`Total time of test = ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`} </div>
            <div className="form-container1">
              <div className="index-buttons">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    className={
                      currentQuestionIndex === index ? "current-question"
                        : attemptedQuestions.includes(index) ? "attended-question"
                        : currentQuestionIndex < index ? "remaining-question"
                        : "unattended-question"
                    }
                    onClick={() => setCurrentQuestionIndex(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div> 
            
            <div className="dsubtest">
              {!testSubmitted && (
                <button className="submittestbut" onClick={handleSubmitTest}>Submit Test</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
 
export default StartTest;






