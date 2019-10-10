import React from "react";
import PropTypes from "prop-types";

export function VideoPlayer({
  videoRef,
  setStartedPlaying,
  downloadURL,
  coverPhotoURL
}) {
  return (
    <video
      poster={coverPhotoURL}
      ref={videoRef}
      width="102.234"
      height="181.75"
      style={{
        objectFit: "contain",
        width: "6.39em",
        height: "11.36em",
        borderRadius: "0.4em"
      }}
      preload="none"
      onPlay={() => setStartedPlaying(true)}
      playsInline
    >
      <source src={downloadURL} type="video/mp4" />
    </video>
  );
}

VideoPlayer.propTypes = {
  downloadURL: PropTypes.string.isRequired
};

export default VideoPlayer;
