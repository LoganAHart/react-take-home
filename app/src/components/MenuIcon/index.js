import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object<string, any>} MenuIconProps
 * @property {string} [className] the icon's className (optional)
 * @property {string} width the width of the svg element (required)
 * @property {string} height the height of the svg element (required)
 */

/**
 * original dimensions: width="22" height="10"
 *
 * @param {MenuIconProps} props
 *
 * @return `MenuIcon` component
 */
export function MenuIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 22 10"
    >
      <path
        d="M39,28 C39.5522847,28 40,28.4477153 40,29 C40,29.5522847 39.5522847,30 39,30 L19,30 C18.4477153,30 18,29.5522847 18,29 C18,28.4477153 18.4477153,28 19,28 L39,28 Z M39,20 C39.5522847,20 40,20.4477153 40,21 C40,21.5522847 39.5522847,22 39,22 L19,22 C18.4477153,22 18,21.5522847 18,21 C18,20.4477153 18.4477153,20 19,20 L39,20 Z"
        transform="translate(-18 -20)"
      />
    </svg>
  );
}

MenuIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default MenuIcon;
