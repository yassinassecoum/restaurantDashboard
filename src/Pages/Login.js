import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import HeaderLoginContent from "../Components/HeaderLoginContent";

function Login() {
  return (
    <Main>
      <Header toRender={<HeaderLoginContent />} />
    </Main>
  );
}

const Main = styled.main``;

export default Login;
