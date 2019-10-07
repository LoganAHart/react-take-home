import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object<string, any>} DownloadIconProps
 * @property {string} [className] the icon's className (optional)
 * @property {string} width the width of the svg element (required)
 * @property {string} height the height of the svg element (required)
 */

/**
 * original dimensions: width="18" height="20"
 *
 * @param {DownloadIconProps} props
 *
 * @return `DownloadIcon` component
 */
export function DownloadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 18 20"
    >
      <path
        fill="#909A9C"
        fill-rule="evenodd"
        d="M84.25,30.708285 C84.6642136,30.708285 85,31.0440714 85,31.458285 C85,31.8724985 84.6642136,32.208285 84.25,32.208285 L67.75,32.208285 C67.3357864,32.208285 67,31.8724985 67,31.458285 C67,31.0440714 67.3357864,30.708285 67.75,30.708285 L84.25,30.708285 Z M76,13 C76.4142136,13 76.75,13.3357864 76.75,13.75 L76.749,24.807 L79.1116419,22.4445002 C79.4032686,22.1528735 79.8609896,22.1285712 80.1802987,22.3715935 L80.2637225,22.4445002 C80.5818608,22.7626385 80.5818608,23.2784426 80.2637225,23.5965808 L80.2637225,23.5965808 L76.8159567,27.0466015 C76.7785265,27.1717107 76.7104036,27.2895964 76.6115879,27.3884121 C76.2934497,27.7065503 75.7776456,27.7065503 75.4595073,27.3884121 L71.5458941,23.4747989 C71.2277558,23.1566606 71.2277558,22.6408565 71.5458941,22.3227182 C71.8640324,22.00458 72.3798364,22.00458 72.6979747,22.3227182 L75.249,24.874 L75.25,13.75 C75.25,13.3357864 75.5857864,13 76,13 Z"
        transform="translate(-67 -13)"
      />
    </svg>
  );
}

DownloadIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default DownloadIcon;
