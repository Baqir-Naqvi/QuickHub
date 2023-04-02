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


function App() {
  const { state } = useGlobalContext();
  return (
    <>
      <BrowserRouter>
        {state && <CustomNavbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
