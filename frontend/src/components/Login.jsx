import React, { useState, useEffect } from "react";

import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;

  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [error, showError] = useState("");

  const navigate = useNavigate();

  const imageURL =
    "https://logos-world.net/wp-content/uploads/2021/02/Simple-Logo.png";

  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      login
    );
    const token = response.data.token;
    console.log(token);
    if (token) {
      sessionStorage.setItem("token", token);
      isUserAuthenticated(true);
      navigate("/");
    }
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog" />
        <Wrapper>
          <TextField
            variant="standard"
            value={login.username}
            onChange={(e) => onValueChange(e)}
            name="username"
            label="Enter Username"
          />
          <TextField
            variant="standard"
            value={login.password}
            onChange={(e) => onValueChange(e)}
            name="password"
            label="Enter Password"
          />

          {error && <Error>{error}</Error>}

          <LoginButton variant="contained" onClick={() => loginUser()}>
            Login
          </LoginButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <SignupButton style={{ marginBottom: 50 }}>
            Create an account
          </SignupButton>
        </Wrapper>
      </Box>
    </Component>
  );
};

export default Login;
