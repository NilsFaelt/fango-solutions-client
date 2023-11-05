import React, { FC, useContext, useState } from "react";
import {
  Container,
  DeleteContainer,
  DeleteConfirmButton,
  SvgImage,
  SpinnerWrapper,
} from "./DeleteAccountButton.style";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { Spinner } from "@/ui";
import { useMutateDeleteUser } from "@/hooks";
import { LoggedinUserContext } from "@/context/LoggedInUserContext";

export const DeleteAccountButton: FC = () => {
  const { idToken } = useContext(LoggedinUserContext);
  const [toogleDeleteContainer, setToogleDeleteContainer] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;
  const { mutateAsync } = useMutateDeleteUser(idToken);
  const handelDeleteOnClick = async () => {
    await mutateAsync();
    setLoading(true);
    await user
      ?.delete()
      .then((res) => {
        console.log("user deleted");
        router.push("/");
      })
      .catch((err) => {
        console.log("user could not be deleted");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const openDeleteContainerOnClick = () => {
    setToogleDeleteContainer(!toogleDeleteContainer);
  };

  return (
    <Container onClick={() => openDeleteContainerOnClick()}>
      {loading && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
      {!loading && <MainText margin='0'>REMOVE ACCOUNT</MainText>}
      {toogleDeleteContainer && !loading && (
        <DeleteContainer>
          <DeleteConfirmButton onClick={handelDeleteOnClick}>
            <SvgImage
              width={15}
              height={15}
              alt='cogwheel'
              src={"/svg/check.svg"}
            />
          </DeleteConfirmButton>
          <DeleteConfirmButton onClick={() => setToogleDeleteContainer(false)}>
            <SvgImage
              width={15}
              height={15}
              alt='cogwheel'
              src={"/svg/cross.svg"}
            />
          </DeleteConfirmButton>
        </DeleteContainer>
      )}
    </Container>
  );
};
