import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Posts";
import Login from "./page/Login";
import Register from "./page/Register";
import { AuthProvider } from "./context/AuthContext";
import AddPosts from "./page/AddPosts";
import Developers from "./page/Developers";
import Profile from "./page/Profile";
import Dashboards from "./page/Dash";
import Dashboard from "./page/Dashboard";
import Dash from "./page/Dash";
import Posts from "./page/Posts";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/Home" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/addPosts" element={<AddPosts />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/dev" element={<Developers />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/dashboard" element={<Dash />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
