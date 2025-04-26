import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

interface FinancialMetricProps {
  title: string;
  amount: string;
  type: 'revenue' | 'expenses' | 'profit' | 'debt' | 'total' | 'critical';
  className?: string;
  isWarning?: boolean;
}

const MetricContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const ColorIndicator = styled.div<{ type: string }>`
  min-width: 26px;
  min-height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 21px;
  font-weight: 600;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'revenue':
        return theme.colors.successGreen;
      case 'expenses':
        return theme.colors.chartBlue;
      case 'profit':
        return theme.colors.chartYellow;
      case 'debt':
        return theme.colors.chartBlue;
      case 'critical':
        return theme.colors.chartRed;
      case 'total':
        return theme.colors.purple;
      default:
        return theme.colors.primary;
    }
  }};
`;

const MetricTitle = styled(Typography)`
`;

const FinancialMetric: React.FC<FinancialMetricProps> = ({
  title,
  amount,
  type,
  className,
  isWarning = false,
}) => {
  const titleIcon = () => {
    switch (type) {
      case 'revenue':
        return '';
      case 'expenses':
        return '↑';
      case 'profit':
        return '';
      case 'debt':
        return '';
      case 'total':
        return '';
      default:
        return '';
    }
  };

  return (
    <MetricContainer className={className}>
      <ColorIndicator type={type} >{isWarning && '!'}</ColorIndicator>
      <InfoContainer>
        <MetricTitle variant="subcaption" color="secondary">
          {title}
        </MetricTitle>
        <Typography variant="h3" color="primary">
          {amount} {titleIcon()}
        </Typography>
      </InfoContainer>
    </MetricContainer>
  );
};

export default FinancialMetric; 