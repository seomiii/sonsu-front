import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import Mypage from "./mypage";
import Wrong from "./wrong";
import Grade from "./grade";
import "./layout.css"

const Layout = () => {
    // 새로운 state 변수를 선언하고, count라 부르겠습니다.
    const [count, setCount] = useState(0);
    // componentDidMount, componentDidUpdate와 같은 방식으로
    useEffect(() => {
        // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
        document.title = 'You clicked ${count} times';
    });
    return (
        <div className="layout">
            {/* <main className="main">
                <h2>You clicked {count} times</h2>
                <img src="C:/Users/User/Desktop/공부자료/4학년/졸업작품/실습/손사진.png" alt="My Image" loading="lazy"></img>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </main> */}
            {/* <a><Home /></a> */}
            {/* <a><Mypage /></a> */}
            {/* <a><Wrong /></a> */}
            <BrowserRouter>
                <a><Header /></a>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="mypage" element={<Mypage />} />
                    <Route exact path="wrong" element={<Wrong />} />
                    <Route exact path="grade" element={<Grade />} />
                </Routes>
                <a><Footer /></a>
            </BrowserRouter> 
        </div>
    )
}
export default Layout