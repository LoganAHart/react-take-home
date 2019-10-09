import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { compose } from "redux";

import CampaignHeader from "./CampaignHeader";
import HorizontalList from "./HorizontalList";
import HorizontalListItem from "./HorizontalListItem";
import MediaWrapper from "./MediaWrapper";
import {
  LinkMediaButton,
  DownloadMediaButton,
  MediaButtonsWrapper
} from "./MediaButtons";
import DownloadIcon from "components/DownloadIcon";
import LinkIcon from "components/LinkIcon";
import PlayIcon from "components/PlayIcon";

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
        <HorizontalListItem>
          <MediaWrapper />
          <MediaButtonsWrapper>
            <LinkMediaButton name="Link Media Button">
              <LinkIcon width="2em" height="2em" />
            </LinkMediaButton>
            <DownloadMediaButton name="Download Media Button">
              <DownloadIcon width="2em" height="2em" />
            </DownloadMediaButton>
          </MediaButtonsWrapper>
        </HorizontalListItem>
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
