import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data02 = [
  { name: "item A", value: 2400 },
  { name: "item B", value: 4567 },
  { name: "item C", value: 1398 },
  { name: "item D", value: 9800 },
  { name: "item E", value: 3908 },
];

const Piechart = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <PieChart width={500} height={400}>
          {/* <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          /> */}

          <Pie
            dataKey="value"
            data={data02}
            cx={150}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />

          <Tooltip />
        </PieChart>
      </div>
      <div style={{ maxWidth: "200px" }}>
        {data02.map((data, idx) => (
          <ul key={idx}>
            <p>
              <li>{`${data.name}  ${data.value}`}</li>
            </p>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Piechart;
