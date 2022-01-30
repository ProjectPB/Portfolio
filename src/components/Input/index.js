import React from "react";

import { InputContainer, Label, StyledInput } from "./Styles";

const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}

      <StyledInput onChange={handleChange} {...otherProps} />
    </InputContainer>
  );
};

export default Input;
