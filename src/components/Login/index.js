import React from "react";
import { TextInput } from "../Input";
import {
  Container,
  Form,
  FormContainer,
  Header,
  SubmitButton,
  ToggleAuthText,
} from "./LoginElements";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = { username, password };

    dispatch(login(data, navigate));
  };

  return (
    <Container>
      <FormContainer>
        <Header>Login</Header>
        <Form onSubmit={handleSubmit}>
          <TextInput type="text" name="username" label="Username" />
          <TextInput type="password" name="password" label="Password" />
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
      </FormContainer>
      <ToggleAuthText>
        Don't have an account? <Link to="/register">Register here</Link>
      </ToggleAuthText>
    </Container>
  );
};

export default LoginPage;
