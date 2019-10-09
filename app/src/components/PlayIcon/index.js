import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object<string, any>} PlayIconProps
 * @property {string} [className] the icon's className (optional)
 * @property {string} width the width of the svg element (required)
 * @property {string} height the height of the svg element (required)
 */

/**
 * original dimensions: width="23" height="25"
 *
 * @param {PlayIconProps} props
 *
 * @return `PlayIcon` component
 */
export function PlayIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 23 25"
    >
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M0,22.7357021 L0,1.5 C-1.21167609e-15,0.671572875 0.671572875,-1.76113888e-14 1.5,-1.77635684e-14 C1.74718094,-1.78089748e-14 1.9905312,0.0610845889 2.20840942,0.177821462 L22.0256144,10.7956725 C22.7558335,11.1869163 23.0306273,12.0960415 22.6393836,12.8262605 C22.499753,13.0868675 22.2862215,13.3003991 22.0256144,13.4400296 L2.20840942,24.0578807 C1.47819038,24.4491244 0.569065183,24.1743306 0.177821462,23.4441116 C0.0610845889,23.2262333 -2.07289325e-15,22.9828831 0,22.7357021 Z"
      />
    </svg>
  );
}

PlayIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default PlayIcon;
