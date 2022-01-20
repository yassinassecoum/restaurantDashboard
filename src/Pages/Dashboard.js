import * as React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { useUserAuth } from "./../context/UserAuthContext";
import dashboardIcon1 from "../assets/dashIcon1.svg";
import dashboardIcon2 from "../assets/dashIcon2.svg";
import dashboardIcon3 from "../assets/dashIcon3.svg";
import dashboardIcon4 from "../assets/dashIcon4.svg";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BarChartOrders from "../Components/BarChartOrders";
import DoughnutChart from "../Components/DoughnutChart";

export default function Dashboard() {
  const { user } = useUserAuth();
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <h4 className="dashboardTitle">Welcome back {user.email} ! </h4>
      <Main>
        <StyledBox>
          <div className="wrapSubTitle">
            <img src={dashboardIcon1} alt="icon" />
            <span>Total Delivery</span>
          </div>
          <span className="stat">31,250</span>
          <div className="wrapStats">
            <QueryStatsIcon className="statIcon" />
            <span className="green"> 1.9% </span>
            <span className="grey">Up from Yesterday</span>
          </div>
        </StyledBox>
        <StyledBox>
          <div className="wrapSubTitle">
            <img src={dashboardIcon2} alt="icon" />
            <span>Total Orders</span>
          </div>
          <span className="stat">54,895</span>
          <div className="wrapStats">
            <QueryStatsIcon className="statIcon" />
            <span className="green"> 2.3% </span>
            <span className="grey">Up from past week</span>
          </div>
        </StyledBox>
        <StyledBox>
          <div className="wrapSubTitle">
            <img src={dashboardIcon3} alt="icon" />
            <span>Total Sales</span>
          </div>
          <span className="stat">44,444$</span>
          <div className="wrapStats">
            <QueryStatsIcon className="statIcon" />
            <span className="green"> 2.9% </span>
            <span className="grey">Up from Yesterday</span>
          </div>
        </StyledBox>
        <StyledBox>
          <div className="wrapSubTitle">
            <img src={dashboardIcon4} alt="icon" />
            <span>Total Expenses</span>
          </div>
          <span className="stat">3,452$</span>
          <div className="wrapStats">
            <QueryStatsIcon className="statIcon red" />
            <span className="red"> 1.9% </span>
            <span className="grey">Down from Yesterday</span>
          </div>
        </StyledBox>
        <GraphContainer>
          <h4>Last week orders</h4>
          <BarChartOrders className="chart" />
        </GraphContainer>
        {/* <GraphContainer>
          <h4>Today orders origin</h4>
          <DoughnutChart />
        </GraphContainer> */}
      </Main>
    </Box>
  );
}

const StyledBox = styled.div`
  background-color: white;
  min-height: 140px;
  margin: 10px 0px;
  padding: 10px;
  min-width: 22%;
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: space-around;
  color: var(--lavender-secondary);
  @media screen and (max-width: 1186px) {
    min-width: 48%;
  }
  .wrapSubTitle {
    display: flex;
    align-items: center;
    img {
      width: 38px;
    }
    span {
      margin-left: 10px;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.3px;
    }
  }
  .stat {
    font-weight: 600;
    font-size: 34px;
    text-align: center;
  }
  .wrapStats {
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: center;
    .statIcon {
      color: green;
    }
    .green {
      color: green;
      font-weight: 600;
      margin: 0px 5px;
    }
    .red {
      color: red;
      font-weight: 600;
      margin: 0px 5px;
    }
  }
`;

const GraphContainer = styled.div`
  background-color: white;
  margin: 20px 0px;
  padding: 0px;
  color: var(--lavender-secondary);
  position: relative;
  padding: 10px;
  flex-grow: 0;
  max-width: 99.9%;
  flex-basis: 99.9%;
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  h4 {
    font-weight: 600;
    font-size: 18px;
    text-align: center;
  }
  canvas {
    padding: 10px;
  }
`;

const Main = styled.main`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
