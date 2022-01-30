import React from "react";

import { TextareaContainer, Label, StyledTextarea } from "./Styles";

const Textarea = ({ handleChange, label, ...otherProps }) => {
  return (
    <TextareaContainer>
      {label && <Label>{label}</Label>}

      <StyledTextarea onChange={handleChange} {...otherProps} />
    </TextareaContainer>
  );
};

export default Textarea;
