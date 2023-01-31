import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Ministries from "./components/Ministries";
import { useEffect } from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ministries" element={<Ministries />} />
    </Routes>
  );
};
export default App;
