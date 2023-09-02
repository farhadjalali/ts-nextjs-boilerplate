import styled from "styled-components";

// I almost name the root component of a file "Component" by default
export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CreatorRow = styled.div`
  background-color: ${({ theme }) => theme.colors.GhostWhite};
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors.Grey400};

  // Seems a bit hacky, just as a sample of theming on border radius
  border-radius: ${({ theme }) => theme.borderRadius.S};
`;
