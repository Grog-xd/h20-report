import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import Typography from '../Typography';
import UserInfo from '../UserInfo';

const SidebarContainer = styled.div`
  height: 100vh;
  width: 280px;
  background: ${({ theme }) => theme.colors.bgLight};
  border-radius: 0 56px 56px 0;
  padding: 32px 24px;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;

const Logo = styled.div`
  margin-bottom: 48px;
`;

const LogoText = styled(Typography)`
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

const NavigationSection = styled.div`
  flex: 1;
  margin-bottom: 24px;
`;

const UserSection = styled.div`
  border-top: 1px solid ${({ theme }) => 'rgba(210, 209, 209, 0.5)'};
  padding-top: 24px;
`;

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'home', icon: '/assets/icons/icon-home.svg', label: 'Главная' },
    { id: 'dashboard', icon: '/assets/icons/icon-chart.svg', label: 'Дашборд' },
    { id: 'users', icon: '/assets/icons/icon-users.svg', label: 'Сотрудники' },
    { id: 'calendar', icon: '/assets/icons/icon-calendar.svg', label: 'Календарь' },
    { id: 'settings', icon: '/assets/icons/icon-settings.svg', label: 'Настройки' },
    { id: 'chat', icon: '/assets/icons/icon-chat.svg', label: 'Чат' },
  ];

  return (
    <SidebarContainer>
      <Logo>
        <LogoText>H2O</LogoText>
      </Logo>
      
      <NavigationSection>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </NavigationSection>
      
      <UserSection>
        <UserInfo 
          name="Kristina 🐰" 
          role="менеджер продаж" 
          avatarUrl="/assets/default-avatar.svg" 
        />
        
        <MenuItem
          icon="/assets/icons/icon-logout.svg"
          label="Выйти"
          onClick={() => console.log('Logout clicked')}
        />
      </UserSection>
    </SidebarContainer>
  );
};

export default Sidebar; 