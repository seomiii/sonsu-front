import React,{useCallback, useState,useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import Chart1 from "./chart/grade_chart_1";
import Chart2 from "./chart/grade_chart_2";
import Chart3 from "./chart/grade_chart_3";
import Chart from "./chart/grade_chart";
import axios from 'axios';
import Header from './header'
import { Myheader } from './../component_css/Mypage_style';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";
import {
    GradeDiv,
    GradeTitle,
    GradeText,
    GradeChart,
    ChartDivA,
    ChartDivB,
    ChartDivC,
    ChartContentDiv,
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

const Level_Arr=[
    {
        level: ["level1", "level2", "level3"],
        level_name: ["초급", "중급", "고급"],
    },
]
// 현재 년도, 월
let now=new Date();
let year=now.getFullYear();
let todayMonth=now.getMonth()+1;


const Grade = (props) => {

    const level_number = Level_Arr[0].level;
    const level_name = Level_Arr[0].level_name;

    const [lastIdx, setLastIdx] = useState(0);
    // const [lastIdxA, setLastIdxA] = useState(0);
    // const [lastIdxB, setLastIdxB] = useState(0);
    // const [lastIdxC, setLastIdxC] = useState(0);
    const [inputData, setInputData] = useState([]);
    const [month,setMonth]=useState(todayMonth);
    const [data,setData]=useState([]);
    // const [level,setLevel]=useState(Level_Arr[0]);
    const [level,setLevel]=useState([]);

    const [testData, setTestData] = useState([]);

    // 그래프 데이터
    const getGroupList = async()=>{
    try{

        const res = await axios.get(`/test/${year}/10/1`)
        console.log('response: ', res.data.data);
        // const deepres = await axios.get(`/test/${year}/10/1/data/data/${level}`)

        // const test = await res.data.data.level1.map()
        // setTestData(testData.concat(test))
        // setTestData(res.data.data);

        // const _inputDataA = await res.data.data.level1.map((rowData) => (
        //     setLastIdxA(lastIdxA+1),
        //     {
        //     testDate: (rowData.testDate).slice(8,10),
        //     averageA: (rowData.average)
        //     }
        // ))
        // const _inputDataB = await res.data.data.level2.map((rowData) => (
        //     setLastIdxB(lastIdxB+1),
        //     {
        //     testDate: (rowData.testDate).slice(8,10),
        //     averageB: (rowData.average)
        //     }
        // ))
        // const _inputDataC = await res.data.data.level3.map((rowData) => (
        //     setLastIdxC(lastIdxC+1),
        //     {
        //         testDate: (rowData.testDate).slice(8,10),
        //         averageC: (rowData.average)
        //     }
        // ))
        const _inputData = await res.data.data.level1.map((rowData) => (
            setLastIdx(lastIdx+1),
            {
                testDate: (rowData.testDate).slice(8,10),
                average: (rowData.average)
            }
        ))

        // setInputData(inputData.concat(_inputDataA, _inputDataB, _inputDataC))   
        // setInputData(inputData.merge(_inputDataA, _inputDataB, _inputDataC))   
        setInputData(inputData.concat(_inputData))   


        }
        catch(e){
            console.error(e.message)
        }
    };

    useEffect(()=>{
        getGroupList();
    },[]);

    // console.log('testdata: ', testData);
    console.log('inputData : ', inputData)

    useEffect(()=>{
        const graphData=inputData.map((i)=>(
          {
            // name: `${i.testDate}일`,
            name : i.testDate,
            초급맞춘갯수 : i.average,
            // 초급맞춘갯수 : i.averageA,
            // 중급맞춘갯수 : i.averageB, 
            // 고급맞춘갯수 : i.averageC, 
          }
        ))
        setData(data.concat(graphData)) 
    
        // const add={name:'1', 갯수:1};
        // setData(data.concat(add));
    
      },[inputData])
    
      console.log('Data : ', data) 

    // 성적표 자체 데이터
    useEffect(()=>{
        axios.get(`/note/${year}/${month}/1`)        
        .then((response)=>{
         setTestData(response.data.data);
        //  console.log('Response : ', response)
        })

    }, [month])

    // console.log('TestData : ',testData);
    // console.log('Month : ',month);

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    // console.log('level', level)

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
                                // <Month onClick={()=> {setMonth(i)}} style={{Color: active ? "black":"orange"}}>{i}월</Month>
                                <Month>{i}월</Month>                
                        )
                        )}
                    </MonthDiv>
                    <GradeChart>
                        <ChartDivA>
                            {/* <ChartContent>초급</ChartContent> */}
                            {/* <Chart/> */}
                            <ChartContentDiv>
                                { level_name.map(i=> (                    
                                        // <Month onClick={()=> {setMonth(i)}} style={{Color: active ? "black":"orange"}}>{i}월</Month>
                                        <ChartContent onClick={()=> {setLevel(i)}}>{i}</ChartContent>                
                                    )
                                )}
                            </ChartContentDiv>
                            <LineChart
                                width={800}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                                //   lineSize={20}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    {/* <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} /> */}
                                    <XAxis dataKey="name"/>
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    {/* <CartesianGrid strokeDasharray="3 3"/> */}
                                    <Line type="monotone" dataKey="초급맞춘갯수" stroke="#FF7A00">
                                    </Line>
                                    {/* <Line type="monotone" dataKey="중급맞춘갯수" stroke="#8884d8">
                                    </Line>
                                    <Line type="monotone" dataKey="고급맞춘갯수" stroke="#82ca9d">
                                    </Line> */}
                                    {/* <Line dataKey="맞춘갯수" fill="#FF7A00" background={{ fill: "#D9D9D9" }} /> */}

                                </LineChart>
                        </ChartDivA>
                        {/* <ChartDivB>
                            <ChartContent>중급</ChartContent>
                            <Chart2/>
                        </ChartDivB>
                        <ChartDivC>
                            <ChartContent>고급</ChartContent>
                            <Chart3/>
                        </ChartDivC> */}
                    </GradeChart>
                </GradeDiv>
            </MediaDiv>
        </>
    );
}

export default Grade