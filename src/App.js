import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Browse from "./Components/Browse/Browse";
import Navbar from "./Components/Navbar/Navbar";
import Liked from "./Components/Liked/Liked";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Browse />}></Route>
          <Route path="/liked" element={<Liked />}></Route>
          <Route path="/profile" element={<Profile />}>
            <Route path="/profile/" element={<div>Account</div>}></Route>
            <Route path="/profile/orders" element={<div>Orders</div>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
