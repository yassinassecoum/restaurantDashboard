import styled from "styled-components";

export const OuterLayout = styled.section`
  padding: 5rem 14rem;
  @media screen and (max-width: 1347px) {
    padding: 5rem 12rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }
  @media screen and (max-width: 640px) {
    padding: 3rem;
  }
  @media screen and (max-width: 480px) {
    padding: 3rem 1.5rem;
  }
`;
export const InnerLayout = styled.section`
  padding: 8rem 0;
`;
