/** @format */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Information from "./components/pages/Information/Information";
import StudentForm from "./components/pages/Form/StudentForm";

function App() {
  return (
    <>
      {/* Changed <Router> to <BrowserRouter> to provide web routing context */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Information />} />
          <Route path="/studentform" element={<StudentForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
