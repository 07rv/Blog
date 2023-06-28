import { useState, useContext } from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Modal,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { DataContext } from "@/context/DataProvider";

const Signin = ({ setToggle }) => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });
  const [errorField, setErrorField] = useState({
    email: "",
    password: "",
  });
  const { setAccount } = useContext(DataContext);
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

  const submitButton = async () => {
    if (!checkAndSetValidation()) {
      const res = await fetch("/api/login", {
        body: JSON.stringify({
          email: inputField.email,
          password: inputField.password,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem("accessToken", `Bearer ${data.accessToken}`);
        sessionStorage.setItem("refreshToken", `Bearer ${data.refreshToken}`);

        setAccount({
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          fullName: data.user.fullName,
          email: data.user.email,
        });
      }
    }
  };

  const checkAndSetValidation = () => {
    var hasError = false;
    Object.keys(inputField).map((field) => {
      if (field === "email") {
        if (inputField[field] === "") {
          setErrorMessage(field, "Please enter email");
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
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={errorField && errorField.email != ""}
            helperText={errorField && errorField.email ? errorField.email : ""}
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={errorField && errorField.password != ""}
            helperText={
              errorField && errorField.email ? errorField.password : ""
            }
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={submitButton}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link
                sx={{ cursor: "pointer" }}
                onClick={() => setToggle("SignUp")}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signin;
