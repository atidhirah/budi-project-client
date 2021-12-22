import React from "react";
import styled from "styled-components";

export const TextInput = ({ type, name, label, handleChange }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
        required
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: var(--clr-input);
  border-radius: 4px;
  font-size: 1.1rem;
  padding: 8px;
`;
