import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { compose } from "redux";

import CampaignHeader from "./CampaignHeader";
import HorizontalList from "./HorizontalList";

const CampaignCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestDiv = styled.div`
  flex: 0 0 auto;
  height: 10em;
  width: 5em;
  margin: 1em;
  background-color: red;
`;

export function CampaignCard({ campaign, id }) {
  useEffect(() => {
    console.log(campaign);
  }, [campaign]);

  const campaignHeaderProps = {
    campaignName: campaign.campaign_name,
    campaignIconUrl: campaign.campaign_icon_url,
    payPerInstall: campaign.pay_per_install
  };

  return (
    <CampaignCardWrapper>
      <CampaignHeader {...campaignHeaderProps} />
      <HorizontalList>
        <TestDiv />
        <TestDiv />
        <TestDiv />
        <TestDiv />
        <TestDiv />
        <TestDiv />
      </HorizontalList>
    </CampaignCardWrapper>
  );
}

CampaignCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  campaign: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

function mapStateToProps(state, ownProps) {
  const { campaigns } = state.global.feedData;
  const { id } = ownProps;
  const campaign = campaigns && campaigns[id] ? campaigns[id] : {};
  return {
    campaign
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(CampaignCard);
