import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { compose } from "redux";
import uuidv1 from "uuid/v1";

import CampaignHeader from "./CampaignHeader";
import HorizontalList from "./HorizontalList";
import MediaCard from "./LoadableMedia";

const CampaignCardWrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
`;

const HorizontalListPadEnd = styled.div`
  flex: 0 0 auto;
  height: 14.6em;
  width: 1em;
  margin: 1em 0;
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
        {campaign.medias &&
          campaign.medias.map((media, idx) => {
            const mediaProps = {
              coverPhotoURL: media.cover_photo_url,
              downloadURL: media.download_url,
              mediaType: media.media_type,
              trackingLink: media.tracking_link,
              campaignName: campaign.campaign_name,
              campaignID: campaign.id
            };
            return <MediaCard key={uuidv1()} {...mediaProps} />;
          })}
        <HorizontalListPadEnd />
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
