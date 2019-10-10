import styled from "styled-components/macro";

const HorizontalList = styled.div`
  display: flex;
  padding: 0 0.25em;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  background-color: rgba(224, 238, 242, 0.25);
  border: 1px solid rgba(224, 238, 242, 1);
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default HorizontalList;
