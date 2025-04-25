import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/Theme';
import FinancialDashboard from './components/FinancialDashboard';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        <FinancialDashboard />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
