import React, { FC } from "react";
import { Container } from "./DisplayAnalytics.style";
import { CardChart, DisplayCardCharts, DoughnutChart, PolarChart } from "..";
import { useGetAnalytics, useGetUserCount } from "@/hooks";
import { extractMainPathUrl } from "@/features/Bookmark/utils";

interface Props {
  idToken: string;
}

export const DisplayAnaltyics: FC<Props> = ({ idToken }) => {
  const { data } = useGetAnalytics(idToken);
  const { data: userCountData } = useGetUserCount(idToken);
  console.log(data);
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
  const mostVisitedBookmark = extractMainPathUrl(mostClickedSorted?.[0]?.title);

  function calculatePercentage(
    done: number | undefined,
    undnone: number | undefined
  ) {
    if (done !== undefined && undnone !== undefined && undnone !== 0) {
      const total = done + undnone;
      return (done / total) * 100;
    } else {
      return 100;
    }
  }
  const totalTodosDone = data?.todos.done ? data?.todos.done : 0;
  const totalTodosNotDone = data?.todos.todo ? data?.todos.todo : 0;
  const total = totalTodosDone + totalTodosNotDone;
  const todosDonePercentage = calculatePercentage(
    data?.todos.done,
    data?.todos?.todo
  )
    .toFixed(2)
    .toString();

  return (
    <Container>
      <DisplayCardCharts>
        <CardChart
          backGroundColor='#54ab85'
          mainTitle={`${todosDonePercentage} %`}
          underTitle='Of content is done'
          imageSrc='/svg/writingpad.svg'
        />
        <CardChart
          backGroundColor='#ecd913'
          mainTitle={
            mostVisitedBookmark ? mostVisitedBookmark : "No bookmark yet"
          }
          underTitle='Top visited Bookmark'
          imageSrc='/svg/browser.svg'
        />
        <CardChart
          backGroundColor='#ef8610'
          mainTitle={`${userCountData?.users.total} Users`}
          underTitle='Total Users Fango'
          imageSrc='/svg/user.svg'
        />
      </DisplayCardCharts>
      <PolarChart
        chartLabels={mostClickedNames ? mostClickedNames : ["no bookmarks"]}
        chartData={mostClickedNumbers ? mostClickedNumbers : [0, 0, 0]}
        chartTitle='Top Visited Bookmarks'
      />
      <DoughnutChart
        chartLabels={["Total", "Undone", "Done"]}
        chartData={[totalTodosDone, totalTodosNotDone, totalTodosDone]}
        chartTitle='Content/todo'
      />
    </Container>
  );
};
