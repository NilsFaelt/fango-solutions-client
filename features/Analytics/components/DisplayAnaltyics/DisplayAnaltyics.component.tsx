import React, { FC } from "react";
import { Container } from "./DisplayAnalytics.style";
import { DoughnutChart, PolarChart } from "..";
import { useGetAnalytics } from "@/hooks";
import { extractMainPathUrl } from "@/features/Bookmark/utils";

interface Props {
  idToken: string;
}

export const DisplayAnaltyics: FC<Props> = ({ idToken }) => {
  const { data } = useGetAnalytics(idToken);
  const mostClickedSorted = data?.bookmark.sort(
    (a, b) => b.totalClick - a.totalClick
  );
  const mostClickedSliced = mostClickedSorted?.slice(0, 5);
  const mostClickedNumbers = mostClickedSliced?.map(
    (bookmark) => bookmark.totalClick
  );
  const mostClickedNames = mostClickedSliced?.map((bookmark) => {
    const mainName = extractMainPathUrl(bookmark.title);
    if (mainName !== null) return mainName;
    return "No Name found";
  });
  console.log(mostClickedNumbers);
  return (
    <Container>
      <PolarChart
        chartLabels={mostClickedNames ? mostClickedNames : ["no bookmarks"]}
        chartData={mostClickedNumbers ? mostClickedNumbers : [0, 0, 0]}
        chartTitle='Top Visited Bookmarks'
      />
      <DoughnutChart
        chartLabels={["Total", "Undone", "Done"]}
        chartData={mostClickedNumbers ? mostClickedNumbers : [0, 0, 0]}
        chartTitle='Content/todo'
      />
    </Container>
  );
};
