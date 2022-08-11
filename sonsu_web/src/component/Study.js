//import '../component_css/Study.css';
//import {Button,Paper} from '@material-ui/core'

import React, { useState } from 'react';
import { Link,useLocation} from "react-router-dom";
import Service_intro from './Service_intro';
import study_play from './Study_play';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './header'
import { MediaDiv, ImgDiv,
    ImgBox,Header_Div,LevelBox,
    FullBox,LevelName,StudyLevelDiv,
    StudyBtn, StudyIntro } from '../component_css/Study_style';
import { FadeHome } from '../component_css/Home_style';
import { LevelDisc } from './../component_css/Study_style';

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

const Images=['img/level1-1.png','img/level2-2.png','img/level3-3.png'];

//---------------------------리소스-------------------------------

function Study(){    

    // 서버에서 이미지 받아오기 -> 일단은 프론트에서 하기로

    // useEffect(()=>{
    //     axios.get('/study')
    //     .then((response)=>{
    //     console.log(response);
    //     })
    // },[])
   
    return (
        <>
        <Header_Div>
            <Header/> 
        </Header_Div>
        {/* <img src='img/test_box.jpg'/> */}
        <ImgBox src='img/test_box.jpg'/>          
        
        <MediaDiv>
            <FadeHome>
                <FullBox>
                    {Study_level(1)}
                    {Study_level(2)}
                    {Study_level(3)} 
                </FullBox>
                
                <div>
                    <Link to={"../Service_intro"} style={{ textDecoration: 'none' }}>
                        <StudyIntro>수어의 학습 과정에 대해 더 알아보고 싶다면?</StudyIntro>
                    </Link>
                </div> 

            </FadeHome>
        </MediaDiv>
        </>
    );    
}

//단계 컴포넌트 (단계무관)
function Study_level(level){

    return(
        <LevelBox>

            <div>
                <ImgDiv alt="level" src={Images[level-1]}/>
            </div>

            <StudyLevelDiv>
                <LevelName>{Levels[(level-1)].level_name}</LevelName>
                <LevelDisc>{Levels[(level-1)].level_info}</LevelDisc>
            </StudyLevelDiv>

            <div>
                <Link to = {"study_class"} state={{level : (level)}}>
                    <StudyBtn>수강하기</StudyBtn>
                </Link>
            </div> 

        </LevelBox>
    );
}

export default React.memo(Study);
