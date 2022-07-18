import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";
import Result from "./Result";
import SignUp from "./SignUp";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
