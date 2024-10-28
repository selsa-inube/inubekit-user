import styled from "styled-components";

const StyledMenuContainer = styled.div`
  position: absolute;
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
  z-index: 1;
`;

const StyledUser = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
`;

export { StyledMenuContainer, StyledUser };
