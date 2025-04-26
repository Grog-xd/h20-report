import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Typography from './Typography';
import UserInfo from './UserInfo';
import SalesChart from './SalesChart';
import StatCard from './StatCard';
import FinancialMetric from './FinancialMetric';
import ChartPeriodSelector, { PeriodType, ReportType } from './ChartPeriodSelector';

const DashboardContainer = styled.div`
  padding: 24px 32px;
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled(Typography)`
  font-size: 28px;
  margin-bottom: 8px;
`;

const MainContentLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CardTitle = styled(Typography)`
  margin-bottom: 16px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;

const ExpensesGrid = styled.div`

  gap: 16px;
  margin-top: 16px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MetricsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;


const ReportCard = styled(Card)`
  padding-bottom: 16px;
`;

const TimeTabsContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;
const ChartTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  color: ${props => props.active ? props.theme.colors.textPrimary : props.theme.colors.textSecondary};
  border-bottom: ${props => props.active ? ` 2px solid ${props.theme.colors.primary}` : `2px solid ${props.theme.colors.lightGray}`};
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  background: transparent;
`;

const NavButton = styled.button`
  width:40px;
  height:40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.bgLight};
  border: 1px solid transparent;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const FinancialDashboard: React.FC = () => {
  const [chartPeriod, setChartPeriod] = useState<PeriodType>('year');
  const [activeReport, setActiveReport] = useState<ReportType>('company');

  const reportsArray:ReportType[] = ['employee', 'company', 'order'];
  
  return (
    <DashboardContainer>
      <Header>
        <ButtonSection>
          <NavButton onClick={() => activeReport !== 'employee' && setActiveReport(reportsArray[reportsArray.indexOf(activeReport)-1 ])}><img src="/assets/arrow-left.png" alt="arrow-left"></img></NavButton>
          <NavButton onClick={() => activeReport !== 'order' && setActiveReport(reportsArray[reportsArray.indexOf(activeReport) +1 ])}><img src="/assets/arrow-right.png" alt="arrow-right"></img></NavButton>
        </ButtonSection>
        <SelectorContainer>
          <TabButton
            active={activeReport === 'employee'}
            onClick={() => setActiveReport('employee')}
          >
            Сводный отчет по сотрудникам
          </TabButton>
          <TabButton
            active={activeReport === 'company'}
            onClick={() => setActiveReport('company')}
          >
            Сводный отчет внутри компании
          </TabButton>
          <TabButton
            active={activeReport === 'order'}
            onClick={() => setActiveReport('order')}
          >
            Сводный отчет по сделкам
          </TabButton>
      </SelectorContainer>
       
        <UserInfo 
          name="Kristina 🐰" 
          role="менеджер продаж" 
          avatarUrl="/assets/avatar.png" 
        />
      </Header>
      
      <MainContentLayout>
        <div>
          <Title variant="h2" color="primary">Сводный отчет</Title>
          <StatsGrid>
              <StatCard
                title="Итоги"
                value="₽ 10 157 764"
                change="21.5 %"
                trend="up"
                variant="primary"
              />
              <StatCard
                title="B2B"
                value="₽ 8 615 253"
                change="43.7 %"
                trend="up"
                variant="success"
              />
              <StatCard
                title="B2C"
                value="₽ -1 542 511"
                change="13.7 %"
                trend="down"
                variant="danger"
              />
            </StatsGrid>
          <ReportCard>
            <ChartTitleContainer>
              <CardTitle variant="h3" color="primary">
                Общая статистика 
              </CardTitle>
              <ChartPeriodSelector
                  activePeriod={chartPeriod}
                  onPeriodChange={setChartPeriod}
                />
              </ChartTitleContainer>
            <TimeTabsContainer>
              
            <SalesChart periodType={chartPeriod} />
            </TimeTabsContainer>
            
            <MetricsGrid>
              <FinancialMetric
                title="Выручка"
                amount="₽ 8 615 253"
                type="revenue"
              />
              <FinancialMetric
                title="Затраты"
                amount="₽ 10 157 764"
                type="expenses"
                isWarning={true}
              />
              <FinancialMetric
                title="Прибыль"
                amount="₽ -1 542 511"
                type="debt"
                isWarning={true}
              />
              <FinancialMetric
                title="Задолжность"
                amount="₽ 0"
                type="profit"
              />
              <FinancialMetric
                title="Итог"
                amount="₽ 10 157 764"
                type="total"
              />
            </MetricsGrid>
          </ReportCard>
          
          
           
        </div>
        
        <div>
          <Card>
          <CardTitle variant="h3" color="primary">
            Проблемные зоны
          </CardTitle>
            
           
          <ExpensesGrid>
            <FinancialMetric
              title="Линейный персонал"
              amount="₽ 300 3670"
              type="critical"
              isWarning={true}
            />
            <FinancialMetric
              title="Закупка спецодежды/СИЗ"
              amount="₽ 16810"
              type="critical"
              isWarning={true}
            />
            <FinancialMetric
              title="Бензин (наличные)"
              amount="₽ 278 325"
              type="critical"
              isWarning={true}
            />
            <FinancialMetric
              title="Обслуживание автомобиля"
              amount="₽ 47 868"
              type="profit"
              isWarning={true}
            />
            <FinancialMetric
              title="Рекламные бюджеты (Контекст)"
              amount="₽ 200 000"
              type="profit"
              isWarning={true}
            />
            <FinancialMetric
              title="Подразделение разовых работ ФОТ"
              amount="₽ 901 470"
              type="profit"
              isWarning={true}
            />
            <FinancialMetric
              title="Ремонт оборудования"
              amount="₽ 28 570"
              type="profit"
              isWarning={true}
            />
            <FinancialMetric
              title="Рекламные бюджеты (Блогеры)"
              amount="₽ 101 500"
              type="profit"
              isWarning={true}
            />
            <FinancialMetric
              title="Закупка инвентаря"
              amount="₽ 44 742"
              type="critical"
              isWarning={true}
            />
            <FinancialMetric
              title="Форс-мажоры"
              amount="₽ 13750"
              type="critical"
              isWarning={true}
            />
          </ExpensesGrid>
          </Card>
        </div>
      </MainContentLayout>
    </DashboardContainer>
  );
};

export default FinancialDashboard; 