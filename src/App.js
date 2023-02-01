import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import OurApp from "./components/OurApp";
import Ministries from "./components/Ministries";
import Connect from "./components/Connect";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ministries" element={<Ministries />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/ourApp" element={<OurApp />} />
    </Routes>
  );
};
export default App;
