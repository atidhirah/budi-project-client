import React from "react";
import { TextInput } from "../Input";
import {
  Container,
  Form,
  FormContainer,
  Header,
  SubmitButton,
  ToggleAuthText,
} from "../Login/LoginElements";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actions/auth";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const data = { fullname, username, password, confirmPassword };
    dispatch(register(data, navigate));
  };

  return (
    <Container>
      <FormContainer>
        <Header>Register</Header>
        <Form onSubmit={handleSubmit}>
          <TextInput type="text" name="fullname" label="Full Name" />
          <TextInput type="text" name="username" label="Username" />
          <TextInput type="password" name="password" label="Password" />
          <TextInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
          />
          <SubmitButton type="submit">Register</SubmitButton>
        </Form>
      </FormContainer>
      <ToggleAuthText>
        Already have an account? <Link to="/login">Login here</Link>
      </ToggleAuthText>
    </Container>
  );
};

export default RegisterPage;
