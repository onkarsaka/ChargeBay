import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/chargebayHome';
import HousingPage from './Pages/HousingPage';
import UnderConstructionPage from './Pages/UnderConstructionPage';
import AboutChargingPage from './Pages/AboutChargingPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/page2' element={<HousingPage/>} />
        <Route path='/page3' element={<UnderConstructionPage/>}/>
        <Route path='/page4' element={<AboutChargingPage/>}/>
      </Routes>
    </Router>
  );
}
// remove hashrouter if neccesary
export default App;
