import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import logo from "../assets/logo.svg";
import { useNavigate, NavLink } from "react-router-dom";
function Navigation() {
  const navigate = useNavigate();
  return (
    <NavigationStyled>
      <div className="logo">
        <img src={logo} alt="" onClick={() => navigate("/")} />
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Features</NavLink>
        </li>
        <li>
          <NavLink to="/login">Pricing</NavLink>
        </li>
      </ul>
      <NavLink to="/login">
        <PrimaryButton name={"Sign In"} />
      </NavLink>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;
  .logo {
    cursor: pointer;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`;
export default Navigation;
