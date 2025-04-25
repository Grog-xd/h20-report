import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Typography from './Typography';
import UserInfo from './UserInfo';
import SalesChart from './SalesChart';
import StatCard from './StatCard';
import ExpenseItem from './ExpenseItem';
import FinancialMetric from './FinancialMetric';
import TabSelector from './TabSelector';
import ChartPeriodSelector, { PeriodType } from './ChartPeriodSelector';

const DashboardContainer = styled.div`
  padding: 24px 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
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
  margin-top: 24px;
`;

const ExpensesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 16px;
`;

const SubTitle = styled(Typography)`
  margin-top: 24px;
  margin-bottom: 16px;
`;

const ReportCard = styled(Card)`
  padding-bottom: 16px;
`;

const TimeTabsContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

const FinancialDashboard: React.FC = () => {
  const [activeTimeTab, setActiveTimeTab] = useState('Год');
  const [chartPeriod, setChartPeriod] = useState<PeriodType>('year');
  
  return (
    <DashboardContainer>
      <Header>
        <div>
          <Title variant="h2" color="primary">Сводный отчет</Title>
          <Typography variant="caption" color="primary">
            Сводный отчет внутри компании
          </Typography>
        </div>
        <UserInfo 
          name="Kristina 🐰" 
          role="менеджер продаж" 
          avatarUrl="/assets/default-avatar.svg" 
        />
      </Header>
      
      <MainContentLayout>
        <div>
          <ReportCard>
            <CardTitle variant="h3" color="primary">
              Контроль качества
            </CardTitle>
            
            <TimeTabsContainer>
              <ChartPeriodSelector
                activePeriod={chartPeriod}
                onPeriodChange={setChartPeriod}
              />
            </TimeTabsContainer>
            
            <SalesChart periodType={chartPeriod} />
            
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
          </ReportCard>
          
          <SubTitle variant="h3" color="primary">
            Проблемные зоны
          </SubTitle>
          
          <ExpensesGrid>
            <ExpenseItem
              title="Линейный персонал"
              amount="₽ 300 3670"
              status="critical"
            />
            <ExpenseItem
              title="Закупка спецодежды/СИЗ"
              amount="₽ 16810"
              status="warning"
            />
            <ExpenseItem
              title="Бензин (наличные)"
              amount="₽ 278 325"
              status="critical"
            />
            <ExpenseItem
              title="Обслуживание автомобиля"
              amount="₽ 47 868"
              status="warning"
            />
            <ExpenseItem
              title="Рекламные бюджеты (Контекст)"
              amount="₽ 200 000"
              status="critical"
            />
            <ExpenseItem
              title="Подразделение разовых работ ФОТ"
              amount="₽ 901 470"
              status="critical"
            />
            <ExpenseItem
              title="Ремонт оборудования"
              amount="₽ 28 570"
              status="warning"
            />
            <ExpenseItem
              title="Рекламные бюджеты (Блогеры)"
              amount="₽ 101 500"
              status="critical"
            />
            <ExpenseItem
              title="Закупка инвентаря"
              amount="₽ 44 742"
              status="warning"
            />
            <ExpenseItem
              title="Форс-мажоры"
              amount="₽ 13750"
              status="warning"
            />
          </ExpensesGrid>
        </div>
        
        <div>
          <Card>
            <CardTitle variant="h3" color="primary">
              Общая статистика
            </CardTitle>
            
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
              />
              <FinancialMetric
                title="Прибыль"
                amount="₽ -1 542 511"
                type="profit"
              />
              <FinancialMetric
                title="Задолжность"
                amount="₽ 0"
                type="debt"
              />
              <FinancialMetric
                title="Итог"
                amount="₽ 10 157 764"
                type="total"
              />
            </MetricsGrid>
          </Card>
        </div>
      </MainContentLayout>
    </DashboardContainer>
  );
};

export default FinancialDashboard; 