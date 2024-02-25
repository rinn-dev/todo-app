import { type FC } from 'react';
import classNames from 'classnames';
import { RenderIf } from '../utils/RenderIf';
import Checked from '../../icons/checked.svg';
import './styles.scss';

interface CheckboxProps {
  isChecked: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ isChecked, onChange }) => {
  return (
    <button
      type="button"
      role="checkbox"
      className={classNames('checkbox', { checked: isChecked })}
      onClick={() => onChange(!isChecked)}
    >
      <RenderIf condition={isChecked}>
        <img
          width={12}
          height={12}
          src={Checked}
          alt="Checked"
          className="checkbox__check"
        />
      </RenderIf>
    </button>
  );
};
