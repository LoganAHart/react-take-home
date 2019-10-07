import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object<string, any>} PlugLogoProps
 * @property {string} [className] the icon's className (optional)
 * @property {string} width the width of the svg element (required)
 * @property {string} height the height of the svg element (required)
 */

/**
 * original dimensions: width="38" height="38"
 *
 * @param {PlugLogoProps} props
 *
 * @returns `PlugLogo` component
 */
function PlugLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 38 38"
    >
      <defs>
        <linearGradient
          id="logo-a"
          x1="74.737%"
          x2="39.376%"
          y1="13.999%"
          y2="88.65%"
        >
          <stop offset="0%" stopColor="#2AFF38" />
          <stop offset="100%" stopColor="#00DE49" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx="19" cy="19" r="19" fill="url(#logo-a)" />
        <path
          fill="#FFF"
          d="M22.7157107,23.4083333 L22.7157107,28.1916667 C22.7157107,29.1857792 21.9343841,30 20.957265,30 C19.9801458,30 19.1880342,29.1941125 19.1880342,28.2 L19.18829,26.7916667 C16.912973,26.7916667 15.7562778,26.7916667 15.7182045,26.7916667 C10.9034144,26.7916667 7,22.8153343 7,17.9 C7,12.9846657 10.9031586,9 15.7179487,9 C15.756022,9 17.4369337,9 20.7606837,9 C21.8463716,8.99973382 22.7159227,9.89494847 22.7161844,10.9995179 L22.7157107,13.2 L28.2307692,13.2 C29.2078884,13.2 30,14.0058875 30,15 C30,15.9941126 29.1971034,16.7875 28.2199842,16.7875 L22.7157107,16.7875 L22.7157107,19.8208333 L28.2199842,19.8208333 C29.1971034,19.8208333 30,20.6058875 30,21.6 C30,22.5941126 29.1971034,23.4083333 28.2199842,23.4083333 L22.7157107,23.4083333 Z"
          transform="matrix(-1 0 0 1 37 0)"
        />
      </g>
    </svg>
  );
}

PlugLogo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default PlugLogo;
