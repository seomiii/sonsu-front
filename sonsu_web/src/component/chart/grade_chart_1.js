import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data1 = [
  // {name: "1",uv: 400,pv: 1500,amt: 200},
  {name: "25", 월: 100},
  {name: "26", 월: 100},
  {name: "27", 월: 100},
  {name: "28", 월: 100},
  {name: "29", 월: 100},
  {name: "30", 월: 100},
  {name: "31", 월: 100},
  {name: "1", 월: 100},
  {name: "2", 월: 100},
  {name: "3", 월: 100},
  {name: "4", 월: 100},
  {name: "5", 월: 100},
  {name: "6", 월: 100},
  {name: "7", 월: 100},
  {name: "8", 월: 100},
  {name: "9", 월: 100},
  {name: "10", 월: 100},
  {name: "11", 월: 100},
  {name: "12", 월: 100},
  {name: "13", 월: 100},
  {name: "14", 월: 100},
  {name: "15", 월: 100},
  {name: "16", 월: 100},
  {name: "17", 월: 100},
  {name: "18", 월: 100},
  {name: "19", 월: 100},
  {name: "20", 월: 100},
  {name: "21", 월: 100},
  {name: "22", 월: 100},
  {name: "23", 월: 100},
  {name: "24", 월: 100},
  
];

// 현재 년도, 월
let now=new Date();
let year=now.getFullYear();
let todayMonth=now.getMonth()+1;
// console.log(year,todayMonth);

export default function Grade_chart_1() {

  const [lastIdx, setLastIdx] = useState(0);
  const [inputData, setInputData] = useState([]);
  const [data, setData]=useState([]);

  useEffect(async()=>{
    try{
      const res = await axios.get(`/test/${year}/9/1`)

      const _inputData = await res.data.data.level1.map((rowData) => (
        setLastIdx(lastIdx+1),
        {
        answerCount: rowData.answerCount,
        levelIdx: rowData.levelIdx,
        testCount: rowData.testCount,
        testDate: (rowData.testDate).slice(8,10),
        testIdx: rowData.testIdx
      }
      ))
      setInputData(inputData.concat(_inputData))      

    }
    catch(e){
      console.error(e.message)
    }
  },[])

  // console.log('App :: inputData :: ', inputData)
  
  useEffect(()=>{
    const graphData=inputData.map((i)=>(
      {
        name: i.testDate,
        갯수 : i.answerCount
      }
    ))
    setData(data.concat(graphData)) 

    // const add={name:'1', 갯수:1};
    // setData(data.concat(add));

    

  },[inputData])

  console.log(data)  

  
  
  return (
    <BarChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="갯수" fill="#FF7A00" background={{ fill: "#D9D9D9" }} />
    </BarChart>

  );
}
