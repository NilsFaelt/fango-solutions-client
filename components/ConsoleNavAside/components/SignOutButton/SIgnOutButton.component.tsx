"use client";
import React, { useContext } from "react";
import { Button, Container, SvgImage } from "./SIgnOutButton.style";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";

export const SignoutButton = () => {
  const { setIdToken } = useContext(LoggedinUserContext);
  const router = useRouter();
  const handleLogout = () => {
    try {
      signOut(auth).then(() => {
        setIdToken(null);
        router.push("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SvgImage
        alt='loggou svg'
        width={20}
        height={20}
        src={"/svg/loggout.svg"}
      />
      <Button onClick={handleLogout}>SIGN OUT</Button>
    </Container>
  );
};
