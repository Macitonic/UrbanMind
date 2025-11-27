import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/report" element={<Report />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
