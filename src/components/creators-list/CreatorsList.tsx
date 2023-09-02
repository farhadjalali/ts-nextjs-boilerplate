import { FC } from "react";
import { Component, CreatorRow } from "./style";
import { Creator } from "@/services";

type Props = {
  creators: Creator[];
};

export const CreatorsList: FC<Props> = ({ creators }) => {
  return (
    <Component data-test="creators-list">
      {creators.map((creator) => (
        <CreatorRow key={creator.email}>{creator.email}</CreatorRow>
      ))}
    </Component>
  );
};
