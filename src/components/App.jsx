import React from "react";
import styled from "styled-components";
import OrderSummary from "./OrderSummary.jsx";
import GlobalStyles from "../GlobalStyles.js";

const App = () => {
  return (
    <>
      <Main>
        <OrderSummary />
      </Main>
      <GlobalStyles />
    </>
  );
};

const Main = styled.main`
  min-height: 100%;
  min-width: fit-content;

  background-color: var(--color-primary-pale);
  background-image: url("pattern-background-desktop.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
