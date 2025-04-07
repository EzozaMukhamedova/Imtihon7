import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import { AuthProvider } from "./context/AuthContext";
import AddPosts from "./page/AddPosts";
import Developers from "./page/Developers";
import Profile from "./page/Profile";
import Posts from "./page/Posts";
import ProtectedRoute from "./router/ProtectedRoute";
import Dash from "./page/Dash";

import PostDetails from "./router/PostDetails";
import CreateProfile from "./page/CreateProfile";
import Teacher from "./page/Teacher";
import AddTeacher from "./page/AddTeacher";
import TeacherInfo from "./page/TeacherInfo";
// import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/" element={<Register />} />

          {/* Ochiq sahifalar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/*  Himoyalangan sahifalar */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                {/* <ToastContainer /> */}
                <Dash />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher"
            element={
              <ProtectedRoute>
                <Teacher />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addTeacher"
            element={
              <ProtectedRoute>
                <AddTeacher />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher-info/:teacherId"
            element={
              <ProtectedRoute>
                <TeacherInfo />
              </ProtectedRoute>
            }
          />

          <Route
            path="/addPosts"
            element={
              <ProtectedRoute>
                <AddPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts"
            element={
              <ProtectedRoute>
                <Posts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              <ProtectedRoute>
                <PostDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dev"
            element={
              <ProtectedRoute>
                <Developers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/CreateProfile"
            element={
              <ProtectedRoute>
                <CreateProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
