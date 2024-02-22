import VendingMachine from "./VendingMachine"
import Coke from "./Coke"
import Cookies from "./Cookies"
import Chips from "./Chips"
import './App.css';
import NavBar from "./NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/coke" element={<Coke />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
