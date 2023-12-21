"use client";
import { CookiePolicyView } from "@/features";
import { MainLayout } from "@/layout";

export default function Home() {
  return (
    <MainLayout>
      <CookiePolicyView />
    </MainLayout>
  );
}
