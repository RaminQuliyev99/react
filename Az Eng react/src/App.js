import backgroundi from './img/bg.png'
import React from 'react';
import Home from './home';
import Navbar from './navbar';
import Add from './add';
import List from './list';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
    return (
        <div>
          <div style={ {backgroundImage : `url(${backgroundi})`, 
           backgroundRepeat: 'no-repeat',height: '700px'}  }>
              <Router>
              <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/add' element={<Add/>} />
                <Route path='/list' element={<List/>} />
            </Routes>
            </Router>
        </div>
        </div>
    );
}

export default App;