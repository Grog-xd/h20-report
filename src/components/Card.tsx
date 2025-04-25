import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

const StyledCard = styled.div<{ variant: string }>`
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.bgLight;
      case 'secondary':
        return theme.colors.primary;
      case 'tertiary':
        return theme.colors.bgPrimary;
      default:
        return theme.colors.bgLight;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 24px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const Card: React.FC<CardProps> = ({ children, variant = 'primary', className }) => {
  return (
    <StyledCard variant={variant} className={className}>
      {children}
    </StyledCard>
  );
};

export default Card; 