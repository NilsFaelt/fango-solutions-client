import React, { FC } from "react";
import { Container } from "./PolarChart.style";
import { PolarArea } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
Chart.register(ArcElement, RadialLinearScale, Tooltip, Legend, Title);
interface Props {
  chartTitle: string;
  chartLabels: string[];
  chartData: number[];
}

export const PolarChart: FC<Props> = ({
  chartLabels,
  chartData,
  chartTitle,
}) => {
  const data = {
    labels: chartLabels,

    datasets: [
      {
        label: "Visited",
        data: chartData,
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderColor: [
          "rgba(0, 216, 234, 1)", // Light blue
          "rgba(127, 66, 126, 1)", // Purple
          "rgba(125, 222, 114, 1)", // Green
          "rgba(239, 150, 36, 1)", // Orange
          "rgba(255, 196, 60, 1)", // Yellow
        ],

        borderWidth: 2, // Adjust the border width as needed
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    scales: {
      r: {
        grid: {
          color: "white",
        },
        ticks: {
          display: false,
          color: "black",
        },
        backgroundColor: "black",
        color: "white",
      },
    },
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
      <PolarArea data={data} options={options} />
    </Container>
  );
};
