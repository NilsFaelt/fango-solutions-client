import React, { FC, ReactNode, useContext } from "react";
import { Container } from "./ConsoleLayout.style";
import { ConsoleNavAside, ProfileCard } from "@/components";

import { useIdToken } from "@/hooks";
import { auth } from "@/firebase";
import { UnderConstrusction } from "@/components/UnderConstrusction";

interface Props {
  children: ReactNode;
}

export const ConsoleLayout: FC<Props> = ({ children }) => {
  const token = useIdToken();

  const fetcha = async () => {
    const test = await fetch("http://localhost:3000/user", {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((data) => {
        return data.json();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(test);
  };

  if (token.token) {
    console.log(token, "tkoen");
    fetcha();
  }
  console.log(token);

  return (
    <Container>
      <UnderConstrusction />
      <ProfileCard />
      <ConsoleNavAside />
      {children}
    </Container>
  );
};

export default ConsoleLayout;
