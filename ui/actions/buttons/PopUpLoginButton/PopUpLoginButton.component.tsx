"use client";
import { Container, StyledImage } from "./PopUpLoginButton.style";
import React, { FC, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "@/firebase";
import { useRouter } from "next/navigation";
import { ButtonWithRings } from "..";
import { Spinner } from "@/ui";

interface Props {
  setToogle: React.Dispatch<React.SetStateAction<boolean>>;
  toogle: boolean;
}

export const PopUpLoginButton: FC<Props> = ({ setToogle, toogle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<null | string>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user?.email ? user.email : null);
    });
    return () => unsubscribe();
  }, []);
  if (isLoading) return <Spinner />;
  return (
    <>
      {!user ? (
        <Container onClick={() => setToogle(!toogle)}>
          <StyledImage
            alt='Google logo'
            width={15}
            height={15}
            src={"/svg/google.png"}
          />
          {isLoading ? "LOADING..." : "LOGIN"}
        </Container>
      ) : (
        <>
          {" "}
          <ButtonWithRings
            href='/overview'
            svgSrc='/svg/console.svg'
          ></ButtonWithRings>
        </>
      )}
    </>
  );
};
