import React from "react";
import styled from "styled-components";
import Secondarybutton from "./SecondaryButton";
import dashboard from "../assets/dashboard.svg";
import arrow from "../assets/arrow.svg";

function HeaderLandingContent() {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <h1>Manage your restaurant easily</h1>
          <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            molestiae minus dicta ipsum atque est qui vel illo magni voluptates
            esse, e x commodi corporis quos odio libero temporibus, eveniet
            nisi.
          </p>
          <Secondarybutton name={"Register Now"} logo={arrow} />
        </div>
      </div>
      <div className="right-content">
        <img src={dashboard} alt="" className="dashboard" />
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
    padding-right: 3rem;
    @media screen and (max-width: 845px) {
      padding-right: 0rem;
    }
    .white {
      color: white;
    }
    h1 {
      font-size: 3rem;
      font-weight: 600;
    }

    .white {
      padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    .dashboard {
      width: 100%;
    }
  }
`;

export default HeaderLandingContent;
