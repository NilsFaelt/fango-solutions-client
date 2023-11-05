"use client";
import React, { FC } from "react";
import { Container } from "./DisplayAnalytics.style";
import { CardChart, DisplayCardCharts, DoughnutChart, PolarChart } from "..";
import { useGetAnalytics, useGetUserCount } from "@/hooks";
import { extractMainPathUrl } from "@/features/Bookmark/utils";
import { BarChart } from "../BarChart";
import { AnalyticsInterface } from "@/types/analytics";
import { Spinner } from "@/ui";
interface Props {
  idToken: string;
}

export const DisplayAnaltyics: FC<Props> = ({ idToken }) => {
  const { data: analyticsData, isLoading } = useGetAnalytics(idToken);
  const { data: userCountData } = useGetUserCount(idToken);
  console.log(analyticsData, " in comp");
  function sortBookmarksByTodos(data: AnalyticsInterface | undefined | null) {
    if (!data?.bookmark) return [];

    const sortedBookmarks = data.bookmark.sort(
      (a, b) => (b.todos?.todo || 0) - (a?.todos?.todo || 0)
    );
    return sortedBookmarks;
  }

  const mostTodosBoomarks = sortBookmarksByTodos(analyticsData);

  const mostTodosBoomarksTitleArray = mostTodosBoomarks.map(
    (a) => extractMainPathUrl(a.title) || "Name not found"
  );
  const mostTodosBoomarksDataTodo = mostTodosBoomarks.map((a) => a.todos.todo);
  const mostTodosBoomarksDataDone = mostTodosBoomarks.map((a) => a.todos.done);
  const mostTodosBoomarksDataTotal = mostTodosBoomarks.map(
    (a) => a.todos.done + a.todos.todo
  );

  const mostClickedSorted = analyticsData?.bookmark.sort(
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
  const totalTodosDone = analyticsData?.todos.done
    ? analyticsData?.todos.done
    : 0;
  const totalTodosNotDone = analyticsData?.todos.todo
    ? analyticsData?.todos.todo
    : 0;
  const totalUsers = userCountData?.users.total
    ? userCountData?.users.total.toString()
    : "0";
  const todosDonePercentage = calculatePercentage(
    analyticsData?.todos.done,
    analyticsData?.todos?.todo
  )
    .toFixed(2)
    .toString();
  if (isLoading) return <Spinner />;
  return (
    <Container>
      <DisplayCardCharts>
        <CardChart
          backGroundColor='rgba(0,216,234,255)'
          mainTitle={`${todosDonePercentage} %`}
          underTitle='Of content is done'
          imageSrc='/svg/writingpad.svg'
        />

        <CardChart
          backGroundColor='rgba(142,220,198,255)'
          mainTitle={`${totalUsers} Users`}
          underTitle='Total Users Fango'
          imageSrc='/svg/user.svg'
        />
      </DisplayCardCharts>
      <BarChart
        title='Content/todo per bookmark'
        datasetOne={{ label: "Todo", data: mostTodosBoomarksDataTodo }}
        datasetTwo={{ label: "Done", data: mostTodosBoomarksDataDone }}
        datasetThree={{ label: "Total", data: mostTodosBoomarksDataTotal }}
        labels={mostTodosBoomarksTitleArray}
      />
      <PolarChart
        chartLabels={mostClickedNames ? mostClickedNames : ["no bookmarks"]}
        chartData={mostClickedNumbers ? mostClickedNumbers : [0, 0, 0]}
        chartTitle='Top Visited Bookmarks'
      />
      <DoughnutChart
        chartLabels={["Total", "Undone", "Done"]}
        chartData={[totalTodosDone, totalTodosNotDone, totalTodosDone]}
        chartTitle='Content/todo, total all bookmarks'
      />
      <DisplayCardCharts>
        <CardChart
          backGroundColor='rgba(127,66,126,255)'
          mainTitle={mostVisitedBookmark ? mostVisitedBookmark : "Non added "}
          underTitle='Top visited Bookmark'
          imageSrc='/svg/browser.svg'
        />
      </DisplayCardCharts>
    </Container>
  );
};
