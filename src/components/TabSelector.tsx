import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

interface TabSelectorProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const TabContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  position: relative;
`;

const Tab = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  padding-bottom: 8px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: ${({ isActive, theme }) => isActive ? theme.colors.primary : 'transparent'};
    border-radius: 2px;
    transition: background-color 0.2s ease;
  }
`;

const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
}) => {
  return (
    <TabContainer className={className}>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          isActive={tab === activeTab}
          onClick={() => onTabChange(tab)}
        >
          <Typography
            variant="caption"
            color={tab === activeTab ? 'primary' : 'tertiary'}
          >
            {tab}
          </Typography>
        </Tab>
      ))}
    </TabContainer>
  );
};

export default TabSelector; 