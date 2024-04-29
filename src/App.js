import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from "./pages/Home"
import Aboutme from './pages/Aboutme';

function App(){
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Aboutme' element={<Aboutme/>} />
      </Routes>
    </Router>
  );
}
export default App;