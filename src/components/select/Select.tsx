import type { FC } from 'react';
import ChevronDown from '../../icons/chevron-down.svg';
import './styles.scss';

export interface SelectOption {
  title: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
}

export const Select: FC<SelectProps> = () => {
  return (
    <div className="select">
      <button className="select__trigger">
        <span>All</span>
        <img src={ChevronDown} alt="chevron down" />
      </button>
    </div>
  );
};
