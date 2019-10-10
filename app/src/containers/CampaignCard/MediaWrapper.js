import styled, { css } from "styled-components/macro";

const mediaWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.39em;
  height: 11.36em;
  margin: 0 auto;
  border-radius: 0.4em;
`;

const MediaWrapper = styled.div`
  ${mediaWrapperStyle}
  background-color: rgba(255, 255, 255, 0.75);
`;

const PlaceholderMediaWrapper = styled.div`
  ${mediaWrapperStyle}
  background-color: rgba(128, 128, 128, 0.75);
`;

export { MediaWrapper, PlaceholderMediaWrapper };
