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
  background-color: ${({ isActive }) => 
    isActive ? 'rgba(169, 233, 224, 0.75)' : 'transparent'};
  
  &:hover {
    background-color: ${({ isActive }) => 
      isActive ? 'rgba(169, 233, 224, 0.75)' : 'rgba(169, 233, 224, 0.25)'};
  }
`;

const IconWrapper = styled.div`
  
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
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
    </ItemContainer>
  );
};

export default MenuItem; 