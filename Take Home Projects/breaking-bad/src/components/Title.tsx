import { createBreakedName } from "../utils/utils";
import React from "react";

interface TitleProps {
  arr: string[];
  isFirst: boolean;
}

export default function Title({ arr, isFirst }: TitleProps): JSX.Element {
  const titleLevel = isFirst ? 1 : 2;
  const defaultText = isFirst ? "Enter your name" : "Enter your last name";

  return React.createElement(
    `h${titleLevel}`,
    null,
    arr.length === 0 ? <span>{defaultText}</span> : createBreakedName(arr)
  );
}
