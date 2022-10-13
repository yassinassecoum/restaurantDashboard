import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ChartStats from "./ChartStats";
import chart from "../assets/chart.svg";
import AnimatedButton from "./AnimatedButton";

function DataSection() {
  return (
    <DataStyled>
      <InnerLayout>
        <div className="data-container">
          <div className="data-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats name={"Today Orders"} amount={"488"} />
                <ChartStats name={"Today Balance"} amount={"5,245€"} />
              </div>
              <img src={chart} alt="" />
            </div>
          </div>
          <div className="data-right">
            <h2 className="secondary-heading">
              Insightful analytics about your company
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              officia nemo distinctio dolores necessitatibus odit magni corrupti
              error, voluptate alias adipisci ducimus nostrum maiores. Ad? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Rem officia
              nemo distinctio dolores necessitatibus odit magni corrupti error.
            </p>

            <AnimatedButton name={"Learn More"} />
          </div>
        </div>
      </InnerLayout>
    </DataStyled>
  );
}

const DataStyled = styled.section`
  .data-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .data-left {
      width: 80%;
      @media screen and (max-width: 1347px) {
        width: 100%;
      }
      .stats {
        img {
          box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
          border-radius: 62px;
          width: 100%;
        }
        .stats-money {
          display: flex;
          padding-bottom: 1.3rem;
          justify-content: space-between;
          @media screen and (max-width: 532px) {
            flex-direction: column;
          }
        }
      }
    }

    .data-right {
      padding-left: 2rem;
      @media screen and (max-width: 1347px) {
        margin-top: 2rem;
      }
      p {
        padding: 1.3rem 0;
      }
    }
  }
`;

export default DataSection;
