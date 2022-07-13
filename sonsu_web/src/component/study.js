//import '../component_css/Study.css';

//import {Button,Paper} from '@material-ui/core'

import React, { useState } from 'react';
import { Link,BrowserRouter,useLocation} from "react-router-dom";
import Service_intro from './Service_intro';
import study_play from './Study_play';
import axios from 'axios';

//프론트 고정 리소스
const Levels=[
    {
        level : 1,
        level_name : '초급',
        level_info : '수어의 지문자를 배워 자음과 모음을 표현해봅시다. 손수와 함께 수어의 첫단추를 끼워보아요.',
    }
    ,
    {
        level : 2,
        level_name : '중급',
        level_info : '일상생활에서 자주 쓰이는 표현들을 배워봅시다. 간단한 의사소통을 주고받아 보아요.'
    }
    ,
    {
        level : 3,
        level_name : '고급',
        level_info : '문장 구성의 핵심이 되는 다양한 단어들을 배워봅시다. 배운 단어들을 이용하여 원하는 문장을 만들어보아요.'
    }    
]

// 이미지 받아오는거는 나중에 생각해보자
// const getLevelImage=()=>{
//     axios.get("")
//     .then(
//         (response) => {
            
//         }
//     )
// }

//---------------------------리소스-------------------------------

function Study(){  
     

    return (
        <div className='study'>                
            {Study_level(1)}
            {Study_level(2)}
            {Study_level(3)} 

            <div>
                <Link to={"../Service_intro"}>
                    <p>수어의 학습 과정에 대해 더 알아보고 싶다면?</p>
                </Link>
            </div> 
        </div>
    );    
}

//단계 컴포넌트 (단계무관)
function Study_level(level){
    let [curlevel,setLevel]=useState(0); 

    return(
        <>
            <div>
                <p>이미지</p>
            </div>

            <div>
                <p>{Levels[(level-1)].level_name}</p>
                <p>{Levels[(level-1)].level_info}</p>
            </div>

            <div>
                <Link to = {"study_class"} state={{level : (level)}}>
                    <button>수강하기</button>
                </Link>
            </div>                
        </>
    );
}

export default Study;





// ------------------------------------얼렁이뚱땅이 코드------------------------------------------
{/* <div className='study_pic'>
                    <Link to={"study_class"} state={{level : 1}}>
                        <a><p>초급 이미지</p></a>
                    </Link>                    
                </div>               

                <div className='study_text'>
                    <p>초급</p>
                    <p>basic course</p>
                    <p>~~초급에 대한 설명~~</p>

                    <Link to={"study_class"} state={{level : 1}}>
                     <button>수강하기</button>
                    </Link>                    
                </div>

                <ul className='circles'>
                    <li className='circle_'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                </ul> */}



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

// function Study_study({history}){

//     return(
//         <div className="study_study">
//             <div className="level">
//                 <h3>초급</h3>
                

//                 <div className="flex_container">
//                     <Link to={"study_play"}>
//                         <div className="level_component">자음</div>
//                     </Link>

//                     <button onClick={()=>{history.push("study_play")}}>
//                         <div className="level_component">모음</div>
//                     </button>
//                 </div>
                
//             </div>

//             <div className="level">
//                 <h3>중급</h3>

//                 <div className="flex_container">
//                     <div className="level_component">인삿말</div>
//                 </div>
//             </div>

//             <div className="level">
//                 <h3>고급</h3>

//                 <div className="flex_container">
//                     <div className="level_component">일상 생활 단어</div>
//                 </div>
//             </div>
        
//         </div>
//     );
// }

// const choosePage=()=>{
    //     switch(level){
    //         case 0:
    //             return <Study_level1/>
    //         case 1:
    //             return <Study_level2/>
    //         case 2: 
    //             return <Study_level3/>
    //         default:
    //             return <Study_level1/>
    //     }
    // }

    {/* {choosePage()}
            <button onClick={()=>{setLevel((level+1)%3)}} className='next_btn'>+</button> */}