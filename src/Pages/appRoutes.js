import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./Quiz";
import Result from "./Result";
function AppRoutes() {
  return (
    <Router>
      <Route path="/" element={Quiz} />
      <Route path="/" element={Result} />
    </Router>
  );
}

export default AppRoutes;
