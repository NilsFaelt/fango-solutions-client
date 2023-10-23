"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BookmarkContextProvider, MenuContextProvider } from "@/context";
import { GlobalStyle } from "@/styles";
import { PropsWithChildren, useState } from "react";
import { LoggedinUserContextProvider } from "@/context/LoggedInUserContext";

export function ProviderWrapper({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient());
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <BookmarkContextProvider>
          <LoggedinUserContextProvider>
            <MenuContextProvider>{children}</MenuContextProvider>
          </LoggedinUserContextProvider>
        </BookmarkContextProvider>
      </QueryClientProvider>
    </>
  );
}
