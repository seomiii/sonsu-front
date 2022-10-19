import React,{useCallback, useState,useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import Chart1 from "./chart/grade_chart_1";
import Chart2 from "./chart/grade_chart_2";
import Chart3 from "./chart/grade_chart_3";
import axios from 'axios';
import Header from './header'
import { Myheader } from './../component_css/Mypage_style';
import {
    GradeDiv,
    GradeTitle,
    GradeText,
    GradeLevel,
    GradeChart,
    ChartDivA,
    ChartDivB,
    ChartDivC,
    ChartContent,
} from './../component_css/Grade_style';
import {
    MonthDiv,
    Month,
} from '../component_css/Wrong_style';
import { 
    MediaDiv,
    Curri, 
} from './../component_css/Study_style';

import { HeaderDiv } from '../component_css/Home_style';

const Month_Arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// 탭 구성 리소스
const Level_Arr=[
    {
        level_name:["초급", "중급", "고급"],
    },
]

// 현재 년도, 월
let now=new Date();
let year=now.getFullYear();
let todayMonth=now.getMonth()+1;


const Grade = (props) => {

    const level_name = Level_Arr.curri_arr;

    const [month,setMonth]=useState(todayMonth);
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get(`/note/${year}/${month}/1`)        
        .then((response)=>{
         setData(response.data.data);
        })

    }, [month])

    console.log(data);
    console.log(month);

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            
            <MediaDiv>
                <GradeDiv>
                    <GradeTitle>
                        <img src='img/bar.png' alt="image"/>
                        <GradeText>성적표</GradeText>
                    </GradeTitle>
                    <MonthDiv>
                            { Month_Arr.map(i=> (                    
                                    <Month onClick={()=> {setMonth(i)}} style={{Color: active ? "black":"orange"}}>{i}월</Month>                
                            )
                            )}
                    </MonthDiv>
                    <GradeLevel>
                        {/* {level_name.map(i => (                    
                            <Curri onClick={()=> {setCurri(i)}}>{i}</Curri>                
                        )
                        )} */}
                    </GradeLevel>
                    <GradeChart>
                        <ChartDivA>
                            <ChartContent>초급</ChartContent>
                            <Chart1/>
                        </ChartDivA>
                        <ChartDivB>
                            <ChartContent>중급</ChartContent>
                            <Chart2/>
                        </ChartDivB>
                        <ChartDivC>
                            <ChartContent>고급</ChartContent>
                            <Chart3/>
                        </ChartDivC>
                    </GradeChart>
                </GradeDiv>
            </MediaDiv>
        </>
    )
}

export default Grade