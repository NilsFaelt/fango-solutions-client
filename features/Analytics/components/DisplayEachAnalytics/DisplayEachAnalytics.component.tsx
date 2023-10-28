import React, { FC } from "react";
import { Container } from "./DisplayEachAnalytics.style";
import { Doughnut, PolarArea } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { MainTitle } from "@/ui";

Chart.register(ArcElement, RadialLinearScale, Tooltip, Legend);

export const DisplayEachAnalytics: FC = () => {
  const chartData = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [60, 20, 30], // Replace with your actual data
        backgroundColor: ["#9F0D7F", "#f4150b", "#F79BD3"], // Colors for segments
      },
    ],
  };

  const data = {
    labels: ["Facebook", "Green", "Yellow", "Grey", "Blue"],
    datasets: [
      {
        label: "Clicked",
        data: [11, 11, 11, 11, 6, 14],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container>
      <PolarArea data={data} style={{ width: "10rem" }} />
    </Container>
  );
};

// primary: "#9F0D7F",
// secondary: "#EA1179",
// extra: "#F79BD3",
// darkFill: "#241468",
// danger: "#f4150b",
// backgroundPrimary: "rgba(0,0,0, 0.5)",
// consolePrimary: "#ca8122",
