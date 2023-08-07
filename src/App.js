import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, About, Work, Team, Contact } from "./route";
import Nav from "./components/navbar/nav";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
