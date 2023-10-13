"use client";
import { CookiePolicyView, HomePageView } from "@/features";
import { MainLayout } from "@/layout";
import { MainTitle } from "@/ui";

export default function Home() {
  return (
    <MainLayout>
      <CookiePolicyView />
    </MainLayout>
  );
}
