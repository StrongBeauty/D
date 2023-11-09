import React, { memo, useCallback } from 'react';
import { Icon } from '../../Icon/Icon';
import { Circle } from '../../Circle/Circle';
import tick from '../../svg/tick.svg';
import './DropDownItem.css';

export const DropdownItem = memo(({ option, selected, onSelect }) => {
  const handleItemClick = useCallback(() => {
    onSelect(option);
  }, [onSelect, option]);

  return (
    <li className="item">
      {option}
      <div>
        <Circle handleItemClick={handleItemClick}>{selected ? <Icon src={tick} /> : null}</Circle>
      </div>
    </li>
  );
});
