import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const StyledButton = styled.button<{ variant: string; size: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transition: all 0.2s ease-in-out;
  
  /* Size styles */
  padding: ${({ size }) => {
    switch(size) {
      case 'small':
        return '8px 16px';
      case 'medium':
        return '12px 24px';
      case 'large':
        return '16px 32px';
      default:
        return '12px 24px';
    }
  }};
  
  font-size: ${({ size, theme }) => {
    switch(size) {
      case 'small':
        return theme.fontSizes.xs;
      case 'medium':
        return theme.fontSizes.sm;
      case 'large':
        return theme.fontSizes.md;
      default:
        return theme.fontSizes.sm;
    }
  }};
  
  /* Variant styles */
  background-color: ${({ variant, theme }) => {
    switch(variant) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'outline':
      case 'text':
        return 'transparent';
      default:
        return theme.colors.primary;
    }
  }};
  
  color: ${({ variant, theme }) => {
    switch(variant) {
      case 'primary':
      case 'secondary':
        return theme.colors.bgLight;
      case 'outline':
      case 'text':
        return theme.colors.textPrimary;
      default:
        return theme.colors.bgLight;
    }
  }};
  
  border: ${({ variant, theme }) => {
    switch(variant) {
      case 'outline':
        return `1px solid ${theme.colors.primary}`;
      default:
        return 'none';
    }
  }};
  
  &:hover {
    background-color: ${({ variant, theme }) => {
      switch(variant) {
        case 'primary':
          return theme.colors.secondary;
        case 'secondary':
          return theme.colors.darkBlue;
        case 'outline':
          return `rgba(84, 211, 194, 0.1)`;
        case 'text':
          return `rgba(0, 0, 0, 0.05)`;
        default:
          return theme.colors.secondary;
      }
    }};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(84, 211, 194, 0.3);
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  className,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 