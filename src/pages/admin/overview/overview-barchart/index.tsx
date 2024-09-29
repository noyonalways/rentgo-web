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

interface IProps {
  totalBookings: number;
  availableCars: number;
  totalRevenue: number;
  totalUsers: number;
}

const OverviewBarChart: React.FC<IProps> = ({
  totalBookings,
  availableCars,
  totalRevenue,
  totalUsers,
}) => {
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

  const chartData = [
    { type: "Total Bookings", count: totalBookings },
    { type: "Available Cars", count: availableCars },
    { type: "Total Revenue", count: totalRevenue },
    { type: "Total Users", count: totalUsers },
  ];

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
