import React, { FC, useEffect, useState } from "react";
import {
  Container,
  StyledImage,
} from "./LoginWithEmailAndPasswordButton.style";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { Spinner } from "@/ui";

export const LoginWithEmailAndPasswordButton: FC<{
  email: string | null;
  password: string | null;
  create: boolean;
}> = ({ email, password, create = false }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const createUser = create ? "CREATE" : "LOGIN";
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
            console.log("Error:", error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err) {
        console.log(err);
        console.log(err);
        setIsLoading(false);
      }
    }
  };
  const handleCreateUserWithCredentials = () => {
    if (email && password) {
      setIsLoading(true);
      try {
        signInWithEmailAndPassword(auth, email, password)
          .then(({ user }) => {})
          .then(() => {
            router.push(`/bookmarks`);
          })
          .catch((error) => {
            console.log("Error:", error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
  };
  if (isLoading) return <Spinner />;
  return (
    <Container
      onClick={(e) => {
        handleCreateUserWithCredentials(), e.preventDefault();
      }}
    >
      {isLoading ? "LOADING..." : createUser}
    </Container>
  );
};
