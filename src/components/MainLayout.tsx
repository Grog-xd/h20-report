import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  margin:0 auto
`;

const ContentContainer = styled.div`
  width: calc(100% - 200px);
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 56px 0 0 0;
  position: relative;
  left: -90px;
  top: 0;
  z-index: 20;
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