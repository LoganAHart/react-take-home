import styled from "styled-components/macro";

const HorizontalList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  background-color: rgba(224, 238, 242, 0.25);
  border: 1px solid rgba(224, 238, 242);
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default HorizontalList;