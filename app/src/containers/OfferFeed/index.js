import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import styled from "styled-components/macro";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectOfferFeed from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

const key = "offerFeed";

const OfferFeedWrapper = styled.div`
  padding-top: 3.2em;
`;

export function OfferFeed() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <OfferFeedWrapper>
      <Helmet>
        <title>OfferFeed</title>
        <meta name="description" content="Description of OfferFeed" />
      </Helmet>
      <div>Test Render: OfferFeed</div>
    </OfferFeedWrapper>
  );
}

OfferFeed.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  offerFeed: makeSelectOfferFeed()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(OfferFeed);
