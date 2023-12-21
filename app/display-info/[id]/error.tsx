"use client";
import { useRouter } from "next/navigation";
import { MainTitle, PrimaryButton } from "@/ui";
import { useEffect } from "react";
import { Container } from "./Error.style";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <Container>
      <MainTitle text='Something Went Wrong' underText='Please Try Again' />

      <PrimaryButton
        text='REFRESH'
        onClick={() => {
          router.push("/");
        }}
      />
    </Container>
  );
}
