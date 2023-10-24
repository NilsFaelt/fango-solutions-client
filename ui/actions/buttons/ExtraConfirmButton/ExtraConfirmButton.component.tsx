import React, { FC, useState } from "react";
import {
  Container,
  DeleteContainer,
  DeleteConfirmButton,
  SvgImage,
  SpinnerWrapper,
} from "./ExtraConfirmButton.style";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { Spinner } from "@/ui";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
}

export const ExtraConfirmButton: FC<Props> = ({ onClick, text = "click" }) => {
  const [toogleDeleteContainer, setToogleDeleteContainer] = useState(false);

  const openDeleteContainerOnClick = () => {
    setToogleDeleteContainer(!toogleDeleteContainer);
  };

  return (
    <Container onClick={() => openDeleteContainerOnClick()}>
      <MainText margin='0'>{text}</MainText>
      {toogleDeleteContainer && (
        <DeleteContainer>
          <DeleteConfirmButton onClick={onClick}>
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
