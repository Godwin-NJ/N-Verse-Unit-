import Sidebar from "./components/Sidebar";
import Nav from "./pages/NAVHome";
import Staff from "./pages/StaffInfo";
import Home from "./pages/MainHome";
import SingleStaff from "./pages/SingleStaff";
import About from "./pages/About";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="staff" element={<Staff />} />
          <Route path="staff/:id" element={<SingleStaff />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
