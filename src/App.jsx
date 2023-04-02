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
import "./i18next";
import Guides from "./pages/Guides/Guides";



function App() {
  const { state } = useGlobalContext();
  return (
    <>
      <BrowserRouter>
        {state && <CustomNavbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guides" element={<Guides />} />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
