"use client";

import { BookmarkView } from "@/features";
import { ConsoleLayout } from "@/layout/ConsoleLayout";
import React from "react";

const page = () => {
  return (
    <ConsoleLayout>
      <BookmarkView />
    </ConsoleLayout>
  );
};

export default page;
