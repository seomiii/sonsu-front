import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell } from "recharts";
import axios from 'axios';
const COLORS = ["#FF7A00", "#ffffff"];

export default function App() {

  const [UserData,setUserData] = useState();

  useEffect(()=>{
    axios.get(`/mypage/2`)
    .then((response)=>{
     setUserData(response.data.data);
    })

  }, [])

  const data1 = [
    { name: "process", value: UserData && (UserData.progressDto[0].doneCount) },
    { name: "n process", value: UserData && (UserData.progressDto[0].totalCount-UserData.progressDto[0].doneCount) },
  ];

  const data2 = [
    { name: "process", value: UserData && (UserData.progressDto[1].doneCount) },
    { name: "n process", value: UserData && (UserData.progressDto[1].totalCount-UserData.progressDto[1].doneCount) },
  ];

  const data3 = [
    { name: "process", value: UserData && (UserData.progressDto[2].doneCount) },
    { name: "n process", value: UserData && (UserData.progressDto[2].totalCount-UserData.progressDto[2].doneCount) },
  ];

  return (
    <PieChart width={850} height={250}>
      <Pie
        data={data1}
        cx={190}
        cy={130}
        innerRadius={50}
        outerRadius={90}
        fill="#8884d8"
        stroke="#FF7A00"
        strokeWidth={1}
        paddingAngle={5}
        dataKey="value"
      >
        {data1.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Pie
        data={data2}
        cx={460}
        cy={130}
        innerRadius={50}
        outerRadius={90}
        fill="#8884d8"
        stroke="#FF7A00"
        strokeWidth={1}
        paddingAngle={5}
        dataKey="value"
      >
        {data2.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Pie
        data={data3}
        cx={730}
        cy={130}
        innerRadius={50}
        outerRadius={90}
        fill="#8884d8"
        stroke="#FF7A00"
        strokeWidth={1}
        paddingAngle={5}
        dataKey="value"
      >
        {data3.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}