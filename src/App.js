

import './App.css';
import {BrowserRouter as Router,Routes, BrowserRouter, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
// import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/signin' element={<SigninPage />} exact />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
