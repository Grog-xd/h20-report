import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

interface ExpenseItemProps {
  title: string;
  amount: string;
  status?: 'critical' | 'warning';
  className?: string;
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.infoBlue};
  margin-bottom: 12px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const IndicatorBar = styled.div<{ status?: string }>`
  width: 100%;
  height: 7px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.bgLight};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-left: 7px solid ${({ status, theme }) => 
      status === 'critical' ? theme.colors.alertRed : theme.colors.alertYellow};
  }
`;

const StatusIcon = styled.span<{ status?: string }>`
  &::before {
    content: '${({ status }) => status === 'critical' ? '⚠️' : '⚠'}';
    color: ${({ status, theme }) => 
      status === 'critical' ? theme.colors.alertRed : theme.colors.alertYellow};
    font-size: 21px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const ExpenseItem: React.FC<ExpenseItemProps> = ({
  title,
  amount,
  status,
  className,
}) => {
  return (
    <ItemContainer className={className}>
      <InfoContainer>
        <TitleRow>
          <Typography variant="subcaption" color="secondary">
            {title}
          </Typography>
          {status && <StatusIcon status={status} />}
        </TitleRow>
        <Typography variant="h3" color="primary">
          {amount}
        </Typography>
      </InfoContainer>
      {status && <IndicatorBar status={status} />}
    </ItemContainer>
  );
};

export default ExpenseItem; 