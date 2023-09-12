"use client";
import { DisplayInfoView } from "@/features/DisplayInfo";
import { MainLayout } from "@/layout";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;
  return (
    <MainLayout>
      <DisplayInfoView id={params.id} />
    </MainLayout>
  );
};

export default page;
