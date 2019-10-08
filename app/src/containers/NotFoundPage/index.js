import React from "react";
import styled from "styled-components";
import H1 from "components/H1";

const NotFoundWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 3.2em;
`;

const NotFoundH1 = styled(H1)`
  text-align: center;
`;

export default function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <NotFoundH1>Page not found</NotFoundH1>
    </NotFoundWrapper>
  );
}
