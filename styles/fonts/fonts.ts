"use client";
import { Inter, Roboto_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

// Set global font in layout
// Import fonts to element front fonts folder
// example:
// <h1 className={roboto_mono.className}>test</h1>
