import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import styled from "styled-components/macro";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import {
  makeSelectCampaigns,
  makeSelectLoading,
  makeSelectError
} from "containers/App/selectors";
import CampaignCard from "containers/CampaignCard/Loadable";
import { loadCampaigns } from "containers/App/actions";
import makeSelectOfferFeed from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

const key = "offerFeed";

const OfferFeedWrapper = styled.div`
  padding-top: 3.2em;
`;

export function OfferFeed({
  loading,
  error,
  campaigns,
  onRequestLoadCampaigns
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onRequestLoadCampaigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OfferFeedWrapper>
      <Helmet>
        <title>OfferFeed</title>
        <meta name="description" content="Description of OfferFeed" />
      </Helmet>
      {campaigns &&
        Object.keys(campaigns).map(key => {
          return <CampaignCard id={key} key={key} />;
        })}
    </OfferFeedWrapper>
  );
}

OfferFeed.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  campaigns: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onRequestLoadCampaigns: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  offerFeed: makeSelectOfferFeed(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  campaigns: makeSelectCampaigns()
});

function mapDispatchToProps(dispatch) {
  return {
    onRequestLoadCampaigns() {
      dispatch(loadCampaigns());
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(OfferFeed);
