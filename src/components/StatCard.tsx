import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  className?: string;
}

const CardContainer = styled.div<{ variant: string }>`
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.primary;
      case 'success':
        return theme.colors.bgLight;
      case 'danger':
        return theme.colors.bgLight;
      case 'warning':
        return theme.colors.bgLight;
      default:
        return theme.colors.bgLight;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Typography)`
  margin-bottom: 8px;
`;

const Value = styled(Typography)`
  margin-top: 12px;
`;

const ChangeContainer = styled.div<{ trend?: string; variant: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return 'rgba(248, 248, 248, 0.25)';
      case 'success':
        return 'rgba(115, 207, 122, 0.15)';
      case 'danger':
        return 'rgba(252, 92, 101, 0.15)';
      case 'warning':
        return 'rgba(245, 226, 48, 0.15)';
      default:
        return 'rgba(248, 248, 248, 0.25)';
    }
  }};
  width: fit-content;
`;

const TrendIcon = styled.span<{ trend?: string; variant: string }>`
  &::before {
    content: '${({ trend }) => (trend === 'up' ? '↑' : '↓')}';
    color: ${({ variant, theme }) => {
      switch (variant) {
        case 'primary':
          return theme.colors.bgLight;
        case 'success':
          return theme.colors.successGreen;
        case 'danger':
          return theme.colors.alertRed;
        case 'warning':
          return theme.colors.alertYellow;
        default:
          return theme.colors.bgLight;
      }
    }};
  }
`;

const ChangeText = styled(Typography)<{ variant: string }>`
  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.bgLight;
      case 'success':
        return theme.colors.successGreen;
      case 'danger':
        return theme.colors.alertRed;
      case 'warning':
        return theme.colors.alertYellow;
      default:
        return theme.colors.bgLight;
    }
  }};
`;

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  trend,
  variant = 'default',
  className,
}) => {
  const textColor = variant === 'primary' ? 'white' : 'primary';

  return (
    <CardContainer variant={variant} className={className}>
      {change && trend && (
        <ChangeContainer trend={trend} variant={variant}>
          <TrendIcon trend={trend} variant={variant} />
          <ChangeText variant={variant} color={textColor}>
            {change}
          </ChangeText>
        </ChangeContainer>
      )}
     
      <Value variant="h2" color={textColor}>
        {value}
      </Value>
      <Title variant="h3" color={textColor}>
        {title}
      </Title>
    </CardContainer>
  );
};

export default StatCard; 