import StyledComponentsRegistry from "@/lib/registry";
import { ProviderWrapper } from "@/provider";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Fango Solutions",
  description: "Generated For ease of browsing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <meta name='viewport' content='width=device-width, user-scalable=no' />
      <body className={kanit.className}>
        <StyledComponentsRegistry>
          <ProviderWrapper>{children}</ProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
