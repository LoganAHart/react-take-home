import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

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

export function MediaCard() {
  return (
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
  );
}

const PlaceHolderMediaCard = () => {
  return (
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
  );
};

export default MediaCard;
export { PlaceHolderMediaCard };
