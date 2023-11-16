import React, { FC, useState } from "react";
import {
  Container,
  OuterContainer,
} from "./LoginWithEmailAndPasswordButton.style";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { Spinner } from "@/ui";
import { MainText } from "@/ui/display/MainText/MainText.component";

export const LoginWithEmailAndPasswordButton: FC<{
  email: string | null;
  password: string | null;
  toogleCreate: boolean;
}> = ({ email, password, toogleCreate = false }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const createUser = toogleCreate ? "CREATE" : "LOGIN";

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
  const handleCreateUserWithCredentials = async () => {
    const actionCodeSettings = {
      url: "https://fangosolutions.com/bookmarks",
      handleCodeInApp: true,
    };
    if (email && password) {
      setIsError(false);
      setIsLoading(true);

      await createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {})
        .then(() => {
          setEmailSent(true);
          // router.push(`/bookmarks`);
        })
        .catch((error) => {
          setIsError(true);
          console.log("Error:");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  if (isLoading) return <Spinner />;
  return (
    <OuterContainer>
      {isError && <MainText>Could not create user</MainText>}

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
    </OuterContainer>
  );
};
