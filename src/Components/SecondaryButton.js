import React from "react";
import styled from "styled-components";

function Secondarybutton({ name, className, logo, click }) {
  return (
    <SecondaryButtonStyled onClick={click} className={className}>
      {name}
      <img src={logo} alt="" />
    </SecondaryButtonStyled>
  );
}

const SecondaryButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 1rem 1.5rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    padding-left: 0.9rem;
  }
`;

export default Secondarybutton;
