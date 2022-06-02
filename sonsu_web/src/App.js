import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestMain from './component/TestMain';
import Test from './component/Test';
import TestMid from './component/TestMid';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TestMain />} />
          <Route exact path="testmid" element={<TestMid />} />
          <Route exact path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;