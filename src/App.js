import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Staff from "./pages/StaffInfo";
import SingleStaff from "./pages/SingleStaff";
import About from "./pages/About";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="staff" element={<Staff />}>
            <Route path=":id" element={<SingleStaff />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
