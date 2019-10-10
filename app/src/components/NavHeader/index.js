import React from "react";
import styled from "styled-components/macro";

import MenuIcon from "components/MenuIcon";
import PlugLogoIcon from "components/PlugLogoIcon";

const NavHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2.8em;
  background: #ffffff;
  box-shadow: 0 1px 0 0 #eaeaea;
  padding: 0.2em 1em 0.2em 1em;
  z-index: 3;
`;

const CenteredPlugIcon = styled(PlugLogoIcon)`
  margin-right: calc((50% - 1.2em) + 1em);
`;

function NavHeader() {
  return (
    <NavHeaderWrapper>
      <MenuIcon width="1.43em" height="0.65em" />
      <CenteredPlugIcon width="2.4em" height="2.4em" />
    </NavHeaderWrapper>
  );
}

export default NavHeader;
