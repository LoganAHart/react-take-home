import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import CampaignHeader from "./CampaignHeader";

export function CampaignCard({ campaign, id }) {
  useEffect(() => {
    console.log(campaign);
  }, [campaign]);

  const campaignHeaderProps = {
    campaignName: campaign.campaign_name,
    campaignIconUrl: campaign.campaign_icon_url,
    payPerInstall: campaign.pay_per_install
  };

  return <CampaignHeader {...campaignHeaderProps} />;
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
