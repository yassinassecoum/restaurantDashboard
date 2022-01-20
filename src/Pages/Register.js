import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import HeaderRegisterContent from "../Components/HeaderRegisterContent";

function Register() {
  return (
    <Main>
      <Header toRender={<HeaderRegisterContent />} />
    </Main>
  );
}

const Main = styled.main``;

export default Register;
