import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import copy from "clipboard-copy";

import HorizontalListItem from "./HorizontalListItem";
import { MediaWrapper, PlaceholderMediaWrapper } from "./MediaWrapper";
import VideoPlayer from "./VideoPlayer";
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

const PlayVideoIcon = styled(PlayIcon)`
  flex: 0 0 auto;
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  top: calc(50% - (1.5em / 2));
  left: calc(50% - (1.5em / 2));
  z-index: 2;
  opacity: ${props => (props.startedPlaying ? 0 : 1)};
`;

export function MediaCard({
  coverPhotoURL,
  downloadURL,
  mediaType,
  trackingLink,
  campaignName
}) {
  const [startedPlaying, setStartedPlaying] = useState(false);

  const videoRef = useRef(null);

  const copyToClipboard = () => {
    copy(trackingLink);
  };

  const handleVideoClick = () => {
    videoRef.current.play();
  };

  return (
    <HorizontalListItem>
      <MediaWrapper>
        {mediaType === "video" ? (
          <VideoPlayer
            videoRef={videoRef}
            setStartedPlaying={setStartedPlaying}
            downloadURL={downloadURL}
            coverPhotoURL={coverPhotoURL}
          />
        ) : (
          <CoverPhoto src={coverPhotoURL} alt={`${campaignName} Cover Photo`} />
        )}
        {mediaType === "video" ? (
          <PlayVideoIcon
            width="3em"
            height="3em"
            startedPlaying={startedPlaying}
            handleClick={() => handleVideoClick()}
          />
        ) : null}
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

MediaCard.propTypes = {
  coverPhotoURL: PropTypes.string.isRequired,
  downloadURL: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
  trackingLink: PropTypes.string.isRequired,
  campaignName: PropTypes.string.isRequired
};

export default MediaCard;
export { PlaceHolderMediaCard, CoverPhoto };
