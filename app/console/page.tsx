"use client";
import { ConsoleView } from "@/features";
import { ConsoleLayout } from "@/layout/ConsoleLayout";
import React from "react";

const page = () => {
  return (
    <ConsoleLayout>
      <ConsoleView />
    </ConsoleLayout>
  );
};

export default page;
