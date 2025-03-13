import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
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

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          {/* Ochiq sahifalar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/*  Himoyalangan sahifalar */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dash />
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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
