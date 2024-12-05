import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';
import SignUpPage from './Page/SignUpPage';

function App() {
  

  return (

    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
