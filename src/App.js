import styled from "styled-components";
import CardSection from "./Components/CardSection";
import Header from "./Components/Header";
import DataSection from "./Components/DataSection";
import PricingSection from "./Components/PricingSection";
import FAQSection from "./Components/FAQSection";
import { OuterLayout } from "./styles/Layouts";
import HeaderLandingContent from "./Components/HeaderLandingContent";

function App() {
  return (
    <Main>
      <Header toRender={<HeaderLandingContent />} />
      <OuterLayout>
        <Main>
          <CardSection />
          <DataSection />
          <PricingSection />
          <FAQSection />
        </Main>
      </OuterLayout>
    </Main>
  );
}

const Main = styled.main``;

export default App;
