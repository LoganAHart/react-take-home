import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components/macro";
import { Switch, Route } from "react-router-dom";

import OfferFeed from "containers/OfferFeed/Loadable";

import GlobalStyle from "global-styles";

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - JetFuel Take Home"
        defaultTitle="JetFuel Take Home"
      >
        <meta name="description" content="Logan Hart's Submission" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={OfferFeed} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
