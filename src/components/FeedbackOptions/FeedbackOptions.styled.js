import styled from '@emotion/styled';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${props => props.theme.space[0]}px;
  padding-top: ${props => props.theme.space[0]}px;
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[6]}px;
  list-style: none;
`;
export const FeedbackButtonItem = styled.li`
  padding: ${props => props.theme.space[0]}px;
`;

export const FeedbackButton = styled.button`
  padding: 6px 10px;
  width: ${props => props.theme.space[10]}px;
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.space[2]}px;
  border-style: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.button};

  &:not(:last-child) {
    margin-right: ${props => props.theme.space[3]}px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hover};
    box-shadow: none;
  }
`;
