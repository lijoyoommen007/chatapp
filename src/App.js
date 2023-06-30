import './App.css';
import Register from './pages/Register';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import TopBar from './Components/NavBarHeader/TopBar';
import NavBarHeader from './Components/NavBarHeader/NavBarHeader';
import DoorsPage from './pages/DoorsPage';
import veenerData from "./Datas/doorsData.json"

function App() {
  return (
    <Router>
      <TopBar />
      <NavBarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veener-doors" element={<DoorsPage data={veenerData} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
