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
    label: ["test"],
    labels: chartLabels,
    datasets: [
      {
        label: "Visited",
        data: chartData,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgba(159, 13, 127, 1)",
          "rgba(234, 17, 121, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    scales: {
      r: {
        grid: {
          color: "white", // Set the color of the background circle lines to white
        },
        ticks: {
          display: true,
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
