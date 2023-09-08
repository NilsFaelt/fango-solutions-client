"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MenuContextProvider } from "@/context";
import { GlobalStyle } from "@/styles";
import { PropsWithChildren, useState } from "react";

export function ProviderWrapper({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient());
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <MenuContextProvider>{children}</MenuContextProvider>
      </QueryClientProvider>
    </>
  );
}
