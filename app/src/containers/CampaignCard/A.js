import React, { Children } from "react";
import PropTypes from "prop-types";

export function A(props) {
  return (
    <a className={props.className} href={props.href} alt={props.alt} download>
      {Children.toArray(props.children)}
    </a>
  );
}

A.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default A;
