import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import Employees from './component/Employees';
import Home from './component/Home';
import UpdateEmp from './component/UpdateEmp';
import CreateEmp from './component/CreateEmp';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<UpdateEmp />} />
          <Route path="/employees/create" element={<CreateEmp />} />
        </Routes>
      </Router>
    </React.Fragment>

  );
}

export default App;
