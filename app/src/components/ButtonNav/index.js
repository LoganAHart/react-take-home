import React, { Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

import buttonNavStyles from "./buttonNavStyles";
import NavBtnWrapper from "./NavBtnWrapper";

const StyledButtonNav = styled.button`
  ${buttonNavStyles}
`;

function ButtonNav(props) {
  return (
    <NavBtnWrapper>
      <StyledButtonNav onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </StyledButtonNav>
    </NavBtnWrapper>
  );
}

ButtonNav.propTypes = {
  handleRoute: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default ButtonNav;
