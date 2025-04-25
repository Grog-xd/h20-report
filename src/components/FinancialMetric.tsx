import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

interface FinancialMetricProps {
  title: string;
  amount: string;
  type: 'revenue' | 'expenses' | 'profit' | 'debt' | 'total';
  className?: string;
}

const MetricContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.bgLight};
  margin-bottom: 12px;
  position: relative;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 1;
`;

const ColorIndicator = styled.div<{ type: string }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 15px;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'revenue':
        return theme.colors.successGreen;
      case 'expenses':
        return theme.colors.chartBlue;
      case 'profit':
        return theme.colors.chartYellow;
      case 'debt':
        return theme.colors.chartYellow;
      case 'total':
        return theme.colors.purple;
      default:
        return theme.colors.primary;
    }
  }};
`;

const MetricTitle = styled(Typography)`
  margin-bottom: 4px;
`;

const FinancialMetric: React.FC<FinancialMetricProps> = ({
  title,
  amount,
  type,
  className,
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
      <ColorIndicator type={type} />
      <InfoContainer>
        <MetricTitle variant="subcaption" color="secondary">
          {title}
        </MetricTitle>
        <Typography variant="h2" color="primary">
          {amount} {titleIcon()}
        </Typography>
      </InfoContainer>
    </MetricContainer>
  );
};

export default FinancialMetric; 