import styled from '@emotion/styled';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 16px;
  list-style: none;
`;
export const FeedbackButtonItem = styled.li`
  padding: 0;
`;

export const FeedbackButton = styled.button`
  padding: 6px 10px;
  width: 68px;
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  border-style: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hover};
    box-shadow: none;
  }
`;

export const FeedbackButtonText = styled.span``;
