import React from 'react';
import styled from 'styled-components';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'caption' | 'subcaption';
  color?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'red' | 'yellow' | 'black';
  children: React.ReactNode;
  className?: string;
}

const StyledText = styled.div<{ variant: string; color: string }>`
  color: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return theme.colors.textPrimary;
      case 'secondary':
        return theme.colors.textSecondary;
      case 'tertiary':
        return theme.colors.textTertiary;
      case 'white':
        return theme.colors.bgLight;
      case 'red':
        return theme.colors.alertRed;
      case 'yellow':
        return theme.colors.alertYellow;
      default:
        return theme.colors.textPrimary;
    }
  }};

  font-size: ${({ variant, theme }) => {
    switch (variant) {
      case 'h1':
        return theme.fontSizes.xxl;
      case 'h2':
        return theme.fontSizes.xl;
      case 'h3':
        return theme.fontSizes.lg;
      case 'caption':
        return theme.fontSizes.sm;
      case 'subcaption':
        return theme.fontSizes.xs;
      default:
        return theme.fontSizes.sm;
    }
  }};

  font-weight: ${({ variant, theme }) => {
    switch (variant) {
      case 'h1':
        return theme.fontWeights.extraBold;
      case 'h2':
        return theme.fontWeights.bold;
      case 'h3':
        return theme.fontWeights.bold;
      case 'caption':
        return theme.fontWeights.semiBold;
      case 'subcaption':
        return theme.fontWeights.semiBold;
      default:
        return theme.fontWeights.regular;
    }
  }};

  line-height: 1.5;
  letter-spacing: ${({ variant }) => 
    variant === 'caption' || variant === 'subcaption' ? '0.08em' : '-0.02em'
  };
`;

const Typography: React.FC<TypographyProps> = ({
  variant = 'caption',
  color = 'primary',
  children,
  className,
}) => {
  const getElement = () => {
    switch (variant) {
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'caption':
        return 'p';
      case 'subcaption':
        return 'span';
      default:
        return 'p';
    }
  };

  return (
    <StyledText as={getElement()} variant={variant} color={color} className={className}>
      {children}
    </StyledText>
  );
};

export default Typography; 