import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import {useGlobalContext } from "./utils/ContextProvider";
import Guides from "./pages/Guides/Guides";
import Footer from "./components/Footer/Footer";



function App() {
  const { state } = useGlobalContext();
  return (
    <>
      <BrowserRouter>
        {state && <CustomNavbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:id" element={<Guides />} />

          
        </Routes>
      <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
