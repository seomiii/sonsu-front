import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "process", value: 400 },
  { name: "n process", value: 300 },
];
const dataA = [
  { name: "process", value: 400 },
  { name: "n process", value: 300 },
];
// const dataB = [
//   { name: "process", value: 600 },
//   { name: "n process", value: 300 },
// ];
// const dataC = [
//   { name: "process", value: 100 },
//   { name: "n process", value: 800 },
// ];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const COLORS = ["#FF7A00", "#ffffff"];

export default function App() {
  return (
    <PieChart width={750} height={180}>
      <Pie
        data={data}
        cx={120}
        cy={90}
        innerRadius={30}
        outerRadius={60}
        fill="#8884d8"
        stroke="#FF7A00"
        strokeWidth={1}
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Pie
        data={dataA}
        cx={370}
        cy={90}
        innerRadius={30}
        outerRadius={60}
        fill="#8884d8"
        stroke="#FF7A00"
        strokeWidth={1}
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Pie
        data={data}
        cx={620}
        cy={90}
        innerRadius={30}
        outerRadius={60}
        fill="#8884d8"
        stroke="#FF7A00"
        strokeWidth={1}
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {/* <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie> */}
    </PieChart>
  );
}
