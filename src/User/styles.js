import styled from "styled-components";

const StyledMenuContainer = styled.div`
  position: relative;
  margin-top: 8px;
  z-index: 1;
`;

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  & > div > div {
    user-select: none;
  }
`;

const StyledAvatarRef = styled.div``;
export { StyledAvatarRef, StyledMenuContainer, StyledUser };
