import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/chargebayHome';
import HousingPage from './Pages/HousingPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/page2' element={<HousingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
