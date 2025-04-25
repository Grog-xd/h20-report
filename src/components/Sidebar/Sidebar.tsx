import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const SidebarContainer = styled.div`
  height: 100vh;
  width: 100px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 56px 0 0 56px;
  padding: 32px 24px;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;

const Logo = styled.img`
  margin-bottom: 48px;
`;

const NavigationSection = styled.div`
  flex: 1;
  margin-bottom: 24px;
`;

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'logout', icon: '/assets/icons/icon-logout.svg', label: 'Выход' },
    { id: 'home', icon: '/assets/icons/icon-home.svg', label: 'Главная' },
    { id: 'dashboard', icon: '/assets/icons/icon-chart.svg', label: 'Дашборд' },
    { id: 'users', icon: '/assets/icons/icon-users.svg', label: 'Сотрудники' },
    { id: 'calendar', icon: '/assets/icons/icon-calendar.svg', label: 'Календарь' },
    { id: 'settings', icon: '/assets/icons/icon-settings.svg', label: 'Настройки' },
    { id: 'chat', icon: '/assets/icons/icon-chat.svg', label: 'Чат' },
  ];

  return (
    <SidebarContainer>
      <Logo src="/assets/logo.png" alt="H2O" />

      
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
    </SidebarContainer>
  );
};

export default Sidebar; 