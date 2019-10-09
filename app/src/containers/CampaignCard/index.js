import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

export function CampaignCard(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return <div>Test Render: CampaignCard</div>;
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
