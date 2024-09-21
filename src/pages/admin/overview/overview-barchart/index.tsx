import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

export const description = "A bar chart with custom labels for bookings";

// Updated chart data for bookings
const chartData = [
  { type: "Total Booking", count: 400 },
  { type: "Available Cars", count: 50 },
  { type: "Total Revenue", count: 1000 },
  { type: "Total User", count: 280 },
];

// Updated chart configuration for each booking type
const chartConfig = {
  total: {
    label: "Total Bookings",
    color: "hsl(var(--primary))",
  },
  pending: {
    label: "Available Cars",
    color: "hsl(var(--primary))",
  },
  completed: {
    label: "Total Revenue",
    color: "hsl(var(--primary))",
  },
  canceled: {
    label: "Total User",
    color: "hsl(var(--primary))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

const OverviewBarChart: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-4">
        <ChartContainer config={chartConfig}>
          <BarChart
            className="p-0"
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ right: 16 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="type"
              type="category"
              tickLine={false}
              tickMargin={0}
              axisLine={false}
              tickFormatter={(value) => value}
              hide
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            {/* Different bars for each booking type with custom labels */}
            <Bar
              dataKey="count"
              layout="vertical"
              radius={4}
              fill="var(--color-total)"
            >
              <LabelList
                dataKey="type"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="count"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default OverviewBarChart;
