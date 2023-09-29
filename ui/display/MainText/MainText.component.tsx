import React, { FC } from "react";
import { Text } from "./MainText.style";

interface Props {
  children: string;
  fontsize?: "12" | "16" | "24";
  color?: "black" | "white";
}

export const MainText: FC<Props> = ({
  children,
  fontsize = "12",
  color = "white",
}) => {
  return (
    <Text fontsize={fontsize} color={color}>
      {children}
    </Text>
  );
};
