import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { compose } from "redux";

import CampaignHeader from "./CampaignHeader";
import HorizontalList from "./HorizontalList";
import MediaCard from "./LoadableMedia";

const CampaignCardWrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
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

  // Note: add margin right
  return (
    <CampaignCardWrapper>
      <CampaignHeader {...campaignHeaderProps} />
      <HorizontalList>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
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
