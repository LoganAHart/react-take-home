import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

import IconImg from "./IconImg";
import CampaignInfo from "./CampaignInfo";

const IconImgWrapper = styled.div`
  height: 4em;
  width: 4em;
`;

const CampaignHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 6em;
  background: #ffffff;
  padding: 0.2em 1em 0.2em 1em;
`;

function CampaignHeader({ campaignName, campaignIconUrl, payPerInstall }) {
  return (
    <CampaignHeaderWrapper>
      <IconImgWrapper>
        <IconImg src={campaignIconUrl} alt={`${campaignName} icon`} />
      </IconImgWrapper>
      <CampaignInfo campaignName={campaignName} payPerInstall={payPerInstall} />
    </CampaignHeaderWrapper>
  );
}

CampaignHeader.propTypes = {
  campaignName: PropTypes.string.isRequired,
  campaignIconUrl: PropTypes.string.isRequired,
  payPerInstall: PropTypes.string.isRequired
};

export default CampaignHeader;
