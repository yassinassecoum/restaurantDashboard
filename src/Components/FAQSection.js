import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import questions from "../questions";
import Question from "./Question";
function FAQSection() {
  return (
    <FaqStyled>
      <InnerLayout>
        <h3 className="small-heading">
          Frequently <span className="pink">asked questions</span>
        </h3>
        <p className="c-para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          maxime ipsa nam expedita dolorem distinctio illo ad doloribus atque
          fuga, Nihil laboriosam beatae fugit.
        </p>
        <div className="questions-con">
          {questions.map((q) => {
            return <Question key={q.id} {...q} />;
          })}
        </div>
      </InnerLayout>
    </FaqStyled>
  );
}

const FaqStyled = styled.section`
  .c-para {
    width: 60%;
    margin: 10px auto;
    @media screen and (max-width: 640px) {
      width: 85%;
    }
  }
  .questions-con {
    padding-top: 4rem;
  }
`;

export default FAQSection;
