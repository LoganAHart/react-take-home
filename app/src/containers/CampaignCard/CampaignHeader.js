import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

import IconImg from "./IconImg";

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
  box-shadow: 0 1px 0 0 #eaeaea;
  padding: 0.2em 1em 0.2em 1em;
`;

function CampaignHeader(props) {
  return (
    <CampaignHeaderWrapper>
      <IconImgWrapper>
        <IconImg
          src={props.campaignIconUrl}
          alt={`${props.campaignName} icon`}
        />
      </IconImgWrapper>
      <div>
        {props.campaignName}
        <br />
        {props.payPerInstall}
      </div>
    </CampaignHeaderWrapper>
  );
}

CampaignHeader.propTypes = {
  campaignName: PropTypes.string.isRequired,
  campaignIconUrl: PropTypes.string.isRequired,
  payPerInstall: PropTypes.string.isRequired
};

export default CampaignHeader;
