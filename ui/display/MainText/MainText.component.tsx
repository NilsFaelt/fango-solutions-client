import React, { FC } from "react";
import { Text } from "./MainText.style";

interface Props {
  children: string;
  fontSize?: "8" | "12" | "16" | "24";
  color?: "black" | "white";
  margin?: string;
}

export const MainText: FC<Props> = ({
  children,
  fontSize = "12",
  color = "white",
  margin = "1",
}) => {
  return (
    <Text fontSize={fontSize} color={color} $margin={margin}>
      {children}
    </Text>
  );
};
