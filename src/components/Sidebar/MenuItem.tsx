import React from 'react';
import styled from 'styled-components';

interface MenuItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ItemContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  margin-bottom: 8px;
  border-radius: 16px;
  transition: all 0.2s ease;
  background-color: ${({ isActive, theme }) => 
    isActive ? 'rgba(169, 233, 224, 0.75)' : 'transparent'};
  
  &:hover {
    background-color: ${({ isActive }) => 
      isActive ? 'rgba(169, 233, 224, 0.75)' : 'rgba(169, 233, 224, 0.25)'};
  }
`;

const IconWrapper = styled.div`
  margin-right: 16px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  filter: ${({ theme }) => `invert(27%) sepia(13%) saturate(490%) hue-rotate(168deg) brightness(91%) contrast(90%)`};
`;

const Label = styled.span<{ isActive: boolean }>`
  font-family: 'Proxima Nova', sans-serif;
  font-weight: ${({ isActive }) => (isActive ? 700 : 600)};
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const MenuItem: React.FC<MenuItemProps> = ({ 
  icon, 
  label, 
  isActive = false, 
  onClick 
}) => {
  return (
    <ItemContainer isActive={isActive} onClick={onClick}>
      <IconWrapper>
        <Icon src={icon} alt={label} />
      </IconWrapper>
      <Label isActive={isActive}>{label}</Label>
    </ItemContainer>
  );
};

export default MenuItem; 