import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Indexnavbar from "./components/Indexnavbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";

import Courses from "./pages/Courses";
import CreateCourse from "./pages/CreateCourse";
import DeleteCourse from "./pages/DeleteCourse";

import MyCourses from "./pages/MyCourses";

import TeacherCourses from "./pages/TeacherCourses";
import EditCourse from "./pages/EditCourse";

import AdminUsers from "./pages/AdminUsers";

import CourseDetails from "./pages/CourseDetails";
import AddLesson from "./pages/AddLesson";
import CreateQuiz from "./pages/CreateQuiz";
import AttemptQuiz from "./pages/AttemptQuiz";
import QuizResults from "./pages/QuizResults";
import MyCertificates from "./pages/Mycertificates";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";




function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        {/* Redirect root */}
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        {/* <Route path="/" element = {<Indexnavbar/>} /> */}
        <Route path="/register" element={<><Indexnavbar/><Register /> </>} />
        <Route path="/login" element={<><Indexnavbar/><Login /> </>} />

        <Route path="/" element={<><Indexnavbar/><Home /> </>} />
        <Route path="/about" element={<><Indexnavbar/><About /> </>} />
      <Route path="/services" element={<><Indexnavbar/><Services /> </>} />
      <Route path="/contact" element={<><Indexnavbar/><Contact /> </>} />


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>

    <Route
     path="/courses"
     element={
      <ProtectedRoute>
      <Courses />
      </ProtectedRoute>
       }
/>
    <Route
  path="/create-course"
  element={
    <ProtectedRoute>
      <CreateCourse />
    </ProtectedRoute>
  }
/>
     <Route
  path="/admin/delete-course"
  element={
    <AdminRoute>
      <DeleteCourse />
    </AdminRoute>
  }
/> 
       <Route
  path="/my-courses"
  element={
    <ProtectedRoute>
      <MyCourses />
    </ProtectedRoute>
  }
/>
  <Route path="/teacher/courses" 
   element={<TeacherCourses />} />
  <Route path="/teacher/courses/edit/:id" 
   element={<EditCourse/>} />

   <Route
  path="/admin/users"
  element={
    <AdminRoute>
      <AdminUsers />
    </AdminRoute>
  }
/>

   <Route
  path="/courses/:id"
  element={
    <ProtectedRoute>
      <CourseDetails />
    </ProtectedRoute>
  }
/>

<Route path="/add-lesson/:id" element={<AddLesson />} />
<Route path="/teacher/courses/add-lesson/:id" element={<AddLesson />} />
<Route path="/teacher/create-quiz/:id" element={<CreateQuiz />} />
<Route path="/student/quiz/:id" element={<AttemptQuiz />} />
<Route path="/student/results" element={<QuizResults />} />
<Route path="/my-certificates" element={<MyCertificates />} />


      </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;

