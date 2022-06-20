import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import TestHome from './component/TestHome';
import Test from './component/Test';
import Study from './component/study';
import Study_play from './component/Study_play';
import Study_class from './component/Study_class';
import WebcamStreamCapture from './component/WebcamStreamCapture';


function App() {
  
  return (
    <div className="App"> 
      {/* <BrowserRouter>
        <Routes> */}
          {/* 수강하기 */}
          {/* <Route exact path="/" element={<Study />}/> */}
          {/* 수강하기 중간 페이지 */}
          {/* <Route path="study_class" element={<Study_class/>} /> */}
          {/* 영상나오는 페이지 */}
          {/* <Route path="study_play" element={<Study_play/>} /> */}
          
        {/* </Routes>
      </BrowserRouter>  */}

      <WebcamStreamCapture></WebcamStreamCapture>
      
    </div>
  );
}

export default App;