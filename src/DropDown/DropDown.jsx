import { memo, useState, useCallback } from 'react';
import { List } from './List/List.jsx';
import { DropDownHeader } from './DropDownHeader/DropDownHeader';
import './DropDown.css';

export const DropDown = memo(({ options }) => {
  const locationsValues = options.map(({ location }) => location);
  const locations = locationsValues.join(', ');

  const [isOpen, setIsOpen] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = useCallback(
    (option) => {
      if (selectedOptions.some((label) => label === option)) {
        setSelectedOptions(selectedOptions.filter((label) => label !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    },
    [selectedOptions],
  );

  return (
    <div className="dropdown">
      <div className="label">Локация</div>
      <DropDownHeader
        locations={locations}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleOption={toggleOption}
        quantitySelected={selectedOptions.length}
      />
      {isOpen && <List locationsValues={locationsValues} options={options} selectedOptions={selectedOptions} toggleOption={toggleOption} />}
    </div>
  );
});
