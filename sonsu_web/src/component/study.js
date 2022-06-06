import React, { useState } from 'react';
import {Button,Paper} from '@material-ui/core'
import '../component_css/Study.css';
import Study_play from './Study_play';
import { Link,BrowserRouter } from "react-router-dom";

function Study(){   
        return (
            <div className='study'>
                {/* <Study_sidebar />
                <Study_study /> */}
                <Study_study2/>
            </div>
        );    
}

// 디자인에 따른 변경
function Study_study2(){
    let [level,setLevel]=useState(0);
    const choosePage=()=>{
        switch(level){
            case 0:
                return <Study_level1/>
            case 1:
                return <Study_level2/>
            case 2: 
                return <Study_level3/>
            default:
                return <Study_level1/>
        }
    }

    return(
        <>  
            {choosePage()}
            <button onClick={()=>{setLevel((level+1)%3)}} className='next_btn'>++</button>
            {/* <button onClick={()=>{setLevel(Math.abs((level-1)%3))}} className='next_btn2'>--</button> */}
            <p>{level}</p>           
        </> 
         );

}

//초급
function Study_level1(){
    return(
        <div className='study_level1'>
                <div className='study_pic'>
                    <Link to={"study_play"}>
                        <p>초급 이미지</p>
                    </Link>                    
                </div>               

                <div className='study_text'>
                    <p>초급</p>
                    <p>basic course</p>
                    <p>~~초급에 대한 설명~~</p>

                    <Link to={"study_play"}>
                     <button>수강하기</button>
                    </Link>                    
                </div>

                <ul className='circles'>
                    <li className='circle_'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                </ul>
            </div>
    );
}

//중급
function Study_level2(){
    return(
        <div className='study_level2'>
                <div className='study_pic'>
                    <Link to={"study_play"}>
                        <p>중급 이미지</p>
                    </Link>                    
                </div>               

                <div className='study_text'>
                    <p>중급</p>
                    <p>basic course</p>
                    <p>~~중급에 대한 설명~~</p>

                    <Link to={"study_play"}>
                     <button>수강하기</button>
                    </Link>                    
                </div>

                <ul className='circles'>
                    <li className='circle'></li>
                    <li className='circle_'></li>
                    <li className='circle'></li>
                </ul>
            </div>
    );
}

//고급
function Study_level3(){
    return(
        <div className='study_level3'>
                <div className='study_pic'>
                    <Link to={"study_play"}>
                        <p>고급 이미지</p>
                    </Link>                    
                </div>               

                <div className='study_text'>
                    <p>고급</p>
                    <p>basic course</p>
                    <p>~~고급에 대한 설명~~</p>

                    <Link to={"study_play"}>
                     <button>수강하기</button>
                    </Link>                    
                </div>

                <ul className='circles'>
                    <li className='circle'></li>
                    <li className='circle'></li>
                    <li className='circle_'></li>
                </ul>
            </div>
    );
}

export default Study;





// ------------------------------------디자인 없을때 나혼자 얼렁이뚱땅이 코드임------------------------------------------
function Study_sidebar(){
    // const menus=[
    //     {name:'초급',path:'/'},
    //     {name:'자음',path:'/'},
    //     {name:'모음',path:'/'},

    //     {name:'중급',path:'/'},
    //     {name:'인삿말',path:'/'},

    //     {name:'고급',path:'/'},
    //     {name:'일상생활 단어',path:'/'}
    // ];

    // const menulist = menus.map((menu, index) => (<li key={index}>{menu.name}</li>));

    return(
        <div className="sidebar">
            <h3>초급</h3>
            <ul>                
                <li>자음</li>
                <li>모음</li>       
            </ul>

            <h3>중급</h3>
            <ul>                
                <li>인삿말</li>     
            </ul>

            <h3>고급</h3>
            <ul>                
                <li>일상 생활 단어</li>     
            </ul>
        </div>
    );
}

function Study_study({history}){

    return(
        <div className="study_study">
            <div className="level">
                <h3>초급</h3>
                

                <div className="flex_container">
                    <Link to={"study_play"}>
                        <div className="level_component">자음</div>
                    </Link>

                    <button onClick={()=>{history.push("study_play")}}>
                        <div className="level_component">모음</div>
                    </button>
                </div>
                
            </div>

            <div className="level">
                <h3>중급</h3>

                <div className="flex_container">
                    <div className="level_component">인삿말</div>
                </div>
            </div>

            <div className="level">
                <h3>고급</h3>

                <div className="flex_container">
                    <div className="level_component">일상 생활 단어</div>
                </div>
            </div>
        
        </div>
    );
}