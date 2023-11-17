import React, { FC } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Container } from "./BarChart.style";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  title: string;
  labels: string[];
  datasetOne: { label: string; data: number[] };
  datasetTwo: { label: string; data: number[] };
  datasetThree: { label: string; data: number[] };
}

export const BarChart: FC<Props> = ({
  title,
  labels,
  datasetOne,
  datasetTwo,
  datasetThree,
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
        display: true,
      },
      title: {
        display: true,
        text: title,
        color: "white",

        font: {
          size: 16,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: datasetOne.label,
        data: datasetOne.data,
        backgroundColor: "rgba(53, 162, 235, 1)",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: datasetTwo.label,
        data: datasetTwo.data,
        backgroundColor: "rgba(125, 222, 114, 1)",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: datasetThree.label,
        data: datasetThree.data,
        backgroundColor: "rgba(255, 162, 235, 1)",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container>
      <Bar data={data} options={options} />
    </Container>
  );
};
