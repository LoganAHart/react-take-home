import styled, { keyframes } from "styled-components/macro";

const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HorizontalListItem = styled.div`
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 14.6em;
  width: 7.3em;
  margin: 1em 0;
  animation: ${fadeInAnimation} 0.25s ease-in;
`;

export default HorizontalListItem;
