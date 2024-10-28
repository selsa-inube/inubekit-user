import styled from "styled-components";

const StyledMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  margin-top: 8px;
`;

const StyledUser = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
`;

export { StyledMenuContainer, StyledUser };
