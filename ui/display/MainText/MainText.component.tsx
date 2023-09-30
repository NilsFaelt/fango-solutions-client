import React, { FC } from "react";
import { Text } from "./MainText.style";

interface Props {
  children: string;
  fontSize?: "12" | "16" | "24";
  color?: "black" | "white";
}

export const MainText: FC<Props> = ({
  children,
  fontSize = "12",
  color = "white",
}) => {
  return (
    <Text fontSize={fontSize} color={color}>
      {children}
    </Text>
  );
};
