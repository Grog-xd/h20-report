import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  margin-left: 280px;
  width: calc(100% - 280px);
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentContainer>
        {children}
      </ContentContainer>
    </LayoutContainer>
  );
};

export default MainLayout; 