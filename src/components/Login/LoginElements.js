import styled from "styled-components";
import { Button, Card } from "../GlobalElements";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled(Card)`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const Header = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`;

export const Form = styled.form``;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

export const ToggleAuthText = styled.p`
  font-size: 0.85rem;
  margin: 1rem 0;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
