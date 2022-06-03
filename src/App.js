import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Browse from "./Components/Browse/Browse";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Browse />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
