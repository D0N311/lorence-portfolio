import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LaravelExperience from "./pages/LaravelExperience";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/laravel-experience" element={<LaravelExperience />} />
    </Routes>
  );
}

export default App;
