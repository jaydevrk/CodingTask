import React, { Fragment } from 'react'
import Signup from "./components/Signup/Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./components/Login/Login";
import Home from './components/Home/Home';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Signup />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Info' element={<CompanyInfo />} />
          </Routes>
        </Fragment>
      </BrowserRouter>

    </div>
  );
}

export default App;
