import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admission from "./components/Admission";
import Home from "./components/Home";
import ShowUserList from "./components/ShowUserList";

function App() {
  return (
    // <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/getList" element={<ShowUserList />} />
        </Routes>
      </BrowserRouter>
    // </>
  );
}

export default App;
