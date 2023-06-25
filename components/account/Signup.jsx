import { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Signup = ({ setToggle }) => {
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorField, setErrorField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputHandler = (name, value) => {
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrorField((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const setErrorMessage = (field, errorMessage) => {
    setErrorField((prevState) => ({
      ...prevState,
      [field]: errorMessage,
    }));
  };

  const submitButton = () => {
    if (!checkAndSetValidation()) {
      console.log(123456);
    }
  };

  const checkAndSetValidation = () => {
    var hasError = false;
    Object.keys(inputField).map((field) => {
      if (field === "firstName") {
        if (inputField[field] === "") {
          setErrorMessage(field, "Please enter First Name");
          hasError = true;
        }
      } else if (field === "lastName") {
        if (inputField[field] === "") {
          setErrorMessage(field, "Please enter last Name");
          hasError = true;
        }
      } else if (field === "email") {
        if (inputField[field] === "") {
          setErrorMessage(field, "Please enter Email");
          hasError = true;
        }
      } else if (field === "password") {
        if (inputField[field] === "") {
          setErrorMessage(field, "Please enter password");
          hasError = true;
        }
      }
    });
    return hasError;
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, p: 1, bgcolor: "#750000" }}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={errorField && errorField.firstName}
                helperText={
                  errorField && errorField.firstName ? errorField.firstName : ""
                }
                onChange={(e) => inputHandler(e.target.name, e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                error={errorField && errorField.lastName}
                helperText={
                  errorField && errorField.lastName ? errorField.lastName : ""
                }
                onChange={(e) => inputHandler(e.target.name, e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errorField && errorField.email}
                helperText={
                  errorField && errorField.email ? errorField.email : ""
                }
                onChange={(e) => inputHandler(e.target.name, e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={errorField && errorField.password}
                helperText={
                  errorField && errorField.password ? errorField.password : ""
                }
                onChange={(e) => inputHandler(e.target.name, e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={submitButton}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                sx={{ cursor: "pointer" }}
                onClick={() => setToggle("SignIn")}
              >
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
