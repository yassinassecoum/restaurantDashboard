import React from "react";
import styled from "styled-components";
import bg from "../assets/bg.svg";
import Navigation from "./Navigation";

function Header({ toRender }) {
  return (
    <HeaderStyled>
      <div className="header-content">
        <Navigation />
        {toRender}
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  min-height: 100vh;
  width: 100%;
  /* background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%; */
  /* background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%); */
  background-color: #f44e77;
  background-image: linear-gradient(
    62deg,
    #f44e77 11%,
    #0b31b6 71%,
    #16194f 97%
  );

  .header-content {
    padding: 3rem 14rem;
    @media screen and (max-width: 1347px) {
      padding: 3rem 12rem;
    }
    @media screen and (max-width: 1186px) {
      padding: 3rem 8rem;
    }
    @media screen and (max-width: 990px) {
      padding: 3rem 4rem;
    }
    @media screen and (max-width: 640px) {
      padding: 3rem;
    }
    @media screen and (max-width: 480px) {
      padding: 3rem 1.5rem;
    }
  }
`;

export default Header;
