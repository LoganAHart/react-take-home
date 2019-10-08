import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import styled from "styled-components/macro";

import { makeSelectLoading, makeSelectError } from "containers/App/selectors";
import { loadCampaigns } from "containers/App/actions";
import ButtonNav from "components/ButtonNav";

const ErrorPageWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 3.2em;
`;

export function ErrorPage({ loading, error, onRequestReloadCampaigns }) {
  const handleReloadClick = () => {
    onRequestReloadCampaigns();
  };

  return (
    <ErrorPageWrapper>
      <ButtonNav handleRoute={() => handleReloadClick()}>
        Reload Offers
      </ButtonNav>
    </ErrorPageWrapper>
  );
}

ErrorPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onRequestReloadCampaigns: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError()
});

function mapDispatchToProps(dispatch) {
  return {
    onRequestReloadCampaigns() {
      dispatch(loadCampaigns());
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(ErrorPage);
