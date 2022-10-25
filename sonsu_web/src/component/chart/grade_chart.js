import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// 현재 년도, 월
let now=new Date();
let year=now.getFullYear();
let todayMonth=now.getMonth()+1;
// console.log(year,todayMonth);

export default function Grade_chart() {

  const [lastIdxA, setLastIdxA] = useState(0);
  const [lastIdxB, setLastIdxB] = useState(0);
  const [lastIdxC, setLastIdxC] = useState(0);
  const [inputData, setInputData] = useState([]);
  const [data, setData]=useState([]);

  const [testData, setTestData] = useState([]);
  

  // useEffect(()=>{
  //   axios.get('/test/${year}/10/1')
  //   .then((response)=>{
  //   setTestData(response.data.data);
  //   })
  // },[])

  // console.log('testdata: ', testData);

  // 초급 데이터
  useEffect(async()=>{
    try{

      const res = await axios.get(`/test/${year}/10/1`)
      // console.log('response: ', res.data.data);

      // const test = await res.data.data.level1.map()
      // setTestData(testData.concat(test))
      // setTestData(res.data.data);

      const _inputDataA = await res.data.data.level1.map((rowData) => (
        setLastIdxA(lastIdxA+1),
        {
          testDate: (rowData.testDate).slice(8,10),
          averageA: (rowData.average)
         
        }
      ))
      const _inputDataB = await res.data.data.level2.map((rowData) => (
        setLastIdxB(lastIdxB+1),
        {
          testDate: (rowData.testDate).slice(8,10),
          averageB: (rowData.average)
         
        }
      ))
      const _inputDataC = await res.data.data.level3.map((rowData) => (
        setLastIdxC(lastIdxC+1),
        {
          testDate: (rowData.testDate).slice(8,10),
          averageC: (rowData.average)
         
        }
      ))

      setInputData(inputData.concat(_inputDataA, _inputDataB, _inputDataC))   
         

    }
    catch(e){
      console.error(e.message)
    }
  },[])

  console.log('testdata: ', testData);
  console.log('App :: inputData :: ', inputData)
  
  useEffect(()=>{
    const graphData=inputData.map((i)=>(
      {
        // name: `${i.testDate}일`,
        name : i.testDate,
        초급맞춘갯수 : i.averageA,
        중급맞춘갯수 : i.averageB, 
        고급맞춘갯수 : i.averageC, 
      }
    ))
    setData(data.concat(graphData)) 

    // const add={name:'1', 갯수:1};
    // setData(data.concat(add));

  },[inputData])

  console.log(data)  

  return (
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
        <Line type="monotone" dataKey="초급맞춘갯수" stroke="black">
        </Line>
        <Line type="monotone" dataKey="중급맞춘갯수" stroke="#8884d8">
        </Line>
        <Line type="monotone" dataKey="고급맞춘갯수" stroke="#82ca9d">
        </Line>
        {/* <Line dataKey="맞춘갯수" fill="#FF7A00" background={{ fill: "#D9D9D9" }} /> */}

    </LineChart>
  );
}
