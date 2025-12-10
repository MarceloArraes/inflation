import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', inflation: 2.1 },
  { name: 'Feb', inflation: 2.2 },
  { name: 'Mar', inflation: 2.3 },
  { name: 'Apr', inflation: 2.5 },
  { name: 'May', inflation: 2.6 },
  { name: 'Jun', inflation: 2.7 },
  { name: 'Jul', inflation: 2.9 },
  { name: 'Aug', inflation: 3.0 },
  { name: 'Sep', inflation: 3.1 },
  { name: 'Oct', inflation: 3.2 },
  { name: 'Nov', inflation: 3.4 },
  { name: 'Dec', inflation: 3.5 },
];

export default function InflationLineChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="inflation" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}