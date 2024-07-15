import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import Contact from "./pages/Contact";
import CreateQuestion from "./pages/Admin/CreateQuestion";
import CreateSubject from "./pages/Admin/CreateSubject";
import CreateTest from "./pages/Admin/CreateTest";
import Dashboard from "./pages/user/DAshboard";
import DeleteQu from "./pages/Admin/DeleteQu";
import ForgotPasssword from "./pages/Auth/forgotPassword";
import Homepage from "./pages/Homepage";
import Login from "./pages/Auth/Login";
import PageNotfound from "./pages/PageNotfound";
import PrivateRoute from "./components/Routes/Private";
import Register from "./pages/Auth/Register";
import Starttest from "./pages/test/Starttest";
import SubjectPage from "./pages/SubjectPage";
import TestHistory from "./pages/user/TestHistory";
import Users from "./pages/Admin/Users";

// import Profile from "./pages/user/Profile";

import{Routes,Route} from 'react-router-dom'
 //import { ToastContainer } from "react-toastify";


function App() {
  return (
    < >
    <Routes>
      <Route path='/'element={<Homepage/>}/>
      <Route path='/dashboard'element={<PrivateRoute/>}>
             <Route path='user' element={ <Dashboard/>}/>
             {/* <Route path='user/profile' element={<Profile/> }/> */}
             <Route path='user/test-history' element={ <TestHistory/>}/>
      </Route>
     <Route path='/dashboard'element={ <AdminRoute/>}>
             <Route path='admin' element={ <AdminDashboard/>}/>
              <Route path='admin/create-subject' element={ <CreateSubject/> }/>
               <Route path='admin/create-test' element={ <CreateTest/> }/>
                <Route path='admin/create-question' element={  <CreateQuestion/>}/>
                <Route path='admin/users' element={<Users/> }/>
                <Route path='admin/deletqus' element={<DeleteQu/>}/>
      </Route>
         <Route path='/subject'element={<SubjectPage/>}/>
         <Route path='/starttest/:slug'element={<Starttest/>}/>
         <Route path='/test'element={<Starttest/>}/>
       <Route path='/register'element={<Register/>}/>
        <Route path='/login'element={<Login/>}/>
      <Route path='/forgot-password'element={ <ForgotPasssword/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/*'element={<PageNotfound/>}/>
    </Routes>
    </>
  );
}

export default App;
