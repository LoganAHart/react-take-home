import React, { Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const StyledButtonNav = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 1em;
  text-decoration: none;
  border-radius: 50px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 1.5em;
  color: #ffffff;
  background: #000;
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 4em 0;
`;

function ButtonNav(props) {
  return (
    <Wrapper>
      <StyledButtonNav onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </StyledButtonNav>
    </Wrapper>
  );
}

ButtonNav.propTypes = {
  handleRoute: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default ButtonNav;
