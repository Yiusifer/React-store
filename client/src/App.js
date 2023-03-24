import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import AllProducts from "./components/AllProducts";
import LeaveReview from "./components/LeaveReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="all_products" element={<AllProducts />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="leave_review" element={<LeaveReview />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
