"use client";
import { Container, StyledImage } from "./LogginButton.style";
import React, { FC, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "@/firebase";
import { useRouter } from "next/navigation";
import { ButtonWithRings } from "..";
import { Spinner } from "@/ui";

export const LogginButton: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<null | string>(null);

  const handleLogin = () => {
    setIsLoading(true);
    try {
      signInWithPopup(auth, googleProvider)
        .then(({ user }) => {})
        .then(() => {
          router.push(`/bookmarks`);
        })
        .catch((error) => {
          console.log("Error:");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      setIsLoading(false);
    }
  };
  const handleLoginCredentials = () => {
    setIsLoading(true);
    try {
      signInWithEmailAndPassword(auth, "nilss@gmail.com", "ernesto")
        .then(({ user }) => {})
        .then(() => {
          router.push(`/bookmarks`);
        })
        .catch((error) => {
          console.log("Error:");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    try {
      signOut(auth).then(() => {
        router.push("/");
      });
    } catch (err) {}
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user?.email ? user.email : null);
    });
    return () => unsubscribe();
  }, []);
  if (isLoading) return <Spinner />;
  return (
    <>
      <Container onClick={handleLogin}>
        <StyledImage
          alt='Google logo'
          width={15}
          height={15}
          src={"/svg/google.png"}
        />
        {isLoading ? "LOADING..." : "LOGIN"}
      </Container>
    </>
  );
};
