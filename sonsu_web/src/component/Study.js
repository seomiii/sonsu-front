//import '../component_css/Study.css';
//import {Button,Paper} from '@material-ui/core'

import React, { useState } from 'react';
import { Link,useLocation} from "react-router-dom";
import Service_intro from './Service_intro';
import study_play from './Study_play';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './header'
import { MediaDiv } from '../component_css/Study_style';
import { FadeHome } from '../component_css/Home_style';

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

const Images=['img/level1.png','img/level2.png','img/level3.png'];

// 서버에서 이미지 받아오기
// useEffect(()=>{
//     axios.get(' ')
//     .then((response)=>{
//     console.log(response);
//     })
// },[])



//---------------------------리소스-------------------------------

function Study(){       

    return (
        <MediaDiv>
            <Header/>           
        
            <FadeHome>

                {Study_level(1)}
                {Study_level(2)}
                {Study_level(3)} 
                
                <div>
                    <Link to={"../Service_intro"}>
                        <p>수어의 학습 과정에 대해 더 알아보고 싶다면?</p>
                    </Link>
                </div> 

            </FadeHome>
        </MediaDiv>
    );    
}

//단계 컴포넌트 (단계무관)
function Study_level(level){

    return(
        <>
            <div>
                <img alt="level" src={Images[level-1]} width="100" height="100"/>
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

export default React.memo(Study);
