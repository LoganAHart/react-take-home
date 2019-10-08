import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectCampaigns
} from "containers/App/selectors";
import { loadCampaigns } from "containers/App/actions";
import ButtonNav from "components/ButtonNav";
import buttonNavStyles from "components/ButtonNav/buttonNavStyles";
import NavBtnWrapper from "components/ButtonNav/NavBtnWrapper";

const ErrorPageWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 3.2em;
`;

const LinkNavButton = styled(Link)`
  ${buttonNavStyles}
`;

export function ErrorPage({
  loading,
  error,
  campaigns,
  onRequestReloadCampaigns
}) {
  const handleReloadClick = () => {
    // should refactor to handle different errors based on the error passed to ErrorPage
    onRequestReloadCampaigns();
  };

  return (
    <ErrorPageWrapper>
      {campaigns ? (
        <ButtonNav handleRoute={() => handleReloadClick()}>
          Reload Offers
        </ButtonNav>
      ) : loading ? null : (
        <NavBtnWrapper>
          <LinkNavButton to="/">Reload Offers</LinkNavButton>
        </NavBtnWrapper>
      )}
    </ErrorPageWrapper>
  );
}

ErrorPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  campaigns: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  onRequestReloadCampaigns: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  campaigns: makeSelectCampaigns()
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
