import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const InfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5em;
`;

const InfoSectionWrapper = styled.div`
  padding: 0 0.25em;
`;

const TitleText = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  color: #000;
`;

const AmountText = styled.span`
  font-size: 1em;
  font-weight: bold;
  color: #009330;
`;

const PerInstallText = styled.span`
  font-size: 1em;
  font-weight: normal;
  color: #009330;
`;

function CampaignInfo({ campaignName, payPerInstall }) {
  return (
    <InfoContentWrapper>
      <InfoSectionWrapper>
        <TitleText>{campaignName}</TitleText>
      </InfoSectionWrapper>
      <InfoSectionWrapper>
        <AmountText>{payPerInstall}</AmountText>
        <PerInstallText>{` per install`}</PerInstallText>
      </InfoSectionWrapper>
    </InfoContentWrapper>
  );
}

CampaignInfo.propTypes = {
  campaignName: PropTypes.string.isRequired,
  payPerInstall: PropTypes.string.isRequired
};

export default CampaignInfo;
