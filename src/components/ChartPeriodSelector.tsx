import React from 'react';
import styled from 'styled-components';

export type PeriodType = 'year' | 'month' | 'week';
export type ReportType = 'employee' | 'company' | 'order';

interface ChartPeriodSelectorProps {
  activePeriod: PeriodType;
  onPeriodChange: (period: PeriodType) => void;
  className?: string;
}

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  color: ${props => props.active ? props.theme.colors.textPrimary : props.theme.colors.textSecondary};
  border-bottom: ${props => props.active ? ` 2px solid ${props.theme.colors.primary}` : '2px solid transparent'};
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  background: transparent;
`;

const ChartPeriodSelector: React.FC<ChartPeriodSelectorProps> = ({
  activePeriod,
  onPeriodChange,
  className
}) => {
  return (
    <SelectorContainer className={className}>
      <TabButton
        active={activePeriod === 'year'}
        onClick={() => onPeriodChange('year')}
      >
        Год
      </TabButton>
      <TabButton
        active={activePeriod === 'month'}
        onClick={() => onPeriodChange('month')}
      >
        Месяц
      </TabButton>
      <TabButton
        active={activePeriod === 'week'}
        onClick={() => onPeriodChange('week')}
      >
        Неделя
      </TabButton>
    </SelectorContainer>
  );
};

export default ChartPeriodSelector; 