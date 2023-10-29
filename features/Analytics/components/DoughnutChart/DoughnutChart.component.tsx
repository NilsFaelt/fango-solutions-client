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
} from "chart.js";
import { ChartTitle } from "@/styles";
Chart.register(ArcElement, RadialLinearScale, Tooltip, Legend, Title);
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
        data: [44, 37, 28],
        backgroundColor: [
          "rgba(159, 13, 127, 1)",
          "rgba(234, 17, 121, 1)",
          "rgba(125, 222, 114, 1)",
        ],
        borderWidth: 1,
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
