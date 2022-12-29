import styled from '@emotion/styled';

export const StatisticsWrapper = styled.div`
  text-align: center;
`;

export const StatisticsTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.mainText};
  font-size: 28px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 30px;
`;

export const StatisticsItem = styled.li`
  color: ${props => props.theme.colors.mainText};
  font-size: 24px;
  font-weight: 400;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StatisticsValueText = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 24px;
  font-weight: 600;
`;

export const StatisticsValueTotal = styled.span`
  color: ${props => props.theme.colors.yellow};
  font-size: 24px;
  font-weight: 600;
`;
export const StatisticsValuePercentage = styled.span`
  color: ${props => props.theme.colors.third};
  font-size: 24px;
  font-weight: 600;
`;
