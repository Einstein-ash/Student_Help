



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../src/components/Navbar.jsx"
import LoginForm from "../src/components/Login.jsx";
import RegiForm from "./components/RegiForm.jsx";

import Home from './pages/Home';

import Todo from './components/Services/Todo.jsx';
import UploadData from './components/Services/UploadData.jsx';
import TimeTable from './components/Services/TimeTable.jsx';
import Soon from './components/Services/Soon.jsx';

const App = () => {
  return (
    <Router>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/regis" element={<RegiForm />} />
        <Route path="/login" element={<LoginForm />} />

        <Route path="/todo" element={<Todo />} />
        <Route path="/upload" element={<UploadData />} />
        <Route path="/time_table" element={<TimeTable />} />
        <Route path="/soon" element={<Soon />} />



      </Routes>
    </Router>
  );
};

export default App;
