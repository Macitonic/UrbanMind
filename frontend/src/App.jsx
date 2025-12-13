import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Report from "./pages/user/Report";
import AdminLogin from "./pages/admin/login/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AdminReport from "./pages/admin/admin reports/adminReports";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/*Public Pages*/}
        <Route path="/" element={<Home />}></Route>
        <Route path="/report" element={<Report />}></Route>

        {/*Admin Public Pages*/}
        <Route path="/admin" element={<AdminLogin />}></Route>

        {/*Admin Protected pages*/}

        <Route
          path="admin/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        ></Route>

        <Route
          path="/admin/reports"
          element={
            <ProtectedRoutes>
              <AdminReport />
            </ProtectedRoutes>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
