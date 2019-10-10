import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import copy from "clipboard-copy";

import HorizontalListItem from "./HorizontalListItem";
import { MediaWrapper, PlaceholderMediaWrapper } from "./MediaWrapper";
import {
  LinkMediaButton,
  DownloadMediaLink,
  MediaButtonsWrapper
} from "./MediaButtons";
import DownloadIcon from "components/DownloadIcon";
import LinkIcon from "components/LinkIcon";
import PlayIcon from "components/PlayIcon";
import Img from "components/Img";

const CoverPhoto = styled(Img)`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 0.4em;
  overflow: hidden;
`;

export function MediaCard({
  coverPhotoURL,
  downloadURL,
  mediaType,
  trackingLink,
  campaignName,
  campaignID
}) {
  const copyToClipboard = () => {
    copy(trackingLink);
  };
  return (
    <HorizontalListItem>
      <MediaWrapper>
        <CoverPhoto src={coverPhotoURL} alt={`${campaignName} Cover Photo`} />
      </MediaWrapper>
      <MediaButtonsWrapper>
        <LinkMediaButton
          onClick={copyToClipboard}
          value={trackingLink}
          name="Copy Tracking Link Button"
        >
          <LinkIcon width="2em" height="2em" />
        </LinkMediaButton>
        <DownloadMediaLink
          as="a"
          href={downloadURL}
          alt={`Download ${campaignName} ${mediaType}`}
          download
        >
          <DownloadIcon width="2em" height="2em" />
        </DownloadMediaLink>
      </MediaButtonsWrapper>
    </HorizontalListItem>
  );
}

const PlaceHolderMediaCard = props => {
  return (
    <HorizontalListItem>
      <PlaceholderMediaWrapper />
      <MediaButtonsWrapper>
        <LinkMediaButton name="Link Media Button">
          <LinkIcon width="2em" height="2em" />
        </LinkMediaButton>
        <DownloadMediaLink name="Download Media Button">
          <DownloadIcon width="2em" height="2em" />
        </DownloadMediaLink>
      </MediaButtonsWrapper>
    </HorizontalListItem>
  );
};

export default MediaCard;
export { PlaceHolderMediaCard };
