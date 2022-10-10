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

const data = [
  // {name: "1",uv: 400,pv: 1500,amt: 200},
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
  {name: "25", 월: 100},
  {name: "26", 월: 100},
  {name: "27", 월: 100},
  {name: "28", 월: 100},
  {name: "29", 월: 100},
  {name: "30", 월: 100},
  {name: "31", 월: 100},
];

export default function App() {
  //서버
  const [inputData, setInputData] = useState([{
    levelIdx: '',
    testDate: '',
    testIdx: '',
    testCount: '',
    answerCount: ''
  }]);

  // 글 리스트의 갯수를 세기 위해 선언, 기본값 0
  const [lastIdx, setLastIdx] = useState(0)

  //서버에게서 데이터 받아오기
  // await 를 사용하기 위해 async선언
  useEffect(()=>{
    try{
    // 데이터를 받아오는 동안 시간이 소요됨으로 await 로 대기
      const res = axios.get(`/test/{year}/{month}/{userIdx}`)
      // 받아온 데이터로 다음 작업을 진행하기 위해 await 로 대기
      // 받아온 데이터를 map 해주어 rowData 별로 _inputData 선언
      const _inputData = res.data.map((rowData) => (
        // rowData 의 갯수만큼 증가
        setLastIdx(lastIdx+1),
        {
          levelIdx: rowData.idx,
          testDate: rowData.title,
          testIdx: rowData.content,
          testCount: rowData.writer,
          answerCount: rowData.write_date
        })
      )
      // 선언된 _inputData 를 최초 선언한 inputData 에 concat 으로 추가
      setInputData(inputData.concat(_inputData))
      console.log('App :: inputData :: ', inputData)
    } catch(e){
        console.error(e.message)
    }
  }, [])

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
      <Bar dataKey="월" fill="#FF7A00" background={{ fill: "#eee" }} />
    </BarChart>

     // rowData 가 없으면 '작성된 글이 없습니다'를 나타냄
     {lastIdx !== 0 ?
      inputData.map(rowData => (
        // 최초 선언한 기본값은 나타내지 않음
          rowData.idx !== '' &&
          <tr>
              <td className='listTableIndex'>
                // router 로 이동 시 idx값을 param 으로 전달
                  <Link to={`/BoardContent/${rowData.idx}`}>{rowData.idx}</Link>
              </td>
              <td className='listTableTitle'>
                  <Link to={`/BoardContent/${rowData.idx}`}>{rowData.title}</Link>
  );
}
