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

  },[inputData])

  // console.log(data)  
  
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
