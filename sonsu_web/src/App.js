import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestHome from './component/TestHome';
import Test from './component/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TestHome />} />
          <Route exact path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;