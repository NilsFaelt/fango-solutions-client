import React, { FC } from "react";
import { Container } from "./DoughnutChart.style";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Title,
  Filler,
} from "chart.js";

Chart.register(ArcElement, RadialLinearScale, Filler, Tooltip, Legend, Title);
interface Props {
  chartTitle: string;
  chartLabels: string[];
  chartData: number[];
}

export const DoughnutChart: FC<Props> = ({
  chartLabels,
  chartData,
  chartTitle,
}) => {
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Content/Todo",
        data: chartData,
        backgroundColor: "black",
        borderColor: [
          "rgba(0,216,234,255)",
          "rgba(127,66,126,255)",
          "rgba(125, 222, 114, 1)",
        ],
        borderWidth: 2, // Adjust the border width as needed
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: chartTitle,
        color: "white",
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <Container>
      <Doughnut data={data} options={options} />
    </Container>
  );
};
