import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import dashboardCard from "../assets/dashboardCard.svg";

function CardSection() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">
              Your whole restaurant flow in one place
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              reprehenderit doloremque quia? Odit illo, tempore quod vero
              exercitationem, voluptatum laudantium quo harum, adipisci tenetur
              eum.
            </p>
          </div>
          <div className="card-right">
            <img src={dashboardCard} alt="" />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}

const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 845px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .card-right {
      display: flex;
      justify-content: flex-end;
      img {
        filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));
        max-width: 500px;
        @media screen and (max-width: 1186px) {
          max-width: 450px;
        }
        @media screen and (max-width: 845px) {
          max-width: 100%;
        }
      }
    }

    .card-left {
      p {
        padding: 1rem 0;
      }
    }
  }
`;

export default CardSection;
