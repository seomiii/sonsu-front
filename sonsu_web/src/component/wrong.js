import {useLocation, Link} from 'react-router-dom';
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
    YearDiv,
    MonthDiv,
    Month,
} from '../component_css/Wrong_style';
// import { Toolbar } from '@material-ui/core';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Month_Arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const [mon_month,setMonth] = useState(Month_Arr[0]);

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
            console.log(response);
            setData(response.data.data);
        })

    }, [month])

    console.log(data);
    console.log(month);

    const [active, setActive] = useState("");
    // const handleClick = () => {
    //     setActive(!active);
    // };
    const toggleActive = (e) => {
        setActive((prev) => {
          return e.target.value;
        });
    };
    

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
                        <YearDiv>{year}년</YearDiv>
                        <MonthDiv>
                            { Month_Arr.map(i=> (                    
                                    // <Month onClick={()=> {setMonth(i)}} style={{Color: active ? "black":"orange"}}>{i}월</Month> 
                                    <Month onClick={()=> {setMonth(i)}}>{i}월</Month> 

                            )
                            )}
                        </MonthDiv>
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
                                            {/* <WrongBtn style={{i.testResult[0]} ? {border:'2px solid #FF7A00' , backgroundColor: '#FFFFFF' , color:'#2E2E2E'}: {color:'red'}}>초급 {i.testResult[0]}</WrongBtn> */}
                                            <WrongBtn>초급</WrongBtn>
                                        </Link>

                                        <Link to="/wrong_repeat" state={{
                                            year:(year),
                                            month: (month),
                                            day: ((i.testDate)),
                                            level : 2
                                        }} 
                                        style={{ textDecoration: 'none' }}>
                                            <WrongBtn>중급</WrongBtn>
                                        </Link>

                                        <Link to="/wrong_repeat" state={{
                                            year:(year),
                                            month: (month),
                                            day: ((i.testDate)),
                                            level: 3
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

// export default Wrong

function changeColor() {
    document.body.style.color = "purple";
    return (false);
}

export default React.memo(Wrong);