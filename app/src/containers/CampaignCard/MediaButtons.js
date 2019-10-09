import styled, { css } from "styled-components/macro";

const mediaButtonStyles = css`
  width: 4.2em;
  height: 4.2em;
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  justify-content: center;
  align-items: center;
`;

const LinkMediaButton = styled.button`
  ${mediaButtonStyles}
  background-color: #ffffff;
  border: 1px solid rgba(224, 238, 242, 1);
  border-radius: 0.5em 0 0 0.5em;
  margin-right: -1px;
`;

const DownloadMediaButton = styled.button`
  ${mediaButtonStyles}
  background-color: #ffffff;
  border: 1px solid rgba(224, 238, 242, 1);
  border-radius: 0 0.5em 0.5em 0;
  margin-left: -1px;
`;

const MediaButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.35em;
`;

export { LinkMediaButton, DownloadMediaButton, MediaButtonsWrapper };
