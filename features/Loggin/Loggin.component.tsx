import React, { useContext, useRef, useState } from "react";
import { Container, StyledLink } from "./Loggin.style";
import { MainTitle, PrimaryButton } from "@/ui";
import { PrimaryInput } from "@/styles";
import { MenuContext } from "@/context";
import { useClickOustsideToClose } from "@/hooks";

export const Loggin = () => {
  const logginRef = useRef<HTMLInputElement>(null!);

  const { toogleLoggin, setToogleLoggin } = useContext(MenuContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleUsernameChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleClick = async () => {
    console.log(credentials, " in handle click");
  };
  useClickOustsideToClose(logginRef, setToogleLoggin);
  if (!toogleLoggin) return null;

  return (
    <Container ref={logginRef}>
      <MainTitle text='LOGGIN' underText='To console' />
      <PrimaryInput
        placeholder='email'
        type='text'
        name='email'
        value={credentials.email}
        onChange={handleUsernameChange}
      />
      <PrimaryInput
        placeholder='Password'
        type='password'
        name='password'
        value={credentials.password}
        onChange={handleUsernameChange}
      />
      <PrimaryButton onClick={handleClick} text='LOGGIN' />
      <StyledLink onClick={() => setToogleLoggin(false)} href={"/contact"}>
        Create Account?
      </StyledLink>
    </Container>
  );
};
