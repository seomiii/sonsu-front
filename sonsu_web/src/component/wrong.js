import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header'
import { HeaderDiv } from '../component_css/Home_style';
import { Myheader } from './../component_css/Mypage_style';
import { FadeHome } from '../component_css/Home_style';
import { MediaDiv } from '../component_css/Study_style';
import {
    WrongTitle,
    WrongDiv,
    WrongContent,
    WrongText,
    WrongList,
    WrongListContent,
    WrongDay,
    WrongBtn,

} from '../component_css/Wrong_style';
// import { Toolbar } from '@material-ui/core';
import 'react-big-calendar/lib/css/react-big-calendar.css';


// 현재 년도, 월
let now=new Date();
let year=now.getFullYear();
let todayMonth=now.getMonth()+1;

const Wrong = () => {

    const [month,setMonth]=useState(todayMonth);
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get(`/note/${year}/${month}/1`)        
        .then((response)=>{
         setData(response.data.data);
        })

    }, [])

    console.log(data);

    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            
            <MediaDiv>
                <FadeHome>
                    <WrongDiv>
                        <WrongTitle>
                            <img src='img/bar.png' alt="image"/>
                            <WrongText>
                                오답노트
                            </WrongText>
                        </WrongTitle>

                        {year}년



                        <WrongContent>
                            <WrongList>                                
                                {data.map(i=>(
                                    <WrongListContent>
                                        <WrongDay>{i.testDate}</WrongDay>

                                        <Link to="/wrong_repeat" state={{
                                            year:(year),
                                            month: (month),
                                            day: (i.testDate),
                                            level : 1
                                        }} 
                                        style={{ textDecoration: 'none' }}>
                                            <WrongBtn>초급</WrongBtn>
                                        </Link>

                                        <Link to="/wrong_repeat" state={{
                                            year:(year),
                                            month: (month),
                                            day: ((i.testDate).slice(8,10)),
                                            level : 2
                                        }} 
                                        style={{ textDecoration: 'none' }}>
                                            <WrongBtn>중급</WrongBtn>
                                        </Link>

                                        <Link to="/wrong_repeat" state={{
                                            year:(year),
                                            month: (month),
                                            day: ((i.testDate).slice(8,10)),
                                            level : 3
                                        }}
                                        style={{ textDecoration: 'none' }}>
                                            <WrongBtn>고급</WrongBtn>
                                        </Link>
                                    </WrongListContent>
                                    )
                                )}
                            </WrongList>
                        </WrongContent>
                    </WrongDiv>
                </FadeHome>
            </MediaDiv>
        </>
    )
}

export default Wrong