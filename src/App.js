import AppRoutes from "./Pages/appRoutes";
import { Authentication } from "./context/userContext";
function App() {
  return (
    <Authentication>
      <AppRoutes />
    </Authentication>
  );
}

export default App;
