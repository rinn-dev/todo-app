import { useState, type FC, Dispatch, SetStateAction } from 'react';
import classnames from 'classnames';
import ChevronDown from '../../icons/chevron-down.svg';
import { RenderIf } from '../utils/RenderIf';
import './styles.scss';

export interface SelectOption {
  title: string;
  value: string;
  id: number;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

export const Select: FC<SelectProps> = ({
  value,
  placeholder,
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="select">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="select__trigger"
      >
        <span>{value ?? placeholder ?? 'Select'}</span>
        <img src={ChevronDown} alt="chevron down" />
      </button>
      <RenderIf condition={isOpen}>
        <div className="select__list">
          {options.map((option) => {
            const { title, value: optionValue, id } = option;
            const isActive = optionValue === value;

            return (
              <button
                key={id}
                onClick={() => {
                  onChange(optionValue);
                  setIsOpen(false);
                }}
                className={classnames('select__list__item', {
                  'select__list__active-item': isActive,
                })}
              >
                {title}
              </button>
            );
          })}
        </div>
      </RenderIf>
    </div>
  );
};
