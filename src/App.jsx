/** @format */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Information from "./components/pages/Information/Information";
import StudentForm from "./components/pages/Form/StudentForm";
import ScrollToTop from "./components/useLocation/useLocation";

function App() {
  return (
    <>
      {/* Changed <Router> to <BrowserRouter> to provide web routing context */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Information />} />
          <Route path="/studentform" element={<StudentForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
