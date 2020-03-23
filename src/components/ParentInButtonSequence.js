import React from "react";
import { ChildInButtonSequence } from "./ChildInButtonSequence";

export const ParentInButtonSequence = props => (
  <ChildInButtonSequence setTheme={props.setTheme} />
);
