import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hello from "./pages/Hello";
import Hey from "./pages/Hey";
import Adoption from "./pages/Adoption";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import { Route, Routes } from "react-router-dom";
import CreatePet from "./pages/CreatePet";
import EditPet from "./pages/EditPet";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/course" element={<Hello />} />
        <Route path="/donate" element={<Hey />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/create" element={<CreatePet />} />
        <Route path="/edit/:id" element={<EditPet />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
