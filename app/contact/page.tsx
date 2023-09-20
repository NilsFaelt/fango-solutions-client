"use client";
import { ContactView } from "@/features/Contact";
import { MainLayout } from "@/layout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <ContactView />
    </MainLayout>
  );
};

export default page;
