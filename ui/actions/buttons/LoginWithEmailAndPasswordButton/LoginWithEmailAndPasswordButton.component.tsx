import React, { FC, useEffect, useState } from "react";
import {
  Container,
  StyledImage,
} from "./LoginWithEmailAndPasswordButton.style";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { Spinner } from "@/ui";

export const LoginWithEmailAndPasswordButton: FC<{
  email: string | null;
  password: string | null;
  toogleCreate: boolean;
}> = ({ email, password, toogleCreate = false }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const createUser = toogleCreate ? "CREATE" : "LOGIN";
  console.log(email, password);
  const handleLoginWithCredentials = () => {
    if (email && password) {
      setIsLoading(true);
      try {
        signInWithEmailAndPassword(auth, email, password)
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
    }
  };
  const handleCreateUserWithCredentials = () => {
    if (email && password) {
      setIsLoading(true);
      try {
        createUserWithEmailAndPassword(auth, email, password)
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
    }
  };
  if (isLoading) return <Spinner />;
  return (
    <Container
      onClick={(e) => {
        toogleCreate
          ? handleCreateUserWithCredentials()
          : handleLoginWithCredentials(),
          e.preventDefault();
      }}
    >
      {isLoading ? "LOADING..." : createUser}
    </Container>
  );
};
