import React from "react";
import styled from "styled-components";

function PricingCard({
  account,
  amount,
  text,
  button,
  check,
  checkDis,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
}) {
  return (
    <PricingCardStyled>
      <h4 className="pricingCard-title">{account}</h4>
      <h4 className="pricingCard-title">
        {amount} <span className="pink">/ m</span>
      </h4>
      <p className="c-para">{text}</p>
      <div className="button-con">
        <button>{button}</button>
      </div>
      <div className="list-con">
        <p className="text-check">
          <img src={check} alt="" />
          {text1}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text2}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text3}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text4}
        </p>
        <p className="text-check">
          <img src={checkDis} alt="" />
          {text5}
        </p>
        <p className="text-check">
          <img src={checkDis} alt="" />
          {text6}
        </p>
      </div>
    </PricingCardStyled>
  );
}

const PricingCardStyled = styled.div`
  background-color: white;
  padding: 3rem 4rem;
  border-radius: 50px;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
  .pricingCard-title {
    font-size: 2.5rem;
    color: var(--purple-primary);
    text-align: center;
    padding: 1.5rem 0;
    span {
      font-size: 1.5rem;
    }
  }

  .button-con {
    text-align: center;
    padding: 1.5rem 0;
    button {
      border: 2px solid #16194f;
      padding: 0.8rem 1.8rem;
      outline: none;
      cursor: pointer;
      background: transparent;
      border-radius: 20px;
      font-size: inherit;
      color: #16194f;
    }
  }

  .plan-con {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    img {
      padding: 0 0.3rem;
    }
  }

  .text-check {
    display: flex;
    align-items: center;
    padding: 0.4rem 0;
    img {
      padding-right: 0.3rem;
      width: 24px;
    }

    &:nth-child(5) {
      color: #b7b7b7;
    }
    &:nth-child(6) {
      color: #b7b7b7;
    }
  }
`;
export default PricingCard;
