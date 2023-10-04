"use client";
import { HomePageView } from "@/features";
import { MainLayout } from "@/layout";
import { Spinner } from "@/ui";

export default function Home() {
  return (
    <MainLayout>
      <HomePageView />
    </MainLayout>
  );
}
