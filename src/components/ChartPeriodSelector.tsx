import React from 'react';
import styled from 'styled-components';

export type PeriodType = 'year' | 'month' | 'week';

interface ChartPeriodSelectorProps {
  activePeriod: PeriodType;
  onPeriodChange: (period: PeriodType) => void;
  className?: string;
}

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  background: ${props => props.active ? '#A060FC' : 'transparent'};
  color: ${props => props.active ? '#FFFFFF' : '#323F47'};
  border: 1px solid ${props => props.active ? '#A060FC' : '#E5E5E5'};
  border-radius: 4px;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? '#A060FC' : '#F8F8F8'};
  }
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