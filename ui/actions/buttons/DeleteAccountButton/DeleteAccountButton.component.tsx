import React, { FC, useState } from "react";
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

export const DeleteAccountButton: FC = () => {
  const [toogleDeleteContainer, setToogleDeleteContainer] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;
  const handelDeleteOnClick = () => {
    setLoading(true);
    user
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
      {!loading && <MainText margin='0'>DELETE ACCOUNT</MainText>}
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
