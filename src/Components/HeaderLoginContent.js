import React, { useEffect } from "react";
import styled from "styled-components";
import Secondarybutton from "./SecondaryButton";
import login from "../assets/login.svg";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import arrow from "../assets/arrow.svg";
import googleIcon from "../assets/googleIcon.svg";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function HeaderLoginContent() {
  const { register, handleSubmit } = useForm();
  const { signIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    //TO DO FORM VALIDATIONS WITH SNACKBAR
    try {
      await signIn(data.email, data.password);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  const handleGoogleSignIn = async (e) => {
    console.log("HELLO");
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <h1>Sign In</h1>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <CustomTextField
              variant="outlined"
              label="Email"
              className="emailField"
              fullWidth
              autoComplete="email"
              autoFocus
              sx={{
                marginTop: "2rem",
              }}
              {...register("email", { required: "Required" })}
            />
            <CustomTextField
              variant="outlined"
              label="Password"
              type="password"
              className="passwordField"
              fullWidth
              autoComplete="password"
              sx={{
                marginTop: "2rem",
                color: "white",
              }}
              {...register("password", { required: "Required" })}
            />
            <div className="wrapBtn">
              <Secondarybutton
                className={"signInBtn"}
                name={"Sign In"}
                logo={arrow}
              />
              <Secondarybutton
                className={"signInBtn"}
                name={"Sign In With Google"}
                logo={googleIcon}
                click={handleGoogleSignIn}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="right-content">
        <img src={login} alt="" className="login" />
      </div>
    </HeaderContentStyled>
  );
}

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 8rem;
  @media screen and (max-width: 845px) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 4rem;
  }
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 1rem;
    @media screen and (max-width: 845px) {
      padding-right: 0rem;
    }
    .left-text-container {
      width: 100%;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }
    .form {
      .emailField {
        color: white;
        font-size: 24px;
      }
      .signInBtn {
        margin-top: 2rem;
      }
    }
    .wrapBtn {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    .login {
      width: 100%;
    }
  }
`;

const CustomTextField = styled(TextField)({
  "& label": {
    color: "white",
    fontSize: "18px",
  },
  "& label.Mui-focused": {
    color: "white",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

export default HeaderLoginContent;
