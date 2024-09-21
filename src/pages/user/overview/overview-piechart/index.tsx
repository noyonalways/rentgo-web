import { Card, CardContent } from "@/components/ui/card";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Sample booking data
const bookingData = [
  { name: "Total Bookings", value: 10 },
  { name: "Pending Bookings", value: 5 },
  { name: "Completed Bookings", value: 4 },
  { name: "Canceled Bookings", value: 1 },
];

// Colors for each section of the pie chart
const COLORS = ["#0088FE", "#FFBB28", "#00C49F", "#FF8042"];

// Function to calculate percentage for labels
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderLabel = (entry: any) => {
  const total = bookingData.reduce((acc, cur) => acc + cur.value, 0);
  const percentage = ((entry.value / total) * 100).toFixed(1);
  return `${percentage}%`;
};

const OverviewPieChart = () => {
  return (
    <Card>
      <CardContent>
        <ResponsiveContainer height={380}>
          <PieChart>
            {/* The Pie with Labels */}
            <Pie
              data={bookingData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              labelLine={false}
              label={renderLabel}
            >
              {bookingData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* Tooltip to show additional details on hover */}
            <Tooltip
              formatter={(value: number, name: string) => [
                `${value} Bookings`,
                name,
              ]}
            />
            {/* Legend to display labels and their respective colors */}
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default OverviewPieChart;
