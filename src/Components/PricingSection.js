import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import PricingCard from "./PricingCard";
import check from "../assets/check.svg";
import checkDisabled from "../assets/check-disabled.svg";

function PricingSection() {
  return (
    <PricingSectionStyled>
      <InnerLayout>
        <h3 className="small-heading">
          An exceptional service,{" "}
          <span className="pink">at the right price</span>
        </h3>
        <p className="c-para">
          Start with our free plan and switch to premium as you grow.{" "}
        </p>
        <div className="pricing-container">
          <PricingCard
            account={"Basic"}
            amount={"25€"}
            text={"Manage your business with a simple and efficient account."}
            button={"Get Started"}
            check={check}
            checkDis={checkDisabled}
            text1={"Up to 3 accounts"}
            text2={"Live driver tracking"}
            text3={"Dispatch orders"}
            text4={"Driver delivery app"}
            text5={"Kitchen ticketing"}
            text6={"Priority 24/7 support"}
          />

          <PricingCard
            account={"Premium"}
            amount={"75€"}
            text={"Manage your business with a simple and efficient account."}
            button={"Get Started"}
            check={check}
            checkDis={checkDisabled}
            text1={"Unlimited accounts"}
            text2={"Live driver tracking"}
            text3={"Dispatch orders"}
            text4={"Driver delivery app"}
            text5={"Kitchen ticketing"}
            text6={"Priority 24/7 support"}
          />
        </div>
      </InnerLayout>
    </PricingSectionStyled>
  );
}

const PricingSectionStyled = styled.section`
  .pricing-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    padding-top: 7.4rem;
    @media screen and (max-width: 689px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .c-para {
    text-align: center;
  }
`;
export default PricingSection;
