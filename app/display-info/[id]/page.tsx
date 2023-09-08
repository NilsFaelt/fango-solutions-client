"use client";
import { MainLayout } from "@/layout";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <MainLayout>
      <div>{params.id}</div>
    </MainLayout>
  );
};

export default page;
